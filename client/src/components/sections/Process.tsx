import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function Process() {
  return (
    <Section className="bg-[#f7f8fa]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">#3 — Process</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1e293b]">
            Agile, Collaborative, <em>Relentless</em>
          </h2>
          <p className="text-[20px] text-[#64748b] leading-relaxed">
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
          <Reveal key={i} delay={i * 0.1} className="relative bg-white p-10 rounded-2xl border border-[#eef1f5] z-10 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 mx-auto bg-[#f7f8fa] border border-teal text-teal rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-[0_0_20px_rgba(0,201,219,0.15)]">
              {step.num}
            </div>
            <h3 className="text-[24px] font-bold mb-4 text-[#1e293b]">{step.title}</h3>
            <p className="text-[#64748b] text-[18px] leading-[1.8]">{step.desc}</p>
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {[
          { val: "5M+", label: "Emails Sent / Month" },
          { val: "10K+", label: "Positive Replies / Month" },
          { val: "250+", label: "Fortune 500 Meetings Booked" },
        ].map((stat, i) => (
          <Reveal key={i} delay={0.2 + (i * 0.1)} className="bg-white p-8 md:p-10 rounded-2xl border border-[#eef1f5] text-center">
            <div className="text-[48px] md:text-[58px] font-bold text-[#1e293b] mb-2 leading-none">{stat.val}</div>
            <div className="text-[13px] md:text-[15px] font-medium text-[#8a9bb0] uppercase tracking-wider">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
