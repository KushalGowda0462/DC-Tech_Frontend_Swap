
import { Card } from "@/components/ui/card";
import {  CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { securityFeatures,  stats, values } from "@/data/data"
import { getContent } from "@/lib/content";

export default function AboutUs() {
  const content = getContent();
  
  return (
    <main className="min-h-screen bg-background">
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="/empty-office.avif"
          alt="About Us"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Enseigner</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Sovereign AI for regulated GCC enterprises
          </p>
        </div>
      </section>


      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission
            </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/about/1.jpeg"
              alt="Team meeting"
              width={600}
              height={400}
              className="rounded-lg w-full"
            />
            <div>
              <p className="text-lg text-muted-foreground mb-4">
                {content.about.description}
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our mission is to power sovereign AI transformation for regulated GCC enterprises, delivering strategic guidance and unmatched expertise in compliance-first AI infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="font-semibold text-foreground">Founded</p>
                  <p className="text-muted-foreground">{content.about.companyOverview.founded}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Headquarters</p>
                  <p className="text-muted-foreground">{content.about.companyOverview.headquarters}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Region</p>
                  <p className="text-muted-foreground">{content.about.companyOverview.region}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Team</p>
                  <p className="text-muted-foreground">{content.about.companyOverview.professionals}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="text-4xl font-bold mb-2 text-primary">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/stories/1.avif"
              alt="Working professional"
              width={500}
              height={500}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-8">Our values</h2>
              <p className="text-lg mb-6">
                To be the leading cloud provider known for our unwavering commitment to quality, integrity,
                and client satisfaction, while continuously innovating to stay ahead of emerging threats.
              </p>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our approach</h2>
              <p className="text-lg mb-6">
                We take a proactive and holistic approach to security, assessing potential risks and vulnerabilities
                before they become threats. By combining state-of-the-art technology with industry best practices, we
                provide comprehensive security solutions that address every aspect of protection.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  We align our solutions with your unique business goals and challenges.

                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  We design custom strategies that grow with your business.

                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  Our iterative approach ensures quick delivery and responsiveness to change.

                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-primary" />
                  We optimize solutions for ongoing success and future readiness.
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/about/3.avif"
                alt="Security approach illustration"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stay Stress Free Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Stay stress free always</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/about/4.avif"
              alt="Happy client"
              width={500}
              height={500}
              className="rounded-lg"
            />
            <div className="space-y-6">
              <p className="text-lg mb-6">
              Enseigner provides sovereign AI infrastructure with predictable GPU costs, auditable pipelines, and clear operational ownership for regulated production AI.

              </p>
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="relative w-full overflow-hidden">
      {/* Bottom Gray Shape - Background */}
      <div className="absolute inset-0 bg-muted/20" />

      {/* Main Container */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="relative bg-primary rounded-xl p-8 md:p-16 overflow-hidden">
          {/* Right Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-2xl mx-auto text-center">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white">Sovereign AI for regulated GCC enterprises.</h2>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-foreground text-primary 
                       rounded-full font-semibold hover:bg-opacity-90 transition-all
                       border border-[rgba(0,15,41,0.2)] text-primary"
            >
              Start the Transformation
            </Link>
          </div>

        </div>
      </div>
    </section>
    </main>
  );
}