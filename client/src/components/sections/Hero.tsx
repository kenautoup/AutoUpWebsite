import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import instantlyLogo from "@assets/instantlyexpert_1770991537677.png";

export function Hero() {
  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-teal/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <img src={instantlyLogo} alt="Instantly Certified Expert" className="h-8 w-auto" data-testid="img-instantly-badge" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] font-sans">
            Your B2B Outreach,<br />
            <em className="text-teal italic">10x'd and Done For You</em>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI-powered data extraction, expert copywriting, and automated multichannel campaigns — personalized at scale, managed end-to-end.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://calendly.com/ken-autoup/autoup-introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-teal hover:bg-teal-dark text-navy font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(0,201,219,0.3)] hover:shadow-[0_8px_30px_rgba(0,201,219,0.4)] hover:-translate-y-1"
            >
              Book a Strategy Call <ArrowRight className="w-5 h-5" />
            </a>
            <div className="text-sm text-gray-500 font-medium">
              Free 30-minute consultation · No commitment
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/5 pt-12">
            {[
              { label: "Opps / Month", value: "40+" },
              { label: "Meetings Booked", value: "F500" },
              { label: "Replies / Week", value: "30–40" },
              { label: "Client Exit", value: "1" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
