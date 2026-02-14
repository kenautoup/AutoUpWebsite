import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Press } from "@/components/sections/Press";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Comparison } from "@/components/sections/Comparison";
import { EmailShowcase } from "@/components/sections/EmailShowcase";
import { Process } from "@/components/sections/Process";
import { FeaturedResults } from "@/components/sections/FeaturedResults";
import { Testimonials } from "@/components/sections/Testimonials";
import { Certifications } from "@/components/sections/Certifications";
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
        <Comparison />
        <EmailShowcase />
        <Process />
        <FeaturedResults />
        <Testimonials />
        <Certifications />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
