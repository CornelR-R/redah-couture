import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src="/couture-hero.png"
        alt="Nigerian gentleman in a tailored senator suit"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-secondary/75" aria-hidden="true" />

      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-28 md:px-8 md:py-40">
        <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          Bespoke Nigerian Menswear
        </span>
        <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight text-secondary-foreground text-balance md:text-6xl">
          Tailored elegance for the modern African gentleman
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-secondary-foreground/80 text-pretty">
          Redah Couture crafts impeccable senator suits, agbada, and bespoke
          tailoring, blending heritage craftsmanship with contemporary refinement.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button render={<a href="#contact" />} nativeButton={false} size="lg" className="font-medium">
            Book a Fitting
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            render={<a href="#collections" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="border-secondary-foreground/30 bg-transparent font-medium text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
          >
            View Collections
          </Button>
        </div>
      </div>
    </section>
  )
}
