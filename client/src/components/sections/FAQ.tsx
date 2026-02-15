import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

const faqs = [
  {
    question: "What's the minimum commitment?",
    answer: "We operate on a month-to-month basis with no long-term contracts required. Most clients stay because the results speak for themselves, but you're never locked in.",
  },
  {
    question: "How long does onboarding take?",
    answer: "Onboarding typically takes 5–7 business days. We'll set up your infrastructure, build your prospect lists, and craft your messaging — so campaigns launch quickly and correctly.",
  },
  {
    question: "What does the system handle for me?",
    answer: "Everything from data sourcing and list building to copywriting, sending infrastructure, deliverability management, and campaign optimization. You focus on closing — we handle the rest.",
  },
  {
    question: "How do you ensure lead quality?",
    answer: "We use AI-driven data extraction combined with manual verification to build hyper-targeted prospect lists. Every lead is triple-verified before outreach begins to keep bounce rates below 1%.",
  },
  {
    question: "Do I need my own tools or software?",
    answer: "No. We provide all the tools, infrastructure, and software needed to run your campaigns. You don't need to purchase or manage any additional platforms.",
  },
  {
    question: "What if I'm already doing outbound in-house?",
    answer: "Many of our clients run AutoUp alongside their internal teams. We complement your existing efforts by adding dedicated infrastructure, proven copy frameworks, and scalable volume you can't achieve alone.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Most clients see their first positive replies within the first two weeks of campaign launch. Meaningful pipeline impact — booked meetings and qualified opportunities — typically ramps within 30 days.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Reveal>
          <span className="text-[13px] font-bold uppercase tracking-[3px] text-teal mb-4 block">FAQ</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif italic text-3xl md:text-5xl font-bold text-[#1e293b] mb-4">
            Common Questions
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-[18px] text-[#64748b] leading-relaxed">
            Everything you need to know about working with AutoUp.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="max-w-3xl mx-auto divide-y divide-[#eef1f5]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} data-testid={`faq-item-${i}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="text-[17px] md:text-[18px] font-semibold text-[#1e293b] group-hover:text-teal transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8a9bb0] flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ease-out ${isOpen ? "max-h-40 pb-5" : "max-h-0"}`}
                >
                  <p className="text-[16px] text-[#64748b] leading-relaxed pr-10">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
