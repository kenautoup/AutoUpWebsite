import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import instantlyLogo from "@assets/instantlyexpert_1770991537677.png";

export function Hero() {
  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden relative bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Reveal>
          <a href="https://instantly.ai/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mb-8">
            <img src={instantlyLogo} alt="Instantly Certified Expert" className="h-16 w-auto" data-testid="img-instantly-badge" />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] font-sans text-[#1e293b]">
            We Build the Pipeline.<br />
            <em className="text-teal">You Close the Deals.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-[20px] md:text-[22px] text-[#64748b] max-w-2xl mx-auto mb-10 leading-relaxed">
            AI-sourced data, reply-optimized sequences, and proprietary sending infrastructure — engineered into one outbound system that fills your pipeline on autopilot.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://calendly.com/ken-autoup/autoup-introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-teal hover:bg-teal-dark text-navy font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(0,201,219,0.3)] hover:shadow-[0_8px_30px_rgba(0,201,219,0.4)] hover:-translate-y-1"
              data-testid="link-hero-cta"
            >
              Book a Call <ArrowUpRight className="w-5 h-5" />
            </a>
            <div className="text-sm text-[#8a9bb0] font-medium">
              Free 30-minute consultation · No commitment
            </div>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 inline-flex items-center gap-3 cursor-pointer group"
              data-testid="link-trust-indicator"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`/images/avatars/avatar${i}.jpg`}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="text-[#64748b] text-sm font-medium group-hover:text-[#1e293b] transition-colors">
                <span className="font-bold text-[#1e293b]">200+</span> companies on the system
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-[#eef1f5] pt-12">
            {[
              { label: "Emails Sent / Month", value: "5M+" },
              { label: "Positive Replies / Month", value: "10K+" },
              { label: "Fortune 500 Meetings Booked", value: "250+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="text-[40px] md:text-[48px] font-bold text-[#1e293b] tracking-tight leading-none">{stat.value}</div>
                <div className="text-[14px] md:text-[15px] font-medium text-[#8a9bb0] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
