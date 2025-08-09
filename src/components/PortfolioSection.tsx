import { ExternalLink, Github, Zap, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { useState } from 'react';

const PortfolioSection = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  const projects = [
    {
      title: "E-Commerce Suite",
      subtitle: "Grocery & Delivery Apps",
      description: "A comprehensive e-commerce platform with grocery ordering and delivery management systems",
      technologies: ["Flutter", "Node.js", "MySQL", "GetX", "Razorpay", "Cloudinary"],
      features: [
        "Role-based authentication system",
        "Secure payment integration with Razorpay",
        "Cloud-based image hosting",
        "Real-time order tracking",
        "Admin dashboard for management"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      gradient: "from-green-500 to-emerald-500",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      title: "PathLines",
      subtitle: "Education LMS App", 
      description: "A complete Learning Management System for educational institutions with comprehensive features",
      technologies: ["Flutter", "PHP APIs", "MySQL", "Provider", "MVC/MVVM"],
      features: [
        "Live class scheduling and management",
        "Attendance tracking system",
        "Fee management portal",
        "Interactive Q&A forum",
        "In-app test and assessment tools"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      gradient: "from-blue-500 to-purple-500",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            BROWSE OF <span className="text-gradient">📱 PROJECTS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in mobile app development and full-stack solutions
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} slide-up`}>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative portfolio-card p-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex gap-3">
                          <button className="btn-primary flex items-center gap-2">
                            <ExternalLink size={16} />
                            Live Demo
                          </button>
                          <button className="btn-secondary flex items-center gap-2">
                            <Github size={16} />
                            Code
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6 fade-in`}>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h3>
                  <p className="text-xl text-primary font-semibold mb-4">{project.subtitle}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Zap className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-4">
                  <button className="btn-primary">View Details</button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="btn-secondary flex items-center gap-2">
                        <Play size={16} />
                        Live Preview
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full">
                      <DialogHeader>
                        <DialogTitle>{project.title} - Live Preview</DialogTitle>
                      </DialogHeader>
                      <div className="aspect-video">
                        <video 
                          controls 
                          className="w-full h-full rounded-lg"
                          poster={project.image}
                        >
                          <source src={project.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;