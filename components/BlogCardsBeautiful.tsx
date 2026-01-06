import Link from "next/link"
import { Card } from "./ui/card"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { CardContent } from "./ui/card"
interface Post {
  title: string
  description: string
  author: string
  date: string
  image: string
  tags: string[]
}

export default function BlogCardsBeautiful({ card, href }: { card: Post, href: string }) {
  return (
    <Link key={card.title} href={`${href}`} className="group">
      <Card className="border border-border/40 bg-card card-hover h-full">
        <CardContent className="p-0 space-y-4">
          <div className="relative h-[200px]">
            <Image
              src={card.image || "/placeholder.svg"}
              alt={card.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>{card.author}</span>
            <span>•</span>
            <span className="text-muted-foreground">{card.date}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors text-foreground">{card.title}</h3>
            <ArrowUpRight className="h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <p className="text-muted-foreground">{card.description}</p>
          <div className="flex gap-2">
            {card.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

