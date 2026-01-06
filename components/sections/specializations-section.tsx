import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { specializations } from '@/data/data'

export default function SpecializationsSection() {
  return (
    <section className="w-full bg-muted/20 py-24 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="space-y-16">
          {/* Specializations Header */}
          <h2 className="text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Specializations & Expertise
          </h2>

          {/* Specializations Grid */}
          <div className="flex flex-col gap-6 md:flex-row justify-center">
            {specializations.map((spec) => (
              <Card key={spec.title} className={`overflow-hidden bg-card/50 border-border/40 max-w-[350px] bg-gradient-to-br ${spec.gradient} card-hover`}>
                <CardContent className="flex flex-col items-center space-y-6 p-8">
                  <div className="relative h-64 w-64">
                    <Image
                      src={spec.logo || "/placeholder.svg"}
                      alt={spec.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-center text-muted-foreground">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

