import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Check, X } from "lucide-react";

export function Comparison() {
  return (
    <Section className="bg-navy-deep/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">#1 — Data</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your TAM, Sourced & Verified.<br />
            <em className="text-teal font-serif italic">Not Scraped & Prayed.</em>
          </h2>
          <p className="text-lg text-gray-400">
            Most agencies buy a list and hit send. We build your contact database from scratch — verified, enriched, and uniquely yours.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Reveal className="bg-white/5 border border-red-500/20 p-8 rounded-2xl relative overflow-hidden">
          <div className="text-red-400 font-bold text-sm uppercase tracking-wider mb-2">Typical Agencies</div>
          <h4 className="text-2xl font-bold mb-6">Buy a list. Hit send. Hope.</h4>
          <ul className="space-y-4">
            {[
              "Generic lists from ZoomInfo or Apollo",
              "No verification — emails bounce, domains flagged",
              "Stale data full of job changers and dead addresses",
              "Same prospects your competitors are emailing"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-400">
                <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="bg-navy-card border border-teal/30 p-8 rounded-2xl relative overflow-hidden shadow-[0_0_40px_rgba(0,201,219,0.05)]">
          <div className="text-teal font-bold text-sm uppercase tracking-wider mb-2">AutoUp</div>
          <h4 className="text-2xl font-bold mb-6">Custom-built, AI-verified databases</h4>
          <ul className="space-y-4">
            {[
              "AI + ML to collect contacts across your entire TAM",
              "Custom scrapers for hard-to-find ICPs",
              "Every address verified and enriched before sending",
              "Fresh, unique data your competitors can't access"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white">
                <Check className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
