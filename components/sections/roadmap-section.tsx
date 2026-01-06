import { Card, CardContent } from "@/components/ui/card"
import { getContent } from "@/lib/content"
import { MapPin } from "lucide-react"

export default function RoadmapSection() {
  const content = getContent();
  const roadmap = content.roadmap;

  return (
    <section id={roadmap.id} className="relative overflow-hidden py-20 flex justify-center bg-background">
      <div className="container relative mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            {roadmap.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-lg p-2 text-primary bg-primary/20 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-foreground text-lg leading-relaxed">
                    {roadmap.endState}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
