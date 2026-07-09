import { Ruler, Sparkles, Truck } from "lucide-react"

const collections = [
  {
    image: "/collection-senator.png",
    title: "Senator Suits",
    description:
      "Signature senator wear tailored to the millimetre, with refined tonal embroidery and premium cashmere blends.",
  },
  {
    image: "/collection-agbada.png",
    title: "Agbada & Grand Boubou",
    description:
      "Flowing, hand-finished agbada in luxurious fabrics, designed for weddings, ceremonies, and grand occasions.",
  },
  {
    image: "/collection-bespoke.png",
    title: "Bespoke Tailoring",
    description:
      "A fully personal commission, from fabric selection to final fitting, cut exclusively to your measurements.",
  },
]

const services = [
  {
    icon: Ruler,
    title: "Personal Measurement",
    description:
      "In-house and at-home fittings ensure every garment sits perfectly on your frame.",
  },
  {
    icon: Sparkles,
    title: "Hand Embroidery",
    description:
      "Artisan detailing and monogramming crafted by master tailors with decades of experience.",
  },
  {
    icon: Truck,
    title: "Worldwide Delivery",
    description:
      "Discreet, insured delivery of your finished pieces to anywhere in the world.",
  },
]

export function ServicesSection() {
  return (
    <section id="collections" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <div className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Our Collections
        </span>
        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
          Crafted for the discerning gentleman
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Each Redah Couture piece is designed and hand-finished to celebrate
          heritage, occasion, and individual style.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <service.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
