import { Code, Database, Smartphone, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: ["Flutter", "Dart", "React", "JavaScript", "HTML5", "CSS3"],
      color: "from-primary to-primary/80"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Designing and managing robust database systems",
      skills: ["MySQL", "Firebase", "PostgreSQL", "MongoDB"],
      color: "from-accent to-accent/80"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Creating scalable server-side applications",
      skills: ["Node.js", "PHP", "REST APIs", "Express.js"],
      color: "from-purple-500 to-purple-400"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Crafting beautiful and user-friendly interfaces",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      color: "from-orange-500 to-orange-400"
    }
  ];

  const tools = [
    "Android Studio", "VS Code", "Git", "GitHub", "Postman", 
    "Firebase Console", "Adobe Creative Suite", "Slack"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            I SPECIALIZE IN A RANGE OF{' '}
            <span className="text-gradient">💪 SKILLS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From mobile app development to full-stack solutions, 
            I bring versatility and expertise to every project.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="portfolio-card group slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center fade-in">
          <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span 
                key={tool}
                className="px-4 py-2 bg-card border border-border rounded-lg font-medium hover:border-primary transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;