import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { X, Check, ChevronsRight } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const oldWay = [
    "Stale lists from ZoomInfo and Apollo",
    "Contrived, AI-generated copy",
    "Shared sending infrastructure",
    "Flagged as promotional, lands in spam",
    "Same prospects your competitors are emailing",
  ];

  const autoUpWay = [
    "AI-built databases, exclusive to you",
    "Battle-tested sequences, millions sent",
    "In-house, private infrastructure",
    "Hits primary inbox consistently",
    "Fresh contacts your competitors can't access",
  ];

  return (
    <Section id="how-it-works" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">The System</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1e293b]">
            10,000+ Positive Replies.<br /><em>Every Month.</em>
          </h2>
          <p className="text-[20px] text-[#64748b] leading-relaxed">
            Not opens. Not clicks. Positive replies from verified decision-makers — delivered to the primary inbox at scale.
          </p>
        </Reveal>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-[#f7f8fa] rounded-xl p-8 md:p-10 relative overflow-hidden"
            data-testid="card-old-way"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.015) 10px, rgba(0,0,0,0.015) 11px)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-[2px] bg-[#8a9bb0]" />
                <div className="text-[13px] font-bold uppercase tracking-[2px] text-[#8a9bb0]">The Old Way</div>
              </div>
              <div className="space-y-5">
                {oldWay.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <span className="text-[17px] text-[#64748b] leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center justify-center w-16 relative">
            <div
              className="absolute inset-x-1/2 top-4 bottom-4 w-[1px]"
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(0,201,219,0.25) 20%, rgba(0,201,219,0.25) 80%, transparent)",
              }}
            />
            <div
              className="relative w-11 h-11 rounded-full bg-[#00C9DB] flex items-center justify-center z-10"
              style={{
                boxShadow: "0 0 20px rgba(0,201,219,0.4)",
              }}
            >
              <ChevronsRight className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0c1b2e] rounded-xl border border-[#00C9DB]/20 p-8 md:p-10 relative overflow-hidden"
            style={{
              boxShadow: "0 25px 60px rgba(15, 30, 46, 0.3)",
            }}
            data-testid="card-autoup-system"
          >
            <div
              className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, rgba(0, 194, 183, 0.08) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-[2px] bg-[#00C9DB]" />
                <div className="text-[13px] font-bold uppercase tracking-[2px] text-[#00C9DB]">The AutoUp Way</div>
              </div>
              <div className="space-y-5">
                {autoUpWay.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00C9DB]/15 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#00C9DB]" />
                    </div>
                    <span className="text-[17px] text-white/90 leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
