import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const details = [
  { icon: MapPin, label: "Atelier", value: "24 Awolowo Road, Ikoyi, Lagos, Nigeria" },
  { icon: Phone, label: "Phone", value: "+234 803 555 0142" },
  { icon: Mail, label: "Email", value: "atelier@redahcouture.com" },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-2 md:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Get In Touch
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-secondary-foreground text-balance md:text-4xl">
            Begin your bespoke commission
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-secondary-foreground/70 text-pretty">
            Tell us about the occasion and the look you envision. Our team will be in
            touch to arrange your private fitting.
          </p>

          <ul className="mt-10 space-y-6">
            {details.map((item) => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-secondary-foreground/60">
                    {item.label}
                  </p>
                  <p className="text-secondary-foreground">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="rounded-2xl bg-card p-8 shadow-lg">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                className="rounded-md border border-input bg-background px-4 py-2.5 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                className="rounded-md border border-input bg-background px-4 py-2.5 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                Your commission
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about the occasion, preferred style, fabric, and timeline..."
                className="rounded-md border border-input bg-background px-4 py-2.5 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <Button type="submit" size="lg" className="mt-2 font-medium">
              Book a Fitting
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
