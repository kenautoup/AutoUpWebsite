import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function EmailShowcase() {
  return (
    <Section className="bg-navy">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">#2 — Copy</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Every Email Written <em className="text-teal font-serif italic">Like It Came From You</em>
          </h2>
          <p className="text-lg text-gray-400">
            If it reads like a cold email, it gets ignored. We make it sound like a real person — because it is.
          </p>
        </Reveal>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
        {/* Bad Email */}
        <Reveal className="bg-white rounded-lg shadow-xl overflow-hidden text-slate-800 opacity-90 scale-95 origin-top-right">
          <div className="bg-slate-100 px-4 py-3 flex gap-2 border-b border-slate-200">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="p-6 md:p-8 font-sans">
            <div className="border-b border-slate-100 pb-4 mb-4 text-sm text-slate-500">
              <div>To: {'{FirstName}'}</div>
              <div className="font-medium text-slate-800 mt-1">Quick question about {'{Company}'}</div>
            </div>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>Hi {'{FirstName}'},</p>
              <p>I noticed {'{Company}'} is growing fast. We help companies like yours with outbound and I'd love to chat.</p>
              <p>Would you be open to a quick call this week?</p>
              <p>Best,<br />Generic SDR</p>
            </div>
            <div className="mt-6 bg-red-50 text-red-600 text-xs font-semibold px-3 py-2 rounded border border-red-100 flex items-center gap-2">
              <span className="text-lg">⚠</span> Flagged as promotional — 0.3% reply rate
            </div>
          </div>
        </Reveal>

        {/* Good Email */}
        <Reveal delay={0.2} className="bg-white rounded-lg shadow-2xl overflow-hidden text-slate-800 transform lg:-translate-x-8 lg:translate-y-8 z-10 border-4 border-teal/20">
          <div className="bg-slate-100 px-4 py-3 flex gap-2 border-b border-slate-200">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="p-6 md:p-8 font-sans">
            <div className="border-b border-slate-100 pb-4 mb-4 text-sm text-slate-500">
              <div>To: Sarah Jennings</div>
              <div className="font-medium text-slate-800 mt-1">Saw the Series B — congrats</div>
            </div>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>Hey Sarah,</p>
              <p>Congrats on the raise — saw the announcement on LinkedIn. With the growth push, I imagine outbound is top of mind.</p>
              <p>We just helped a similar company book 40+ meetings in 6 weeks. Happy to share the playbook if useful.</p>
              <p>Cheers,<br />Ken</p>
            </div>
            <div className="mt-6 bg-green-50 text-green-700 text-xs font-semibold px-3 py-2 rounded border border-green-100 flex items-center gap-2">
              <span className="text-lg">✓</span> Primary inbox — 22% reply rate
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
