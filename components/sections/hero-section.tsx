import React from 'react'
import Link from 'next/link'
import { getContent } from '@/lib/content'
import { Check, Server, Cloud, Zap } from 'lucide-react'

export default function Hero() {
  const content = getContent();
  const hero = content.hero;

  return (
    <section className="relative overflow-hidden flex justify-center bg-gradient-to-br from-blue-50 via-white to-sky-50">
      <div className="relative min-h-[70vh] py-24 md:py-0 w-full">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/hero.avif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/90 via-white/90 to-sky-50/90" />
        </div>

        <div className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {hero.topLabel && (
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                {hero.topLabel}
              </p>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              {hero.headline}
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              {hero.subheadline}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link href={hero.primaryCta.href} className="btn-primary-glow h-12 px-6 py-2.5 rounded-3xl text-base font-bold flex items-center">
                {hero.primaryCta.label}
              </Link>
              <Link href={hero.secondaryCta.href} className="h-12 px-6 py-2.5 bg-transparent border-2 border-primary text-primary rounded-3xl text-base font-bold flex items-center hover:bg-primary/10 transition-colors">
                {hero.secondaryCta.label}
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {hero.microHighlights && hero.microHighlights.map((micro, idx) => {
                const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
                  "Server": Server,
                  "Cloud": Cloud,
                  "Zap": Zap,
                };
                const Icon = iconMap[micro.icon] || Server;
                return (
                  <div key={idx} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-primary/20 p-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{micro.title}</h3>
                    <p className="text-sm text-muted-foreground">{micro.subtitle}</p>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {hero.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-left">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
