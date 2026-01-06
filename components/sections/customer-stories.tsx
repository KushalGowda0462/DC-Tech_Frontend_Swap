import CardsSection from '../CardsSection'
import { SuccessStories } from '@/data/data'

export default function CustomerStories() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="text-center space-y-4 mb-12">
            <div className="space-y-4 text-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                SUCCESS STORIES
              </h3>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Our Customers Stories
              </h2>
            </div>
            <p className="text-muted-foreground">See how we&apos;ve helped organizations achieve their goals</p>
          </div>
        <div className="container mx-auto px-4">
          <CardsSection cardsData={SuccessStories} linkprev='/succes-story'/>
        </div>
      </section>
    )
  }
