import profileImage from '../assets/vickey-profile.png';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl"></div>
              <img
                src={profileImage}
                alt="Vickey Kumar"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl portfolio-card"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                👋 Hello! I'm <span className="text-gradient">Vickey</span>, 
                — a creative and driven web developer with{' '}
                <span className="text-primary">3 YEARS OF EXPERIENCE</span>
              </h2>
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                In the field, I thrive on turning imaginative ideas into digital
                realities, constantly seeking innovative ways to
                blend design and technology. I possess a strong
                foundation in <span className="text-primary font-semibold">FRONT-END</span> and <span className="text-accent font-semibold">BACK-END</span>
              </p>

              <p>
                Full-Stack & Flutter Developer with over 2 years of experience in designing, 
                developing, and deploying cross-platform mobile applications. Combines a BBA 
                background and UI/UX design skills with hands-on expertise across the full 
                development lifecycle. Proven ability to build secure, user-friendly, and 
                commercially successful mobile solutions.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Education</h3>
                <p className="text-muted-foreground">
                  <span className="font-medium">Bachelor of Business Administration (BBA)</span>
                  <br />
                  Marwari College, Ranchi — Graduated 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;