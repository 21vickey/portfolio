import { GraduationCap, Code, Palette, Briefcase } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "2+ Years Experience",
      description: "Cross-platform mobile development"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful user experiences"
    },
    {
      icon: Briefcase,
      title: "Business Background",
      description: "BBA with technical expertise"
    },
    {
      icon: GraduationCap,
      title: "Full-Stack Skills",
      description: "End-to-end development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer combining business acumen with technical expertise 
            to create impactful digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-foreground">
              <p className="text-lg leading-relaxed">
                I'm a <strong>Full-Stack & Flutter Developer</strong> with over 2 years of experience 
                in designing, developing, and deploying cross-platform mobile applications. 
              </p>
              <p className="text-lg leading-relaxed">
                My unique combination of a <strong>Bachelor of Business Administration (BBA)</strong> 
                background and hands-on UI/UX design skills gives me a comprehensive understanding 
                of both the technical and business aspects of software development.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in building <strong>secure, user-friendly, and commercially successful</strong> 
                mobile solutions across the full development lifecycle, from concept to deployment.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">Education</h3>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Bachelor of Business Administration (BBA)</p>
                  <p className="text-muted-foreground">Marwari College, Ranchi • Graduated 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="card-modern group hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;