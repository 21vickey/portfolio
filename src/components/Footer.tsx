import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Vickey Kumar. Made with</span>
            <Heart className="w-4 h-4 text-accent fill-current" />
            <span>and lots of ☕</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Follow me:</span>
            <div className="flex gap-3">
              {[
                { name: 'GitHub', href: '#' },
                { name: 'LinkedIn', href: 'https://linkedin.com/in/vickey-kr-prajapati-969224244' },
                { name: 'Twitter', href: '#' },
                { name: 'Email', href: 'mailto:kumar21vickey@gmail.com' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-xs font-medium hover:border-primary hover:text-primary transition-colors"
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {social.name.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;