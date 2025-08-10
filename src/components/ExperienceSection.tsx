import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Flutter Developer",
      type: "Internship",
      company: "Jeetmantra Classes Pvt Ltd",
      location: "Remote",
      period: "Mar 2025 – Jun 2025",
      status: "Upcoming",
      description: "Upcoming internship focusing on advanced Flutter development and educational technology solutions.",
      technologies: ["Flutter", "Dart", "Firebase", "Educational Apps"],
      highlights: [
        "Advanced Flutter development techniques",
        "Educational app development",
        "Real-time learning platforms",
        "Student engagement features"
      ]
    },
    {
      title: "Flutter Developer", 
      type: "Internship",
      company: "Eshuzo Global Technologies Pvt Ltd",
      location: "Remote",
      period: "Oct 2024 – Jan 2025",
      status: "Current",
      description: "Developing cross-platform mobile applications using Flutter framework with focus on scalable architecture and user experience.",
      technologies: ["Flutter", "Dart", "GetX", "REST APIs", "Firebase"],
      highlights: [
        "Built scalable mobile applications",
        "Implemented state management with GetX",
        "Integrated third-party APIs and services",
        "Collaborated with cross-functional teams"
      ]
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      company: "Krinext",
      location: "Ranchi, Jharkhand",
      period: "Apr 2023 – Jan 2024",
      status: "Completed",
      description: "Designed user interfaces and experiences for web and mobile applications, focusing on user-centered design principles.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      highlights: [
        "Created 50+ UI/UX designs for various clients",
        "Conducted user research and usability testing",
        "Developed design systems and style guides",
        "Improved user engagement by 40% through design optimizations"
      ]
    },
    {
      title: "Business Developer",
      type: "Internship", 
      company: "Couple.in",
      location: "Remote",
      period: "Dec 2022 – Mar 2023",
      status: "Completed",
      description: "Contributed to business development strategies and market analysis for dating platform startup.",
      technologies: ["Market Research", "Business Strategy", "Analytics", "CRM"],
      highlights: [
        "Conducted market research and competitor analysis",
        "Developed business strategies for user acquisition",
        "Analyzed user behavior and engagement metrics",
        "Contributed to product roadmap planning"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Current': return 'bg-green-500';
      case 'Upcoming': return 'bg-blue-500';
      case 'Completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through various roles and technologies, continuously learning 
            and growing in the field of software development and design.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:transform lg:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background lg:transform lg:-translate-x-2 z-10"></div>

                {/* Content */}
                <div className={`w-full lg:w-1/2 ml-12 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                }`}>
                  <Card className="card-modern">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Building className="h-4 w-4 text-accent" />
                            <span className="font-semibold text-foreground">{exp.company}</span>
                            <Badge variant="outline" className="text-xs">{exp.type}</Badge>
                          </div>
                        </div>
                        <Badge className={`${getStatusColor(exp.status)} text-white`}>
                          {exp.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Achievements</h4>
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div className="mt-16">
          <Card className="card-modern">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Career Highlights</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">2+</div>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">4</div>
                  <p className="text-muted-foreground">Companies Worked With</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;