import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Microscope, PenTool, Zap } from "lucide-react";

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">Why AutoUp</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1e293b]">
            The Growth Engine<br />Behind Your <em>B2B Pipeline</em>
          </h2>
          <p className="text-[20px] text-[#64748b] leading-relaxed">
            We don't just run campaigns — we build the entire outbound machine from data to delivery.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Microscope className="w-8 h-8 text-teal" />,
            title: "Your Data, Not a List",
            desc: "We don't buy from ZoomInfo or Apollo. We build custom databases with AI scrapers that find verified contacts your competitors can't access."
          },
          {
            icon: <PenTool className="w-8 h-8 text-teal" />,
            title: "Copy That Sounds Human",
            desc: "No templates, no merge tags. Every sequence is written by real strategists who've sent millions of emails and know what converts."
          },
          {
            icon: <Zap className="w-8 h-8 text-teal" />,
            title: "Proprietary Infrastructure",
            desc: "Warmed inboxes, scaled laterally, real-time monitoring — built on a sending method no one else has. Your emails hit primary while your competitors land in spam."
          }
        ].map((item, i) => (
          <Reveal key={i} delay={i * 0.1} className="bg-[#f7f8fa] border border-[#eef1f5] p-10 rounded-2xl hover:border-[#d0d5dd] hover:shadow-md hover:-translate-y-0.5 transition-all group">
            <div className="bg-teal/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-[22px] font-bold mb-4 font-sans text-[#1e293b]">{item.title}</h3>
            <p className="text-[#64748b] leading-[1.8] text-[18px]">{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
