import { Download, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light dark:border-border-dark">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Top row: brand + quick actions */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <a
              href="#"
              className="font-display text-base font-semibold text-foreground-light dark:text-foreground-dark"
            >
              <span className="font-mono font-normal text-accent">&lt;</span>
              {profile.name}
              <span className="font-mono font-normal text-accent">/&gt;</span>
            </a>
            <p className="mt-1 text-xs text-muted-light dark:text-muted-dark">
              {profile.title}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light text-foreground-light transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:text-foreground-dark"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light text-foreground-light transition-colors hover:border-accent hover:text-accent dark:border-border-dark dark:text-foreground-dark"
            >
              <FaLinkedin size={16} />
            </a>

            {/* Resume isn't ready yet — a real disabled state, not a dead link. */}
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Resume coming soon"
              className="flex cursor-not-allowed items-center gap-1.5 rounded-full border border-border-light px-4 py-2 text-xs font-medium text-muted-light opacity-60 dark:border-border-dark dark:text-muted-dark"
            >
              <Download size={14} />
              Resume <span className="hidden sm:inline">(coming soon)</span>
            </button>
          </div>
        </div>

        {/* Bottom row: copyright + back to top */}
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-border-light pt-6 dark:border-border-dark sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-light dark:text-muted-dark">
            © {year} {profile.name}. Built with React &amp; Tailwind CSS.
          </p>
          <a
            href="#"
            className="flex items-center gap-1 text-xs text-muted-light transition-colors hover:text-accent dark:text-muted-dark"
          >
            Back to top
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
