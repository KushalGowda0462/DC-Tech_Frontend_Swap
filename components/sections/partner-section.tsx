import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { homepartners } from '@/data/data'

export default function PartnersSection() {

  return (
    <section className="relative overflow-hidden bg-muted/20 py-32 flex justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative space-y-24 mx-auto px-4">
        {/* Partners Section */}
        <div className="space-y-8">
          <div className="space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              PARTNERS
            </p>
            <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Enseigner: Sovereign AI Infrastructure
            </h2>
            <p className="mx-auto max-w-2xl text-center text-lg text-muted-foreground">
              Compliance-first GPU infrastructure and AI execution for regulated GCC enterprises.
            </p>
          </div>

          {/* Partner Logos */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {homepartners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-8"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.alt}
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain md:h-16"
                />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              className="group relative overflow-hidden rounded-full px-6 py-2 text-sm font-medium transition-all hover:text-white"
            >
              <Link href="/partners">
                Go to Partners
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10">→</span>
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}

