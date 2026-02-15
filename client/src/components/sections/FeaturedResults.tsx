import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, Star } from "lucide-react";
import instantlyLogo from "@assets/instantly_1771035044332.png";
import diverseLogoWhite from "@assets/diverse-full-logo-white_1771042214618.png";
import reggoraLogoWhite from "@assets/reggora-logo-white_1771041955595.png";
import timDeanPhoto from "@assets/tim_dean.jpg";
import brianZitinPhoto from "@assets/zitin_1771161758340.jpeg";

function CaseStudyCard({
  metric,
  metricLabel,
  timeframe,
  company,
  industry,
  quote,
  authorName,
  authorTitle,
  authorImage,
  testId,
  logo,
  logoHeight = "h-9",
}: {
  metric: string;
  metricLabel: string;
  timeframe: string;
  company: string;
  industry: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
  testId: string;
  logo?: string;
  logoHeight?: string;
}) {
  return (
    <div
      className="bg-navy-card border border-white/5 rounded-2xl p-10 md:p-12 h-full flex flex-col items-center text-center transition-shadow duration-300 hover:border-teal/20"
      style={{ transition: "box-shadow 0.3s, border-color 0.3s" }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 25px rgba(0, 201, 219, 0.08), 0 0 50px rgba(0, 201, 219, 0.04)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
      data-testid={testId}
    >
      <div className="w-full flex items-start justify-between mb-6">
        <div className="text-left">
          {logo ? (
            <div>
              <img src={logo} alt={company} className={`${logoHeight} w-auto max-w-[160px] object-contain mb-1`} />
              <div className="text-[14px] text-gray-500 mt-1">{industry}</div>
            </div>
          ) : (
            <div>
              <div className="font-bold text-white text-[20px] font-sans">{company}</div>
              <div className="text-[14px] text-gray-500 mt-1">{industry}</div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-0.5 flex-shrink-0 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-teal fill-teal" />
          ))}
        </div>
      </div>

      <div className="text-[72px] md:text-[80px] font-bold text-teal leading-none mb-2 font-sans">{metric}</div>
      <div className="text-[15px] text-gray-500 uppercase tracking-wider font-bold mb-3">{metricLabel}</div>
      <div className="text-[15px] text-gray-600 mb-6">{timeframe}</div>

      <div className="w-full h-px bg-white/5 mb-6" />

      <div className="w-full text-left border-l-[3px] border-teal/40 pl-5 mb-6">
        <p className="text-gray-400 text-[18px] italic leading-[1.8]">
          "{quote}"
        </p>
      </div>

      <div className="flex items-center gap-3 mt-auto">
        {authorImage ? (
          <img src={authorImage} alt={authorName} className="w-12 h-12 rounded-full object-cover object-top" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-gray-400 font-sans">
            {authorName.split(" ").map((n) => n[0]).join("")}
          </div>
        )}
        <div className="text-left">
          <div className="text-[18px] text-white font-sans font-medium">{authorName}</div>
          <div className="text-[14px] text-gray-500">{authorTitle}</div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedResults() {
  return (
    <Section id="results" className="bg-navy" data-theme="dark">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">Featured Results</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans text-white">
            Proof That <em className="text-teal italic">It Works</em>
          </h2>
          <p className="text-[20px] text-white/50 leading-relaxed">
            Real campaigns, real numbers, real outcomes.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6">
        <Reveal>
          <div
            className="bg-navy-card border border-teal/20 rounded-2xl py-20 md:py-24 px-8 text-center flex flex-col items-center relative overflow-hidden"
            style={{ boxShadow: "0 0 30px rgba(0, 201, 219, 0.08), 0 0 60px rgba(0, 201, 219, 0.04)" }}
            data-testid="card-instantly-spotlight"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 50% 60% at 50% 30%, rgba(0, 201, 219, 0.06) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <img src={instantlyLogo} alt="Instantly" className="h-16 md:h-20 w-auto mb-10" />
              <h3 className="text-[28px] md:text-[34px] lg:text-[36px] font-bold text-white font-sans mb-10 max-w-3xl leading-snug">
                The world's #1 cold email platform chose us to run their outbound.
              </h3>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7365720494542581761/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal font-bold text-base hover:gap-3 transition-all"
                data-testid="link-instantly-story"
              >
                View the full story on LinkedIn <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <CaseStudyCard
              metric="7,500+"
              metricLabel="Positive Replies / Month"
              timeframe="Achieved in 6 months"
              company="Diverse"
              industry="Growth Services · #128 Inc. 5000"
              quote="Working with AutoUp transformed our outbound — the volume and quality of replies is unlike anything we've seen."
              authorName="Tim Dean"
              authorTitle="Owner, Diverse"
              authorImage={timDeanPhoto}
              testId="card-case-diverse"
              logo={diverseLogoWhite}
              logoHeight="h-[42px]"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <CaseStudyCard
              metric="1,000+"
              metricLabel="Positive Replies / Month"
              timeframe="Achieved in 90 days"
              company="Reggora"
              industry="Series B - $60M Raised"
              quote="AutoUp built the entire outbound engine from scratch. The results speak for themselves."
              authorName="Brian Zitin"
              authorTitle="CEO, Reggora"
              authorImage={brianZitinPhoto}
              testId="card-case-reggora"
              logo={reggoraLogoWhite}
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
