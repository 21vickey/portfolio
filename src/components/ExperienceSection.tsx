import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Flutter Developer",
      type: "Internship",
      company: "Jeetmantra Classes Pvt Ltd",
      period: "Mar 2025 – Jun 2025",
      location: "Remote",
      description: "Developed cross-platform mobile applications using Flutter framework",
      highlights: [
        "Built responsive mobile applications for educational platform",
        "Implemented state management using Provider and GetX",
        "Integrated REST APIs and real-time features",
        "Collaborated with design team for UI/UX improvements"
      ],
      color: "from-primary to-primary/80"
    },
    {
      title: "Flutter Developer", 
      type: "Internship",
      company: "Eshuzo Global Technologies Pvt Ltd",
      period: "Oct 2024 – Jan 2025",
      location: "Remote",
      description: "Focused on mobile app development and API integrations",
      highlights: [
        "Developed e-commerce mobile applications",
        "Implemented secure payment gateway integrations",
        "Optimized app performance and user experience",
        "Worked with Firebase for backend services"
      ],
      color: "from-accent to-accent/80"
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      company: "Krinext",
      period: "Apr 2023 – Jan 2024",
      location: "Ranchi, Jharkhand",
      description: "Led design initiatives for web and mobile applications",
      highlights: [
        "Created user-centered design solutions",
        "Developed comprehensive design systems",
        "Conducted user research and usability testing",
        "Collaborated with development teams for implementation"
      ],
      color: "from-purple-500 to-purple-400"
    },
    {
      title: "Business Developer",
      type: "Internship", 
      company: "Couple.in",
      period: "Dec 2022 – Mar 2023",
      location: "Remote",
      description: "Focused on business development and market research",
      highlights: [
        "Analyzed market trends and opportunities",
        "Developed business strategies and proposals",
        "Built relationships with potential clients",
        "Contributed to product development decisions"
      ],
      color: "from-orange-500 to-orange-400"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            MY <span className="text-gradient">EXPERIENCE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional growth and contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${exp.period}`}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 md:transform md:-translate-x-1/2"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="portfolio-card">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Details */}
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <h4 className="text-lg text-primary font-semibold mb-2">{exp.company}</h4>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;