import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectTaskapp from '@/assets/project-taskapp.jpg';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
    image: projectEcommerce,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: projectTaskapp,
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with location-based forecasts and interactive charts.',
    image: null,
    emoji: '🌤️',
    tags: ['React', 'API Integration', 'Chart.js'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Portfolio Generator',
    description: 'A tool that helps developers create stunning portfolios with customizable templates.',
    image: null,
    emoji: '🎨',
    tags: ['Vue.js', 'Tailwind', 'Firebase'],
    github: '#',
    live: '#',
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal text-primary font-mono text-sm mb-4 block">// My Projects</span>
          <h2 className="reveal stagger-1 text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="reveal stagger-2 text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`reveal stagger-${Math.min(index + 1, 4)} group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10`}
            >
              {/* Project Image/Icon Area */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-8xl group-hover:scale-110 transition-transform duration-500">
                    {project.emoji}
                  </span>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.github}
                    className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.live}
                    className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-gradient-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-mono rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="reveal text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
