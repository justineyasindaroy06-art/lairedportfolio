'use client'

import { LinkedInIcon } from '@/components/icons/linkedin-icon'
import { contactInfo, navItems } from '@/lib/portfolio-data'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/80 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <div className="font-display text-xl font-bold gradient-text">
              Clever &amp; Curated
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Organize • Automate • Elevate
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedInIcon className="size-5" />
          </a>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Clever &amp; Curated by Justine Daroy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
