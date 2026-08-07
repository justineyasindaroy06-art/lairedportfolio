'use client'

import { ArrowDown } from 'lucide-react'
import { heroBadges } from '@/lib/portfolio-data'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      {/* soft radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 35%, color-mix(in oklch, var(--primary) 12%, transparent) 0%, transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {heroBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-medium text-primary"
            >
              {badge}
            </span>
          ))}
        </div>

        <h1 className="font-display text-5xl font-bold leading-tight text-balance md:text-7xl">
          Building Smarter Workflows with{' '}
          <span className="gradient-text">AI &amp; Automation</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
          I partner with healthcare professionals and eCommerce brands to build
          organized operations through executive support, AI automation, and
          scalable systems that drive efficiency and long-term growth.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollToSection('contact')}
            className="brand-gradient rounded-lg px-8 py-4 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Schedule a Consultation
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="rounded-lg border border-border px-8 py-4 font-semibold text-foreground transition-all hover:bg-secondary/60"
          >
            View My Work
          </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to about section"
          className="mt-16 inline-flex animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-6" />
        </button>
      </div>
    </section>
  )
}
