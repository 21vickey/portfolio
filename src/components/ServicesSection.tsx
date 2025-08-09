import { Smartphone, Code, Palette, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Flutter App Development",
      description: "Cross-platform Android/iOS mobile applications with native performance and beautiful UI",
      features: ["Cross-platform compatibility", "Native performance", "Beautiful animations", "Push notifications"],
      color: "from-primary to-primary/80"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Full-Stack Development", 
      description: "Complete web solutions with robust backend architecture and modern frontend frameworks",
      features: ["RESTful APIs", "Database design", "Authentication", "Real-time features"],
      color: "from-accent to-accent/80"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality",
      features: ["User research", "Wireframing", "Prototyping", "Design systems"],
      color: "from-purple-500 to-purple-400"
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            WHAT I <span className="text-gradient">OFFER</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services tailored to bring your digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="portfolio-card group slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-border">
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;