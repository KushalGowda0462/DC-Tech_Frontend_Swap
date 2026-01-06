import { Card, CardContent } from "@/components/ui/card"
import { getContent } from "@/lib/content"
import { Cloud, Shield, Settings } from "lucide-react"

const iconMap = {
  "Sovereign GPU Infrastructure": Cloud,
  "Compliance & Audit Readiness": Shield,
  "Operational Ownership": Settings,
};

export default function ServicesSection() {
  const content = getContent();
  const offerings = content.offerings;

  return (
    <section id={offerings.id} className="relative overflow-hidden py-20 flex justify-center bg-background">
      <div className="container relative mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            {offerings.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {offerings.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.cards.map((card, index) => {
            const Icon = iconMap[card.title as keyof typeof iconMap] || Cloud;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 card-hover"
              >
                <CardContent className="relative space-y-4 p-6">
                  <div className="flex items-start">
                    <div className="rounded-lg p-2 text-primary bg-primary/10 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[10deg] w-max">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold ml-0 text-xl pt-4 text-foreground">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {offerings.note && (
          <p className="text-center text-muted-foreground mt-8 text-sm">
            {offerings.note}
          </p>
        )}
      </div>
    </section>
  )
}
