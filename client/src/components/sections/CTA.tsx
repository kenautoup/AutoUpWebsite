import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function CTA() {
  return (
    <Section className="bg-navy" data-theme="dark">
      <div className="text-center max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to <em className="text-teal italic">10x your pipeline?</em>
          </h2>
          <p className="text-[20px] text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free strategy call and see what's possible when experts build your outbound engine.
          </p>
          
          <a
            href="https://calendly.com/ken-autoup/autoup-introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#4580F7] hover:bg-[#5090FF] text-white font-bold text-xl px-10 py-5 rounded-xl transition-all duration-200 ease-out shadow-[0_2px_12px_rgba(69,128,247,0.2)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)] mb-6"
            data-testid="link-cta-schedule"
          >
            Book Intro Call <ArrowUpRight className="w-6 h-6" />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
