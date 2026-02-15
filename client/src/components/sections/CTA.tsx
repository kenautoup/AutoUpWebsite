import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function CTA() {
  return (
    <Section className="bg-white py-20 md:py-28">
      <Reveal>
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div
            className="rounded-2xl px-8 py-16 md:px-16 md:py-20 text-center"
            style={{
              background: "linear-gradient(135deg, #e8f6f8 0%, #dbeef9 40%, #e0e8f9 100%)",
            }}
            data-testid="card-cta"
          >
            <h2 className="font-serif italic text-3xl md:text-5xl lg:text-[56px] leading-[1.15] font-bold text-[#1e293b] mb-6 max-w-3xl mx-auto">
              You Don't Need More Outbound.<br />
              You Need More Qualified Replies.
            </h2>

            <p className="text-[17px] md:text-[19px] text-[#64748b] max-w-2xl mx-auto mb-10 leading-relaxed">
              We've sent 20M+ cold emails this year. Ranked #2 out of 90,000 Smartlead users. Let's turn cold outreach into booked revenue.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://calendly.com/ken-autoup/autoup-introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#4580F7] hover:bg-[#5090FF] text-white font-bold text-lg px-10 py-[18px] rounded-xl transition-all duration-200 ease-out shadow-[0_2px_10px_rgba(69,128,247,0.2)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
                data-testid="link-cta-schedule"
              >
                Book Intro Call <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#results"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#results')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#1e293b] font-bold text-lg px-10 py-[18px] rounded-xl border border-[#d1d5db] transition-all duration-200 ease-out shadow-sm hover:shadow-md"
                data-testid="link-cta-results"
              >
                See Client Results
              </a>
            </div>

            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 cursor-pointer group"
              data-testid="link-cta-trust"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`/images/avatars/avatar${i}.jpg`}
                    alt=""
                    className="w-[42px] h-[42px] rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="text-[#64748b] text-sm font-medium group-hover:text-[#1e293b] transition-colors">
                Trusted by <span className="font-bold text-[#1e293b]">200+</span> companies
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
