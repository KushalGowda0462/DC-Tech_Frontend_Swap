import React from 'react'
import Link from 'next/link'
import { getContent } from '@/lib/content'
import { Check } from 'lucide-react'

export default function Hero() {
  const content = getContent();
  const hero = content.hero;

  return (
    <section className="relative overflow-hidden flex justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
      <div className="relative min-h-[70vh] py-24 md:py-0 w-full">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/hero.avif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-slate-900/95" />
        </div>

        <div className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {hero.headline}
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {hero.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-left">
                  <Check className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
