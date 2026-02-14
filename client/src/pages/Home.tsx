import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Press } from "@/components/sections/Press";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedResults } from "@/components/sections/FeaturedResults";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-teal/30 selection:text-teal-50">
      <Navigation />
      <main>
        <Hero />
        <Press />
        <HowItWorks />
        <FeaturedResults />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
