'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, Phone } from 'lucide-react'
import { LinkedInIcon } from '@/components/icons/linkedin-icon'
import {
  contactInfo,
  serviceOptions,
} from '@/lib/portfolio-data'

const inputClasses =
  'w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="border-t border-border/40 px-6 py-24"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-display text-4xl font-bold text-balance">
          Let&apos;s Work Together
        </h2>
        <p className="mt-4 text-center text-muted-foreground text-pretty">
          Ready to build smarter workflows? Get in touch.
        </p>

        {submitted ? (
          <div className="mt-12 flex flex-col items-center gap-4 rounded-xl border border-primary/30 bg-card/60 p-10 text-center">
            <CheckCircle2 className="size-12 text-primary" />
            <h3 className="font-display text-2xl font-bold">Thank you!</h3>
            <p className="text-muted-foreground">
              Your message has been received. I&apos;ll get back to you within
              one business day.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-2 block text-sm font-medium">
                Service Interested In
              </label>
              <select id="service" name="service" className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                Contact Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+63 912 345 6789"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project..."
                className={`${inputClasses} h-32 resize-none`}
              />
            </div>

            <button
              type="submit"
              className="brand-gradient w-full rounded-lg px-8 py-4 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-12 border-t border-border pt-12 text-center">
          <p className="mb-6 text-muted-foreground">Or reach out directly</p>
          <div className="flex flex-col items-center gap-4">
            
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 text-primary transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              {contactInfo.email}
            </a>
            
              href={contactInfo.phoneHref}
              className="inline-flex items-center gap-2 text-primary transition-colors hover:text-foreground"
            >
              <Phone className="size-4" />
              {contactInfo.phone}
            </a>
            
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
