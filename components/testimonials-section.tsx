'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-display text-4xl font-bold text-balance">
          What Clients Say
        </h2>
        <p className="mt-4 text-center text-muted-foreground text-pretty">
          Trusted by healthcare and eCommerce leaders
        </p>

        <div className="mt-12 rounded-2xl border border-border bg-card/50 p-8 md:p-12">
          <Quote className="size-8 text-primary" aria-hidden />
          <blockquote className="mt-6 text-xl leading-relaxed text-foreground/90 md:text-2xl">
            {active.quote}
          </blockquote>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full brand-gradient font-bold text-primary-foreground">
                {active.avatar}
              </div>
              <div>
                <p className="font-semibold">{active.name}</p>
                <p className="text-sm text-muted-foreground">
                  {active.title} • {active.company}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i === index ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/40',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
