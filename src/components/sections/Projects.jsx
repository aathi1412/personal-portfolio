import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <div className="grid gap-8 sm:grid-cols-[200px_1fr] sm:gap-16">
        {/* Label column — same pattern as About/Skills */}
        <div>
          <p className="font-mono text-sm text-accent">// Projects</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground-light dark:text-foreground-dark">
            Proof, not promises.
          </h2>
        </div>

        {/* Content column */}
        <div className="space-y-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-light dark:text-muted-dark">
              More Projects
            </h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {others.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
