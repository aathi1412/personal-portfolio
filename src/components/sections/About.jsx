import { GraduationCap } from 'lucide-react';
import { profile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="grid gap-8 sm:grid-cols-[200px_1fr] sm:gap-16">
        {/* Label column — establishes the "// SectionName" header pattern
            reused across the rest of the page's sections. */}
        <div>
          <p className="font-mono text-sm text-accent">// About</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground-light dark:text-foreground-dark">
            Backend-focused, full-stack in practice.
          </h2>
        </div>

        {/* Content column */}
        <div className="space-y-6">
          <p className="max-w-xl text-base leading-relaxed text-muted-light dark:text-muted-dark sm:text-lg">
            {profile.about}
          </p>

          <div className="flex w-fit items-center gap-3 rounded-xl border border-border-light px-4 py-3 dark:border-border-dark">
            <GraduationCap size={18} className="shrink-0 text-accent" />
            <span className="font-mono text-sm text-foreground-light dark:text-foreground-dark">
              {profile.education}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
