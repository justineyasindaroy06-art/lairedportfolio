import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { AboutSection } from '@/components/about-section'
import { FeaturedWork } from '@/components/featured-work'
import { ServicesSection } from '@/components/services-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <Hero />
      <AboutSection />
      <FeaturedWork />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
