import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Star } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

const testimonials = [
  {
    stars: 5,
    quote: "With 40+ opportunities per month, it would have taken an entire sales team to drive the results AutoUp has. I'm formerly Google, Bolt and Gett — AutoUp is the most valuable weapon in our outreach.",
    initials: "RP",
    photo: "/images/avatars/pleeth.png",
    name: "Rich Pleeth",
    role: "Co-founder & CEO, Finmile",
  },
  {
    stars: 5,
    quote: "Ken Volk is one of the smartest GTM experts I've worked with. AutoUp solved our deliverability issues and wrote creative copy that landed us dozens of meetings — including with the biggest players in our ICP.",
    initials: "PB",
    photo: "/images/avatars/avatar1.jpg",
    name: "Patrick Burkholder",
    role: "VP of Sales, MavenAI",
  },
  {
    stars: 5,
    quote: "We saw positive ROI in our first month. We've consistently received 30–40 positive email replies per week. Working with AutoUp has been one of the best marketing motions we've ever implemented.",
    initials: "RF",
    photo: "/images/avatars/avatar3.jpg",
    name: "Randall Floyd",
    role: "Managing Editor, Mancomm",
  },
  {
    stars: 5,
    quote: "AutoUp built custom scrapers to source thousands of valid emails for an ICP not in traditional directories. We average 20+ positive replies per week and have booked hundreds of qualified calls.",
    initials: "JC",
    photo: "/images/avatars/avatar4.jpg",
    name: "Jill Chen",
    role: "Business Development Manager, Cladify",
  },
  {
    stars: 5,
    quote: "AutoUp has been a game changer for our healthcare ecosystem. We gained more traction in a few months than ever before, and have had calls with multi-billion dollar companies.",
    initials: "DB",
    photo: "/images/avatars/dougbertram.png",
    name: "Doug Bertram",
    role: "CEO, Structural Elements",
  },
  {
    stars: 5,
    quote: "We've tried every outbound channel over 20 years selling into the Fortune 100. Hiring AutoUp has been the best business development play we've made in over a decade.",
    initials: "JS",
    photo: "/images/avatars/avatar5.jpg",
    name: "John Strassel",
    role: "CEO, Zeriva",
  },
  {
    stars: 5,
    quote: "We've won big deals we wouldn't have thought to look for if it weren't for AutoUp. The value has been massive. Hire them.",
    initials: "CM",
    photo: "/images/avatars/corymoskowitz.png",
    name: "Cory Moskowitz",
    role: "CEO & Founder, TransPromotion",
  },
  {
    stars: 5,
    quote: "AutoUp allowed us to rethink our business development structure entirely. They amplified our outreach in a cost-effective way we didn't know was possible.",
    initials: "GG",
    photo: "/images/avatars/grantgordon.png",
    name: "Grant Gordon",
    role: "CEO, Connected Healthcare",
  },
  {
    stars: 5,
    quote: "Just before we were acquired, we had to turn away clients. If AutoUp could bring that level of success in the incredibly competitive web-mobile dev industry, it can work for anyone.",
    initials: "KG",
    photo: "/images/avatars/kemaedeguzman.png",
    name: "Kemae de Guzman",
    role: "Project Manager, SourcePad",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const autoScrollRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);

  const doubled = [...testimonials, ...testimonials];

  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!track) return;
      track.scrollLeft += 0.5;
      const halfWidth = track.scrollWidth / 2;
      if (track.scrollLeft >= halfWidth) {
        track.scrollLeft -= halfWidth;
      }
      autoScrollRef.current = requestAnimationFrame(step);
    };
    autoScrollRef.current = requestAnimationFrame(step);
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      cancelAnimationFrame(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  }, []);

  const resumeAfterDelay = useCallback(() => {
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = window.setTimeout(() => {
      startAutoScroll();
    }, 3000);
  }, [startAutoScroll]);

  useEffect(() => {
    startAutoScroll();
    return () => {
      stopAutoScroll();
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [startAutoScroll, stopAutoScroll]);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    stopAutoScroll();
    const track = trackRef.current!;
    setStartX(e.clientX);
    setScrollLeft(track.scrollLeft);
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    trackRef.current!.scrollLeft = scrollLeft - dx;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    trackRef.current!.releasePointerCapture(e.pointerId);
    resumeAfterDelay();
  };

  return (
    <Section id="testimonials" className="bg-white overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">Client Results</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1e293b]">
            Results That <em>Compound.</em>
          </h2>
          <p className="text-[20px] text-[#64748b] leading-relaxed">
            Don't take our word for it — hear from the founders and leaders who've scaled with us.
          </p>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="flex gap-6 overflow-x-hidden select-none"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        data-testid="testimonials-carousel"
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[90vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#f7f8fa] border border-[#eef1f5] rounded-2xl p-10 flex flex-col justify-between"
            data-testid={`card-testimonial-${i}`}
          >
            <div>
              <div className="flex gap-1 text-teal mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-teal" />
                ))}
              </div>
              <blockquote className="text-[#64748b] leading-[1.8] mb-8 text-[18px]">
                "{t.quote}"
              </blockquote>
            </div>

            <div className="flex items-center gap-4 mt-auto">
              {t.photo ? (
                <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
              ) : (
                <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center font-bold text-teal text-lg flex-shrink-0">
                  {t.initials}
                </div>
              )}
              <div>
                <div className="font-bold text-[#1e293b] font-sans text-[16px]">{t.name}</div>
                <div className="text-[13px] text-[#8a9bb0]">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
