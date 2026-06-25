import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-coding.jpg';
import resumePdf from '@/assets/Resume.pdf';
import useTextCycle from '@/hooks/useTextCycle';

const roles = [
  { text: 'Web Developer', color: '#00ff7f' },
  { text: 'Frontend Developer', color: '#00bfff' },
  { text: 'Software Developer', color: '#ff6b9d' }
];

const HeroSection = () => {
  const currentRole = useTextCycle(roles, 2500);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating shapes */}
        <div className="absolute top-1/3 right-1/4 w-4 h-4 border border-primary/50 rotate-45 animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 border border-accent/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-primary/30 rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary border border-border text-sm font-mono text-muted-foreground mb-6">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="leading-tight ...">
  <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground">
    Veerabhadrappa
  </span>
  <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-gradient">
    Harti
  </span>
</h1>

          {/* Title with cycling effect */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 animate-slide-up opacity-0 h-12 md:h-14" style={{ animationDelay: '0.3s' }}>
            <span 
              className="inline-block transition-all duration-500 ease-out"
              style={{ 
                color: currentRole.color,
                textShadow: `0 0 20px ${currentRole.color}40, 0 0 40px ${currentRole.color}20`
              }}
            >
              {currentRole.text}
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            A passionate fresher developer crafting beautiful digital experiences with modern technologies. 
            Ready to turn ideas into reality.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
            <Button variant="gradient" size="xl">
              View My Work
            </Button>
            <a href={resumePdf} download>
              <Button variant="glass" size="xl">
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs font-mono">Scroll</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;