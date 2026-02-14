import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Linkedin, ArrowRight } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";

const linkedInPosts = [
  { id: 1, title: "How we booked 40+ meetings in 30 days" },
  { id: 2, title: "The cold email framework that converts" },
  { id: 3, title: "Why most outbound agencies fail" },
  { id: 4, title: "Our infrastructure advantage explained" },
  { id: 5, title: "Client spotlight: 250+ F500 meetings" },
];

export function FeaturedResults() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
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
  };

  return (
    <Section id="featured-results" className="bg-navy">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">Featured Results</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
            Proof That <em className="text-teal italic">It Works</em>
          </h2>
          <p className="text-lg text-gray-400">
            Real campaigns, real numbers, real outcomes.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <div className="bg-navy-card border border-white/5 rounded-2xl p-8 flex flex-col" data-testid="card-linkedin-embed">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white font-sans">Instantly Partner Spotlight</div>
                <div className="text-xs text-gray-400">Featured on LinkedIn</div>
              </div>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden min-h-[280px]">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7365720494542581761"
                allowFullScreen
                title="Instantly Partner Spotlight LinkedIn Post"
                className="w-full h-full min-h-[400px] border-0"
                data-testid="linkedin-embed"
              />
            </div>
          </div>

          <div className="grid grid-rows-2 gap-6">
            <div className="bg-navy-card border border-white/5 rounded-2xl p-8 flex flex-col justify-between" data-testid="card-case-study-1">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-teal mb-2 font-sans">40+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-4">Opportunities / Month</div>
                <div className="font-bold text-white text-lg font-sans mb-1">fin</div>
                <p className="text-gray-400 text-sm">From zero outbound to 40+ qualified opportunities per month in under 90 days.</p>
              </div>
              <a href="#testimonials" className="inline-flex items-center gap-2 text-teal text-sm font-bold mt-4 hover:gap-3 transition-all" data-testid="link-case-study-1">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-navy-card border border-white/5 rounded-2xl p-8 flex flex-col justify-between" data-testid="card-case-study-2">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-teal mb-2 font-sans">30–40</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-4">Positive Replies / Week</div>
                <div className="font-bold text-white text-lg font-sans mb-1">Mancomm</div>
                <p className="text-gray-400 text-sm">Positive ROI in month one with 30–40 positive email replies every week.</p>
              </div>
              <a href="#testimonials" className="inline-flex items-center gap-2 text-teal text-sm font-bold mt-4 hover:gap-3 transition-all" data-testid="link-case-study-2">
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-white font-sans">From Our LinkedIn</h3>
        </div>
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="flex gap-4 overflow-x-auto select-none pb-4 scrollbar-hide"
          style={{ cursor: isDragging ? "grabbing" : "grab", scrollbarWidth: "none" }}
          data-testid="linkedin-posts-carousel"
        >
          {linkedInPosts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[260px] bg-navy-card border border-white/5 rounded-xl p-5 flex flex-col"
              data-testid={`card-linkedin-post-${post.id}`}
            >
              <div className="bg-white/5 rounded-lg w-full h-[160px] flex items-center justify-center mb-4">
                <Linkedin className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-sm text-gray-300 font-sans font-medium leading-snug">{post.title}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
