import { Smartphone, Code, Palette, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Flutter App Development",
      subtitle: "Cross-platform Android/iOS",
      description: "Complete mobile app development from concept to deployment using Flutter framework for both Android and iOS platforms.",
      features: [
        "Cross-platform compatibility",
        "Native performance",
        "Custom UI/UX design",
        "App store deployment",
        "Maintenance & updates"
      ],
      color: "bg-blue-500"
    },
    {
      icon: Code,
      title: "Full-Stack Development", 
      subtitle: "Backend with Node.js, MySQL",
      description: "End-to-end web and mobile backend development with robust APIs, database design, and server-side logic.",
      features: [
        "REST API development",
        "Database design & optimization",
        "Authentication & authorization",
        "Third-party integrations",
        "Scalable architecture"
      ],
      color: "bg-green-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "Figma, Adobe XD, Prototyping",
      description: "Creating beautiful, intuitive user interfaces and experiences that delight users and drive engagement.",
      features: [
        "User research & analysis",
        "Wireframing & prototyping",
        "Visual design systems",
        "Usability testing",
        "Design implementation"
      ],
      color: "bg-purple-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive development services to bring your digital ideas to life 
            with modern technologies and best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-modern group">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-accent font-semibold">{service.subtitle}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group/btn"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-3xl border border-border shadow-modern">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. 
              I'm here to help bring your vision to life.
            </p>
            <Button className="btn-hero" onClick={scrollToContact}>
              Contact Me Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;