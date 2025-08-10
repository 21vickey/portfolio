import { 
  Smartphone, 
  Server, 
  Database, 
  Code, 
  Palette, 
  GitBranch,
  Cloud,
  Shield
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Android Studio", "iOS Development"],
      description: "Cross-platform mobile app development"
    },
    {
      icon: Server,
      title: "Backend Development", 
      skills: ["Node.js", "REST APIs", "Express.js", "API Integration"],
      description: "Server-side development and API design"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "Firebase", "Cloud Firestore", "Database Design"],
      description: "Data management and storage solutions"
    },
    {
      icon: Code,
      title: "Architecture & Patterns",
      skills: ["GetX", "Provider", "MVVM", "MVC"],
      description: "State management and architectural patterns"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description: "Creating beautiful and intuitive interfaces"
    },
    {
      icon: GitBranch,
      title: "Development Tools",
      skills: ["Git", "GitHub", "VS Code", "Android Studio"],
      description: "Version control and development environment"
    },
    {
      icon: Cloud,
      title: "Cloud & Services",
      skills: ["Cloudinary", "Firebase", "Cloud Storage", "CDN"],
      description: "Cloud services and deployment"
    },
    {
      icon: Shield,
      title: "Payment & Security",
      skills: ["Razorpay", "Payment Gateway", "Authentication", "Security"],
      description: "Secure payment processing and authentication"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications 
            from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-modern group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <category.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold">
                2+
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Years Experience</h4>
              <p className="text-muted-foreground">In mobile development</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold">
                10+
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Projects Completed</h4>
              <p className="text-muted-foreground">Successful deployments</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold">
                100%
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Client Satisfaction</h4>
              <p className="text-muted-foreground">Quality delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;