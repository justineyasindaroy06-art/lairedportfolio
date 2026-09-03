'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { heroBadges } from '@/lib/portfolio-data'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-20"
    >
      {/* Soft radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 35%, color-mix(in oklch, var(--primary) 12%, transparent) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* LEFT SIDE - TEXT */}
        <div>
          {/* Badges */}
          <div className="mb-8 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-medium text-primary"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
            Building Smarter Workflows with{' '}
            <span className="gradient-text">
              AI &amp; Automation
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            I partner with healthcare professionals and eCommerce brands to build
            organized operations through executive support, AI automation, and
            scalable systems that drive efficiency and long-term growth.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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

          {/* Scroll Down */}
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about section"
            className="mt-16 inline-flex animate-bounce text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowDown className="size-6" />
          </button>
        </div>

        {/* RIGHT SIDE - PROFILE IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden
            className="absolute inset-0 rounded-full brand-gradient opacity-20 blur-3xl"
          />

          <div className="relative w-full max-w-xl">
            <Image
              src="/images/profile-portrait.png"
              alt="Justine Daroy, Executive Assistant and AI Automation specialist"
              width={1122}
              height={1402}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
