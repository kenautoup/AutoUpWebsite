import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

interface BlogCTAProps {
  headline?: {
    line1: string;
    line2Dark: string;
    line2Accent: string;
  };
  subtext?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  className?: string;
}

export function BlogCTA({
  headline = {
    line1: "You Don't Need More Outbound.",
    line2Dark: "You Need More ",
    line2Accent: "Positive Replies.",
  },
  subtext = "We've sent 35M+ cold emails last year. Instantly.ai Certified Experts. Clients on all continents. Let's talk about outbound.",
  primaryButtonText = "Book Intro Call",
  primaryButtonUrl = "https://calendly.com/ken-autoup/autoup-introduction",
  secondaryButtonText = "See Client Results",
  secondaryButtonUrl = "/#results",
  className = "",
}: BlogCTAProps) {
  const isExternal = primaryButtonUrl.startsWith("http");

  return (
    <Reveal>
      <div
        className={`max-w-[900px] mx-auto rounded-2xl px-6 py-12 md:px-10 md:py-[60px] text-center shadow-[0_2px_24px_rgba(0,0,0,0.06)] ${className}`}
        style={{
          background: "linear-gradient(135deg, #e8f4f8 0%, #e4eaf6 50%, #e0dff0 100%)",
        }}
        data-testid="card-blog-cta"
      >
        <h3 className="font-serif italic text-2xl md:text-4xl lg:text-[44px] leading-[1.15] font-bold text-[#0f172a] mb-5">
          {headline.line1}
          <br />
          {headline.line2Dark}
          <span style={{ color: "#00CED1" }}>{headline.line2Accent}</span>
        </h3>

        <p className="text-[15px] md:text-[17px] text-[#64748b] max-w-xl mx-auto mb-8 leading-relaxed">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href={primaryButtonUrl}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 bg-[#4A5FC1] text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-200 ease-out hover-elevate active-elevate-2"
            data-testid="link-blog-cta-primary"
          >
            {primaryButtonText} <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 bg-white text-[#1e293b] font-bold text-base px-8 py-3.5 rounded-xl border border-[#d1d5db] transition-all duration-200 ease-out hover-elevate active-elevate-2"
            data-testid="link-blog-cta-secondary"
          >
            {secondaryButtonText}
          </a>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`/images/avatars/avatar${i}.jpg`}
                alt=""
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
                data-testid={`avatar-blog-cta-${i}`}
              />
            ))}
          </div>
          <span className="text-[#64748b] text-sm font-medium" data-testid="text-blog-cta-trust">
            Trusted by <span className="font-bold text-[#1e293b]">200+</span> companies
          </span>
        </div>
      </div>
    </Reveal>
  );
}
