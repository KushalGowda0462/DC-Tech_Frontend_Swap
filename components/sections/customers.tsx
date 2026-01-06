import { customers } from "@/data/data"
import Image from "next/image"

export default function CustomerLogos() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center">
          {customers.map((customer) => (
            <div key={customer.name} className="flex justify-center">
              <div className="w-32 h-20 relative hover:grayscale-0 transition-all duration-300">
                <Image
                  src={customer.logo || "/placeholder.svg"}
                  alt={`${customer.name} logo`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

