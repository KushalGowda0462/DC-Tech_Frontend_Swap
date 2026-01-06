import { Card } from "@/components/ui/card";
import {
  Database,
  Brain,
  LineChart,
  Settings,
} from "lucide-react";
import { TrainingCategoryCard } from "@/components/training-catogoryCard";
import ServicesGrid from "./servicesGrid";
import { CTASection } from "@/components/cta";
import { trainingCategories } from "@/data/data";
import { getContent } from "@/lib/content";


export default function Services() {
  const content = getContent();

  return (
    <main className="min-h-screen bg-background">
      <section className="relative bg-primary text-primary-foreground py-24 text-center">
        <div className="absolute bottom-0 left-0 right-0 ">
          <svg
            className="w-full "
            style={{ transform: 'translateY(0.5px)' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              className="fill-background"
              d="M1440,0Q1080,99,720,99T0,0V100H1440Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl opacity-90">
        {content.brand.tagline}
            </p>
        </div>
      </section>



      <section className="bg-background">
      <ServicesGrid/>
      </section>

      {/* Data and AI Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Solution Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {content.offerings.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.offerings.cards.map((offering, index) => (
              <Card key={index} className="p-6 text-center bg-card border-border/40 card-hover">
                <div className="w-12 h-12 mx-auto text-primary mb-4 flex items-center justify-center">
                  <Settings className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{offering.title}</h3>
                <p className="text-muted-foreground">
                  {offering.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Courses Section */}
      <section className="py-20 bg-background" id="traing-programs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Training Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training solutions to empower your team with the latest technology skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingCategories.map((category, index) => (
              <TrainingCategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

     
      <CTASection/>
    </main>
  );
}
