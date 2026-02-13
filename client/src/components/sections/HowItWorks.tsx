import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Microscope, PenTool, Zap } from "lucide-react";

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-navy">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">Why AutoUp</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Growth Engine <em className="text-teal font-serif italic">Behind Your Pipeline</em>
          </h2>
          <p className="text-lg text-gray-400">
            We don't just run campaigns — we build the entire outbound machine from data to delivery.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Microscope className="w-8 h-8 text-teal" />,
            title: "AI Data Extraction",
            desc: "We use AI and machine learning to identify and collect verified contacts across your entire TAM — including ICPs not found in traditional directories."
          },
          {
            icon: <PenTool className="w-8 h-8 text-teal" />,
            title: "Expert Copywriting",
            desc: "Our copywriters craft snappy, conversational sequences that sound human — not templated. Every email is engineered to book meetings."
          },
          {
            icon: <Zap className="w-8 h-8 text-teal" />,
            title: "Automated Sending",
            desc: "Email and LinkedIn campaigns deployed and managed on your behalf — fully automated, continuously optimized, entirely on autopilot."
          }
        ].map((item, i) => (
          <Reveal key={i} delay={i * 0.1} className="bg-navy-card border border-white/5 p-8 rounded-2xl hover:border-teal/30 hover:bg-navy-card/80 transition-all group">
            <div className="bg-teal/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
