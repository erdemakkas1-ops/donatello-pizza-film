"use client"

import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { TestimonialCard, type TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: ReactNode
  description: ReactNode
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  /** Extra header content, e.g. rating summary and source link. */
  meta?: ReactNode
  className?: string
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  meta,
  className
}: TestimonialsSectionProps) {
  const [paused, setPaused] = useState(false)
  // Two identical tracks each move by their own width, so the loop never jumps.
  const track = (hidden?: boolean) => (
    <div
      aria-hidden={hidden || undefined}
      className={cn(
        "flex shrink-0 flex-row justify-around [gap:var(--gap)] animate-marquee",
        "group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]",
        paused && "[animation-play-state:paused]",
        "motion-reduce:animate-none",
        hidden && "motion-reduce:hidden"
      )}
    >
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.author.name} {...testimonial} />
      ))}
    </div>
  )

  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-16 sm:py-24 md:py-28 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-10 text-center sm:gap-14">
        <div className="flex flex-col items-center gap-5 px-4 sm:gap-7">
          <h2 className="m-0 max-w-[720px]">{title}</h2>
          <div className="max-w-[600px] text-muted-foreground">{description}</div>
          {meta}
          <button
            type="button"
            onClick={() => setPaused(!paused)}
            aria-pressed={paused}
            className="min-h-11 cursor-pointer border border-[var(--line)] bg-transparent px-4 text-[11px] tracking-[2px] text-foreground hover:border-[var(--lime)] focus-visible:border-[var(--lime)] motion-reduce:hidden"
          >
            {paused ? "KAYDIRMAYI BAŞLAT" : "KAYDIRMAYI DURDUR"}
          </button>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex w-full flex-row overflow-hidden p-2 [--gap:1.25rem] [gap:var(--gap)] [--duration:70s] motion-reduce:snap-x motion-reduce:overflow-x-auto">
            {track()}
            {track(true)}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/5 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/5 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
}
