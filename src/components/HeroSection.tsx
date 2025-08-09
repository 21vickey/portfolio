import { ArrowDown, Download, Eye } from 'lucide-react';
import profileImage from '../assets/vickey-profile.png';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">CODING WITH</span>
                <br />
                <span className="text-gradient">PASSION</span>
                <br />
                <span className="text-foreground">CREATING WITH</span>
                <br />
                <span className="text-gradient">PURPOSE</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Hello and welcome to my web developer portfolio! I'm thrilled to showcase 
                my passion for crafting captivating and functional websites.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToPortfolio}
                className="btn-primary flex items-center gap-2"
              >
                <Eye size={20} />
                Let's Talk
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Download size={20} />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Follow Me:</span>
              <div className="flex gap-3">
                {['Fb', 'Ig', 'Tw', 'Li'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl transform rotate-6"></div>
              <div className="relative bg-gradient-to-br from-primary to-accent p-1 rounded-3xl">
                <img
                  src={profileImage}
                  alt="Vickey Kumar - Full-Stack & Flutter Developer"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;