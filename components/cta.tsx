import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getContent } from "@/lib/content"

export function CTASection() {
  const content = getContent();
  const finalCta = content.finalCta || content.contact;

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{finalCta.headline || finalCta.title}</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          {finalCta.description || finalCta.subtitle}
        </p>
          <Link href={finalCta.buttonHref || "/contact"}>
          <Button size="lg" variant="secondary" className="btn-primary-glow">
            {finalCta.buttonLabel || content.hero.primaryCta.label}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
