'use client'

import { services } from '@/lib/portfolio-data'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-t border-border/40 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-4xl font-bold text-balance">
          Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground text-pretty">
          Tailored solutions to streamline your business operations
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-card/40 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/70"
              >
                <div className="flex size-12 items-center justify-center rounded-lg brand-gradient text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-balance">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="brand-gradient rounded-lg px-8 py-4 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Book a Call
          </button>
        </div>
      </div>
    </section>
  )
}
