import Image from 'next/image'

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-border/40 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl brand-gradient opacity-20 blur-2xl" aria-hidden />
            <div className="relative aspect-[1122/1402] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/profile-portrait.png"
                alt="Portrait of Justine Daroy, Executive Assistant and AI Automation specialist, surrounded by AI and productivity tool graphics"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-bold">About Me</h2>
            <div className="mt-6 space-y-6 leading-relaxed text-muted-foreground">
              <p>
                I&apos;m an Executive Assistant with experience supporting
                healthcare professionals and eCommerce businesses by managing
                operations, coordinating projects, and creating organized
                systems that keep businesses running efficiently.
              </p>
              <p>
                Over time, I discovered a passion for improving workflows beyond
                traditional administrative support. This led me to explore AI
                tools, automation, and digital systems that eliminate repetitive
                tasks and create more efficient ways of working.
              </p>
              <p>
                Today, I&apos;m expanding my expertise in AI automation, workflow
                design, and business systems to help modern businesses save time,
                improve productivity, and build scalable operations. I believe
                great systems allow great people to focus on meaningful work
                instead of manual processes.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-card/60 p-6">
              <p className="font-semibold text-primary">Mission</p>
              <p className="mt-4 text-muted-foreground">
                Help businesses work smarter by combining exceptional executive
                support with intelligent systems and AI automation that simplify
                operations and create lasting efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
