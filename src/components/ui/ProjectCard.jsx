import { Code2 } from 'lucide-react';
import SkillBadge from './SkillBadge';

export default function ProjectCard({ project, featured = false }) {
  const { title, description, features, tech, githubUrl } = project;

  return (
    <div
      className={`flex h-full flex-col gap-4 rounded-2xl border border-border-light bg-surface-light p-6 transition-colors hover:border-accent dark:border-border-dark dark:bg-surface-dark ${
        featured ? 'sm:p-8' : ''
      }`}
    >
      <div>
        {featured && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Featured
          </span>
        )}
        <h3 className="mt-1 font-display text-xl font-semibold text-foreground-light dark:text-foreground-dark">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-light dark:text-muted-dark">
          {description}
        </p>
      </div>

      {features.length > 0 && (
        <ul className="grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-muted-light dark:text-muted-dark"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <SkillBadge key={item} label={item} />
          ))}
        </div>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground-light transition-colors hover:text-accent dark:text-foreground-dark"
        >
          <Code2 size={16} />
          View Code
        </a>
      </div>
    </div>
  );
}
