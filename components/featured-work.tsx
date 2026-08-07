'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function FeaturedWork() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-4xl font-bold text-balance">
          Featured Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground text-pretty">
          Real work that drives results for healthcare and eCommerce businesses
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const expanded = expandedProject === project.id
            return (
              <article
                key={project.id}
                className="group overflow-hidden rounded-xl border border-border bg-card/40 transition-all duration-300 hover:border-primary/40 hover:bg-card/70"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {expanded && (
                    <div className="mt-4 border-t border-border pt-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.fullDescription}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded bg-secondary/70 px-2 py-1 text-xs text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() =>
                      setExpandedProject(expanded ? null : project.id)
                    }
                    className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-foreground"
                    aria-expanded={expanded}
                  >
                    {expanded ? 'Hide Details' : 'View Details'}
                    <ChevronDown
                      className={cn(
                        'size-4 transition-transform',
                        expanded && 'rotate-180',
                      )}
                    />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
