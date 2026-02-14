import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "lucide-react";
import instantlyLogo from "@assets/instantly_1771035044332.png";

export function FeaturedResults() {
  return (
    <Section id="featured-results" className="bg-navy">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">Featured Results</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
            Proof That <em className="text-teal italic">It Works</em>
          </h2>
          <p className="text-lg text-gray-400">
            Real campaigns, real numbers, real outcomes.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6">
        <Reveal>
          <div className="bg-navy-card border border-white/5 rounded-2xl py-16 md:py-20 px-8 text-center flex flex-col items-center" data-testid="card-instantly-spotlight">
            <img src={instantlyLogo} alt="Instantly Certified Expert" className="h-20 w-auto mb-8" />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-sans mb-8 max-w-3xl leading-tight">
              The world's #1 cold email platform chose us to run their outbound.
            </h3>
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7365720494542581761/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal font-bold text-sm hover:gap-3 transition-all"
              data-testid="link-instantly-story"
            >
              View the full story on LinkedIn <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <div className="bg-navy-card border border-white/5 rounded-2xl p-8 md:p-10 h-full" data-testid="card-case-diverse">
              <div className="text-5xl md:text-6xl font-bold text-teal mb-2 font-sans">7,500+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-6">Positive Replies / Month</div>
              <div className="font-bold text-white text-lg font-sans mb-2">Diverse · #128 Inc. 5000</div>
              <p className="text-gray-400 text-sm italic leading-relaxed">
                That's more replies than most agencies generate in a year.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-navy-card border border-white/5 rounded-2xl p-8 md:p-10 h-full" data-testid="card-case-reggora">
              <div className="text-5xl md:text-6xl font-bold text-teal mb-2 font-sans">1,000+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-6">Positive Replies / Month</div>
              <div className="font-bold text-white text-lg font-sans mb-2">Reggora · $60M raised</div>
              <p className="text-gray-400 text-sm italic leading-relaxed">
                From zero outbound to 1,000+ replies in 90 days.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
