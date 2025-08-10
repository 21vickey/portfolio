import { ExternalLink, Github, ArrowRight, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import ecommerceImage from '../assets/ecommerce.jpg';
import pathlinesImage from '../assets/pathlines.jpg';
import tstoreImage from '../assets/t-store.png';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { DialogHeader } from './ui/dialog';
import VideoModal from './VideoModel';

const PortfolioSection = () => {

 const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  const projects = [
     {
      title: "T-Store",
      subtitle: "Ecommerce Mobile App UI",
      image: tstoreImage,
      description: "Complete e-commerce solution with role-based authentication, secure payments, cloud-based image hosting, and comprehensive order management system.",
      technologies: ["Flutter", "Node.js","GetX", "Firebase", "Cloudinary"],
      features: [
        "User-based authentication system",
        "Secure Razorpay payment integration",
        "Cloud-based image hosting with Cloudinary",
        "Real-time order tracking",
        "Admin dashboard for inventory management",
        "Customer support chat system"
      ],
      type: "Mobile App",
      status: "Completed",
      // impact: {
      //   users: "1000+",
      //   rating: "4.8★",
      //   downloads: "5K+"
      // },
      demoVideo: "https://res.cloudinary.com/dhaa2zhrz/video/upload/v1754841857/WhatsApp_Video_2025-08-10_at_7.45.58_PM_dbqg7k.mp4" // Sample video - replace with your project demo
    },
    {
      title: "E-Commerce Suite",
      subtitle: "Grocery & Delivery Apps",
      image: ecommerceImage,
      description: "Complete e-commerce solution with role-based authentication, secure payments, cloud-based image hosting, and comprehensive order management system.",
      technologies: ["Flutter", "Node.js", "MySQL", "GetX", "Razorpay", "Cloudinary"],
      features: [
        "Role-based authentication system",
        "Secure Razorpay payment integration",
        "Cloud-based image hosting with Cloudinary",
        "Real-time order tracking",
        "Admin dashboard for inventory management",
        "Customer support chat system"
      ],
      type: "Mobile App",
      status: "Completed",
      // impact: {
      //   users: "1000+",
      //   rating: "4.8★",
      //   downloads: "5K+"
      // },
      demoVideo: "https://res.cloudinary.com/dhaa2zhrz/video/upload/v1754837702/WhatsApp_Video_2025-08-10_at_7.46.46_PM_izhsb5.mp4" // Sample video - replace with your project demo
    },
    {
      title: "PathLines",
      subtitle: "Education LMS App",
      image: pathlinesImage,
      description: "Comprehensive Learning Management System with live class schedules, attendance tracking, fee management, Q&A forum, and integrated testing platform.",
      technologies: ["Flutter", "PHP APIs", "MySQL", "Provider", "MVC/MVVM"],
      features: [
        "Live class scheduling and notifications",
        "Automated attendance tracking",
        "Fee management and payment system",
        "Interactive Q&A forum",
        "In-app tests and assessments",
        "Student progress analytics"
      ],
      type: "Education Platform",
      status: "Completed", 
      // impact: {
      //   users: "0",
      //   rating: "0",
      //   classes: "0"
      // },
      demoVideo: "https://res.cloudinary.com/dhaa2zhrz/video/upload/v1754840315/Screen_Recording_2025-08-10_210732_z7uips.mp4" // Sample video - replace with your project demo
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of successful applications built with modern technologies 
            and best practices, delivering real value to users and businesses.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="card-modern overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">
                      {project.type}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                  <p className="text-xl text-accent font-semibold mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Metrics */}
                {/* <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-xl">
                  {Object.entries(project.impact).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-foreground">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div> */}

                {/* Project Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedVideo({ url: project.demoVideo, title: project.title })}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-16 text-center">
          <Card className="card-modern">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to See More Projects?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I've worked on various other projects including web applications, 
                UI/UX designs, and smaller mobile apps. Let's discuss your project requirements!
              </p>
              <Button className="btn-hero" onClick={scrollToContact}>
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
};

export default PortfolioSection;