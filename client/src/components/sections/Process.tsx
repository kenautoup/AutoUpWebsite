import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function Process() {
  return (
    <Section id="results" className="bg-navy-deep">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">#3 — Process</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Agile, Collaborative, <em className="text-teal italic">Relentless</em>
          </h2>
          <p className="text-lg text-gray-400">
            We don't just ask our clients to join weekly scrum calls — we require it. Your growth is a team sport.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20 relative">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
        
        {[
          { num: "01", title: "Discovery", desc: "We map your ICP, analyze your market, and build a targeting strategy tailored to your industry and goals." },
          { num: "02", title: "Execution", desc: "We source data, write personalized sequences, configure infrastructure, and launch campaigns at scale." },
          { num: "03", title: "Iteration", desc: "We review performance weekly, A/B test messaging, and iterate on the fly until we find what converts best." },
        ].map((step, i) => (
          <Reveal key={i} delay={i * 0.1} className="relative bg-navy p-8 rounded-2xl border border-white/5 z-10 text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 mx-auto bg-navy-deep border border-teal text-teal rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-[0_0_20px_rgba(0,201,219,0.2)]">
              {step.num}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-400">{step.desc}</p>
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {[
          { val: "5M+", label: "Emails Sent / Month" },
          { val: "10K+", label: "Positive Replies / Month" },
          { val: "250+", label: "Fortune 500 Meetings Booked" },
        ].map((stat, i) => (
          <Reveal key={i} delay={0.2 + (i * 0.1)} className="bg-navy-card/50 p-6 md:p-8 rounded-2xl border border-white/5 text-center">
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">{stat.val}</div>
            <div className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
