import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import instantlyLogo from "@assets/instantlyexpert_1770991537677.png";

export function Hero() {
  return (
    <section className="pt-36 pb-16 md:pt-40 md:pb-24 overflow-hidden relative bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Reveal>
          <a href="https://instantly.ai/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mb-5">
            <img src={instantlyLogo} alt="Instantly Certified Expert" className="h-16 w-auto" data-testid="img-instantly-badge" />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.1] font-sans text-[#1e293b]">
            We Build the Pipeline.<br />
            <em className="text-teal">You Close the Deals.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-[20px] md:text-[22px] text-[#64748b] max-w-[540px] mx-auto mb-8 leading-relaxed">
            AI-sourced data, reply-optimized sequences, and proprietary sending infrastructure — engineered into one outbound system that fills your pipeline on autopilot.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://calendly.com/ken-autoup/autoup-introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#4580F7] hover:bg-[#5090FF] text-white font-bold text-lg px-10 py-[18px] rounded-xl transition-all duration-200 ease-out shadow-[0_2px_10px_rgba(69,128,247,0.2)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
              data-testid="link-hero-cta"
            >
              Book Intro Call <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-4 inline-flex items-center gap-3 cursor-pointer group"
              data-testid="link-trust-indicator"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`/images/avatars/avatar${i}.jpg`}
                    alt=""
                    className="w-[42px] h-[42px] rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="text-[#64748b] text-sm font-medium group-hover:text-[#1e293b] transition-colors">
                Trusted by <span className="font-bold text-[#1e293b]">200+</span> companies
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <dl className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-[#eef1f5] pt-10">
            {[
              { label: "Emails Sent / Month", value: "5M+" },
              { label: "Positive Replies / Month", value: "10K+" },
              { label: "Fortune 500 Meetings Booked", value: "250+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <dt className="order-2 text-[14px] md:text-[15px] font-medium text-[#8a9bb0] uppercase tracking-wider">{stat.label}</dt>
                <dd className="order-1 text-[40px] md:text-[48px] font-bold text-[#1e293b] tracking-tight leading-none">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
