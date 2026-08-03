import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

// Section ids these links point to. The sections themselves don't exist yet
// (they land in later milestones) — clicking a link is a no-op until then,
// that's expected, not a bug.
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border-light text-foreground-light transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:text-foreground-dark ${className}`}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle a solid/blurred background once the page has scrolled past the hero fold.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on route/hash change or resize back to desktop.
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border-light bg-background-light/80 backdrop-blur-md dark:border-border-dark dark:bg-background-dark/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo mark — mono brackets nod to the dev identity, kept quiet/minimal */}
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-foreground-light dark:text-foreground-dark"
        >
          <span className="font-mono font-normal text-accent">&lt;</span>
          Dev
          <span className="font-mono font-normal text-accent">/&gt;</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-muted-light transition-colors hover:text-accent dark:text-muted-dark"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light text-foreground-light dark:border-border-dark dark:text-foreground-dark"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-64' : 'max-h-0'
        } border-t border-border-light bg-background-light dark:border-border-dark dark:bg-background-dark`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 font-body text-sm font-medium text-muted-light transition-colors hover:bg-surface-light hover:text-accent dark:text-muted-dark dark:hover:bg-surface-dark"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
