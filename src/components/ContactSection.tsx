import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

import { Label } from '../components/ui/label';
import { toast } from '../hooks/use-toast';
import { Textarea } from './ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9153984162",
      href: "tel:+919153984162"
    },
    {
      icon: Mail,
      label: "Email", 
      value: "kumar21vickey@gmail.com",
      href: "mailto:kumar21vickey@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ranchi, Jharkhand",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/vickeykumar",
      color: "hover:text-gray-700"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vickey-kr-prajapati-969224244",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:kumar21vickey@gmail.com",
      color: "hover:text-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-modern">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="transition-modern"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="transition-modern"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="transition-modern resize-none"
                  />
                </div>
                
                <Button type="submit" className="btn-hero w-full">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      {info.href === "#" ? (
                        <p className="text-muted-foreground">{info.value}</p>
                      ) : (
                        <a 
                          href={info.href} 
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-xl">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-muted hover:bg-accent hover:text-accent-foreground transition-all group ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="card-modern">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Download My Resume
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get a detailed overview of my experience, skills, and projects.
                </p>
                <Button className="btn-hero">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Available for Work Banner */}
        <div className="mt-16">
          <Card className="card-accent">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                🚀 Available for New Projects
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                I'm currently accepting new projects and collaborations. 
                Whether you need a mobile app, web application, or UI/UX design, 
                let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="btn-outline-modern"
                  onClick={() => {
                    const element = document.querySelector('#portfolio');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View My Work
                </Button>
                <Button 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={() => document.querySelector('#contact form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start a Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;