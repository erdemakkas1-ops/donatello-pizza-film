import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar?: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

const initials = (name: string) =>
  name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toLocaleUpperCase("tr")

export function TestimonialCard({
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? "a" : "figure"

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "m-0 flex w-[min(78vw,340px)] shrink-0 flex-col border border-[var(--line)]",
        "bg-gradient-to-b from-muted to-background",
        "p-5 text-start sm:w-[360px] sm:p-7",
        "transition-colors duration-300 hover:border-[var(--lime)]",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="size-11">
          {author.avatar && <AvatarImage src={author.avatar} alt="" />}
          <AvatarFallback className="bg-[var(--lime)]/15 text-xs tracking-[1px] text-[var(--lime)]">
            {initials(author.name)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start gap-1">
          <span className="[font-family:var(--font-display)] text-xl leading-none text-foreground">
            {author.name}
          </span>
          <span className="text-[11px] tracking-[1px] text-muted-foreground">
            {author.handle}
          </span>
        </div>
      </div>
      <blockquote className="m-0 mt-5">
        <p className="m-0 [font-family:var(--font-italic)] text-[17px] italic leading-relaxed text-foreground/90 sm:text-[18px]">
          {text}
        </p>
      </blockquote>
    </Card>
  )
}
