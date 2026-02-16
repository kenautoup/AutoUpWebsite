import { useEffect } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Press } from "@/components/sections/Press";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedResults } from "@/components/sections/FeaturedResults";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  usePageMeta({
    title: "AutoUp — Cold Email Outbound System | 10,000+ Positive Replies Every Month",
    description: "AutoUp builds done-for-you cold email outbound systems that generate 10,000+ positive replies every month. AI-sourced data, reply-optimized sequences, and proprietary sending infrastructure trusted by 200+ companies.",
    canonical: "https://autoup.io/",
    ogImage: "https://autoup.io/og-image.png",
  });

  useEffect(() => {
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AutoUp",
      "url": "https://autoup.io",
      "logo": "https://autoup.io/favicon.png",
      "description": "AutoUp builds done-for-you cold email outbound systems that generate 10,000+ positive replies every month.",
      "sameAs": [
        "https://www.linkedin.com/company/autoup"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "url": "https://calendly.com/ken-autoup/autoup-introduction"
      }
    };

    const siteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "AutoUp",
      "url": "https://autoup.io"
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AutoUp Cold Email Outbound System",
      "provider": {
        "@type": "Organization",
        "name": "AutoUp"
      },
      "description": "Done-for-you cold email outbound system with AI-sourced data, reply-optimized sequences, and proprietary sending infrastructure.",
      "serviceType": "B2B Lead Generation",
      "areaServed": "Worldwide"
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the minimum monthly commitment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We typically ask for a three-month commitment — that gives us enough volume and runway to prove the system works. After that, it's month-to-month. If you'd rather own the system yourself, we also offer standalone build-outs that can be done in as little as one to two months."
          }
        },
        {
          "@type": "Question",
          "name": "How does pricing work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing is tailored to your specific setup. The two biggest factors are volume — how many emails you want to send and how aggressively you want to scale — and the complexity of the motion."
          }
        },
        {
          "@type": "Question",
          "name": "How long does onboarding take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Onboarding typically takes 5–7 business days. We'll set up your infrastructure, build your prospect lists, and craft your messaging — so campaigns launch quickly and correctly."
          }
        },
        {
          "@type": "Question",
          "name": "What does the system handle for me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Everything from data sourcing and list building to copywriting, sending infrastructure, deliverability management, and campaign optimization. You focus on closing — we handle the rest."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure lead quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use AI-driven data extraction combined with manual verification to build hyper-targeted prospect lists. Every lead is triple-verified before outreach begins to keep bounce rates below 1%."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need my own tools or software?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We provide all the tools, infrastructure, and software needed to run your campaigns. You don't need to purchase or manage any additional platforms."
          }
        },
        {
          "@type": "Question",
          "name": "What if I'm already doing outbound in-house?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many of our clients run AutoUp alongside their internal teams. We complement your existing efforts by adding dedicated infrastructure, proven copy frameworks, and scalable volume you can't achieve alone."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly will I see results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most clients see their first positive replies within the first two weeks of campaign launch. Meaningful pipeline impact — booked meetings and qualified opportunities — typically ramps within 30 days."
          }
        }
      ]
    };

    const schemas = [orgSchema, siteSchema, serviceSchema, faqSchema];
    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    return () => {
      scriptElements.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-teal/30 selection:text-teal-50">
      <Navigation />
      <main>
        <Hero />
        <Press />
        <HowItWorks />
        <FeaturedResults />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
