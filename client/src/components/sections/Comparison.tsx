import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Check, X } from "lucide-react";

export function Comparison() {
  return (
    <Section className="bg-[#f7f8fa]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">#1 — Data</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1e293b]">
            Your TAM, Sourced & Verified.<br />
            <em>Not Scraped & Prayed.</em>
          </h2>
          <p className="text-[20px] text-[#64748b] leading-relaxed">
            Most agencies buy a list and hit send. We build your contact database from scratch — verified, enriched, and uniquely yours.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Reveal className="bg-white border border-[#eef1f5] p-10 rounded-2xl relative overflow-hidden">
          <div className="text-red-400 font-bold text-sm uppercase tracking-wider mb-2">Typical Agencies</div>
          <h4 className="text-[22px] md:text-[24px] font-bold mb-6 text-[#1e293b]">Buy a list. Hit send. Hope.</h4>
          <ul className="space-y-5">
            {[
              "Generic lists from ZoomInfo or Apollo",
              "No verification — emails bounce, domains flagged",
              "Stale data full of job changers and dead addresses",
              "Same prospects your competitors are emailing"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#64748b] text-[18px] leading-[1.9]">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="bg-[#0c1b2e] border border-teal/30 p-10 rounded-2xl relative overflow-hidden shadow-[0_0_40px_rgba(0,201,219,0.05)]">
          <div className="text-teal font-bold text-sm uppercase tracking-wider mb-2">AutoUp</div>
          <h4 className="text-[22px] md:text-[24px] font-bold mb-6 text-white">Custom-built, AI-verified databases</h4>
          <ul className="space-y-5">
            {[
              "AI + ML to collect contacts across your entire TAM",
              "Custom scrapers for hard-to-find ICPs",
              "Every address verified and enriched before sending",
              "Fresh, unique data your competitors can't access"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white text-[18px] leading-[1.9]">
                <Check className="w-5 h-5 text-teal shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
