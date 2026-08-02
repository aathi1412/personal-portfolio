import { skillGroups } from '@/data/skills';
import SkillBadge from '@/components/ui/SkillBadge';

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="grid gap-8 sm:grid-cols-[200px_1fr] sm:gap-16">
        {/* Label column — same pattern as About */}
        <div>
          <p className="font-mono text-sm text-accent">// Skills</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground-light dark:text-foreground-dark">
            Technical breadth, backend-weighted.
          </h2>
        </div>

        {/* Content column — grouped badge rows */}
        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-light dark:text-muted-dark">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
