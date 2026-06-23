import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-gradient">
            Dev.
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} John Doe. Made with <Heart size={14} className="text-accent fill-accent" /> and lots of ☕
          </p>

          {/* Back to top */}
          <a 
            href="#home"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
