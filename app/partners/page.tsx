import { InfiniteCarousel } from "@/components/carousel"
import PartnersSection from "@/components/sections/partner-section"
import SpecializationsSection from "@/components/sections/specializations-section"

function page() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <PartnersSection/>
      <SpecializationsSection/>
      <InfiniteCarousel/>
    </div>
  )
}

export default page