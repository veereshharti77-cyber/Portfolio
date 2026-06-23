import techAbstract from '@/assets/tech-abstract.jpg';
import { Atom, Code, FileCode, Server, Palette, Database, GitBranch, Container, Cloud, PenTool } from 'lucide-react';

const skills = [
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'Java', level: 80, category: 'Language' },
  { name: 'JavaScript', level: 70, category: 'Language' },
  { name: 'Python', level: 70, category: 'Language' },
  { name: 'Tailwind CSS', level: 70, category: 'Frontend' },
  { name: 'SQL', level: 60, category: 'Database' }

];

const technologies = [
  { name: 'React', icon: Atom },
  { name: 'Java', icon: Code },
  { name: 'JavaScript', icon: FileCode },
  { name: 'Python', icon: Code },
  { name: 'TailwindCSS', icon: Palette },
  { name: 'SQL', icon: Database },
  { name: 'Git', icon: GitBranch },
  { name: 'Figma', icon: PenTool },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${techAbstract})` }}
      />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal text-primary font-mono text-sm mb-4 block">// My Skills</span>
          <h2 className="reveal stagger-1 text-4xl md:text-5xl font-bold mb-4">
            Technologies I <span className="text-gradient">Work With</span>
          </h2>
          <p className="reveal stagger-2 text-muted-foreground text-lg max-w-2xl mx-auto">
            Constantly learning and improving my toolkit to build better digital experiences
          </p>
        </div>

        {/* Technology Icons Grid */}
        <div className="reveal stagger-3 flex flex-wrap justify-center gap-4 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative px-6 py-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-3">
                <tech.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Bars */}
        <div className="max-w-3xl mx-auto">
          <h3 className="reveal text-2xl font-bold mb-8 text-center">Proficiency Levels</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className={`reveal stagger-${Math.min(index, 6)}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: 'slideInWidth 1.5s ease-out forwards',
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInWidth {
          from { width: 0%; }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
