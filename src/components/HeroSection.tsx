import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import profileImage from '../assets/vickey-profile.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up">
              <p className="text-accent font-semibold text-lg mb-4">👋 Hello, I'm</p>
              <h1 className="text-hero text-primary-foreground mb-6">
                Vickey<br />
                <span className="text-gradient">Kumar</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground/90 mb-6">
                Full-Stack & Flutter Developer
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl">
                Building secure, user-friendly, and commercially successful mobile solutions 
                with 2+ years of experience in cross-platform development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay">
              <Button 
                className="btn-hero text-lg px-8 py-6"
                onClick={() => scrollToSection('#portfolio')}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-modern text-lg px-8 py-6"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8 animate-fade-in-delay">
              <a 
                href="https://github.com/vickeykumar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <Github className="h-6 w-6 text-primary-foreground" />
              </a>
              <a 
                href="https://linkedin.com/in/vickey-kr-prajapati-969224244" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <Linkedin className="h-6 w-6 text-primary-foreground" />
              </a>
              <a 
                href="mailto:kumar21vickey@gmail.com"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <Mail className="h-6 w-6 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden card-accent">
                <img 
                  src={profileImage} 
                  alt="Vickey Kumar - Full-Stack & Flutter Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl shadow-accent animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-foreground rounded-xl opacity-80"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;