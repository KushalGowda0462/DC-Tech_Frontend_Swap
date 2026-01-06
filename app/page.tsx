import { InfiniteCarousel } from "@/components/carousel"
import PartnersSection from "@/components/sections/partner-section"
import KoKo from "@/components/faq"
import Hero from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/service-section"
import CaseStudies from "@/components/sections/case-studies"
import CustomerStories from "@/components/sections/customer-stories"
import Testimonials from "@/components/sections/testimonials"
import { CTASection } from "@/components/cta"
import CustomerLogos from "@/components/sections/customers"
import SolutionSection from "@/components/sections/solution-section"
import AdvantageSection from "@/components/sections/advantage-section"
import RoadmapSection from "@/components/sections/roadmap-section"
import FundingSection from "@/components/sections/funding-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Hero />
      <InfiniteCarousel />
      <SolutionSection />
      <ServicesSection />
      <AdvantageSection />
      <PartnersSection />
      <CustomerLogos />
      <RoadmapSection />
      <FundingSection />
      <CustomerStories />
      <CaseStudies />
      <Testimonials />
      <KoKo />
      <CTASection />
    </div>
  )
}
