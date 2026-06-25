import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import developerPortrait from '@/assets/c.jpg';

const highlights = [
  { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, scalable code' },
  { icon: Lightbulb, title: 'Problem Solver', description: 'Creative solutions to challenges' },
  { icon: Rocket, title: 'Fast Learner', description: 'Adapting to new technologies' },
  { icon: Users, title: 'Team Player', description: 'Collaborative and communicative' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative">
              {/* Main image container */}
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-primary p-1 glow-primary">
                <div className="w-full h-full rounded-3xl overflow-hidden">
                  <img 
                    src={developerPortrait} 
                    alt="Developer portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-2xl border border-border flex items-center justify-center animate-float shadow-xl">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary rounded-2xl border border-border flex items-center justify-center animate-float shadow-xl" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">💡</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <span className="text-primary font-mono text-sm mb-4 block">// About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate about creating <span className="text-gradient">impactful</span> solutions
              </h2>
            </div>
            
            <div className="reveal stagger-1">
              <p className="text-muted-foreground text-lg mb-6">
                I'm a fresh graduate with a strong foundation in software development, eager to apply my skills in real-world projects. 
                My journey in tech started with curiosity about how things work, which evolved into a passion for building things that matter.
              </p>
            </div>
            
            <div className="reveal stagger-2">
              <p className="text-muted-foreground text-lg mb-8">
                I specialize in full-stack development with modern technologies like React, Node.js, and cloud services. 
                I believe in writing clean, efficient code and creating intuitive user experiences.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <div 
                  key={title}
                  className={`reveal stagger-${index + 3} p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 group`}
                >
                  <Icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
