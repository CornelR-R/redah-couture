import { Scissors } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Scissors className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
          </span>
          <span className="font-serif font-bold text-secondary-foreground">Redah Couture</span>
        </div>
        <p className="text-sm text-secondary-foreground/60">
          &copy; {new Date().getFullYear()} Redah Couture. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
