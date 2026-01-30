import { InfiniteCarousel } from "@/components/carousel"
import PartnersSection from "@/components/sections/partner-section"
import KoKo from "@/components/faq"
import Hero from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/service-section"
import CustomerStories from "@/components/sections/customer-stories"
import Testimonials from "@/components/sections/testimonials"
import { CTASection } from "@/components/cta"
import CustomerLogos from "@/components/sections/customers"
import BlogsSection from "@/components/sections/blogs-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* 1. Hero section */}
      <Hero />
      
      {/* 2. Partner/technology logos strip */}
      <InfiniteCarousel />
      
      {/* 3. Our Services (4 cards) */}
      <ServicesSection />
      
      {/* 4. Partners section */}
      <PartnersSection />
      
      {/* 5. Trusted by Industry Leaders */}
      <CustomerLogos />
      
      {/* 6. Success Stories (3 story cards) */}
      <CustomerStories />
      
      {/* 7. Our Blogs */}
      <BlogsSection />
      
      {/* 8. Testimonials */}
      <Testimonials />
      
      {/* 9. FAQ */}
      <KoKo />
      
      {/* 10. Final CTA */}
      <CTASection />
    </div>
  )
}
