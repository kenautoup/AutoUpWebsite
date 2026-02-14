import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function CTA() {
  return (
    <Section className="bg-navy relative">
      <div className="absolute inset-0 bg-gradient-to-t from-teal/10 to-transparent pointer-events-none" />
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <em className="text-teal italic">10x your pipeline?</em>
          </h2>
          <p className="text-[20px] md:text-[22px] text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free strategy call and see what's possible when experts build your outbound engine.
          </p>
          
          <a
            href="https://calendly.com/ken-autoup/autoup-introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-teal hover:bg-teal-dark text-navy font-bold text-xl px-10 py-5 rounded-xl transition-all shadow-[0_4px_24px_rgba(0,201,219,0.25)] hover:shadow-[0_8px_36px_rgba(0,201,219,0.4)] hover:-translate-y-1 mb-6"
          >
            Schedule a Call <ArrowRight className="w-6 h-6" />
          </a>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Currently accepting new clients
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
