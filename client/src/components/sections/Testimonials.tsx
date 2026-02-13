import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      featured: true,
      stars: 5,
      quote: "With 40+ opportunities per month, it would have taken an entire sales team to drive the results AutoUp has. I'm formerly Google, Bolt and Gett — AutoUp is the most valuable weapon in our outreach.",
      initials: "RP",
      name: "Rich Pleeth",
      role: "Co-founder & CEO, fin",
      stat: { val: "40+", label: "Opps / Month" }
    },
    {
      stars: 5,
      quote: "Ken Volk is one of the smartest GTM experts I've worked with. AutoUp solved our deliverability issues and wrote creative copy that landed us dozens of meetings — including with the biggest players in our ICP.",
      initials: "PB",
      name: "Patrick Burkholder",
      role: "VP of Sales, Rentable"
    },
    {
      stars: 5,
      quote: "We saw positive ROI in our first month. We've consistently received 30–40 positive email replies per week. Working with AutoUp has been one of the best marketing motions we've ever implemented.",
      initials: "RF",
      name: "Randall Floyd",
      role: "Managing Editor, Mancomm"
    },
    {
      stars: 5,
      quote: "AutoUp built custom scrapers to source thousands of valid emails for an ICP not in traditional directories. We average 20+ positive replies per week and have booked dozens of qualified calls.",
      initials: "JC",
      name: "Jill Chen",
      role: "Business Development Lead, Cladify"
    },
    {
      stars: 5,
      quote: "AutoUp has been a game changer for our healthcare ecosystem. We gained more traction in a few months than ever before, and have had calls with multi-billion dollar companies.",
      initials: "DB",
      name: "Doug Bertram",
      role: "CEO, Structural Elements"
    },
    {
      stars: 5,
      quote: "We've tried every outbound channel over 20 years selling into the Fortune 100. Hiring AutoUp has been the best business development play we've made in over a decade.",
      initials: "JS",
      name: "John Strassel",
      role: "CEO, Zeriva"
    },
    {
      stars: 5,
      quote: "We've won big deals we wouldn't have thought to look for if it weren't for AutoUp. The value has been massive. Hire them.",
      initials: "CM",
      name: "Cory Moskowitz",
      role: "CEO & Founder, TransPromotion"
    },
    {
      stars: 5,
      quote: "AutoUp allowed us to rethink our business development structure entirely. They amplified our outreach in a cost-effective way we didn't know was possible.",
      initials: "GG",
      name: "Grant Gordon",
      role: "CEO, Connected Healthcare"
    },
    {
      stars: 5,
      quote: "Just before we were acquired, we had to turn away clients. If AutoUp could bring that level of success in the incredibly competitive web-mobile dev industry, it can work for anyone.",
      initials: "KG",
      name: "Kemae de Guzman",
      role: "Project Manager, SourcePad"
    }
  ];

  return (
    <Section id="testimonials" className="bg-navy">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <div className="text-teal font-bold uppercase tracking-widest text-sm mb-4">Client Results</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Real People. <em className="text-teal font-serif italic">Real Results.</em>
          </h2>
          <p className="text-lg text-gray-400">
            Don't take our word for it — hear from the founders and leaders who've scaled with us.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal 
            key={i} 
            delay={i % 3 * 0.1} 
            className={`
              p-8 rounded-2xl flex flex-col justify-between
              ${t.featured 
                ? 'bg-gradient-to-br from-navy-card to-navy border border-teal/30 col-span-1 md:col-span-2 lg:col-span-1 row-span-2' 
                : 'bg-navy-card border border-white/5'
              }
            `}
          >
            <div>
              <div className="flex gap-1 text-teal mb-4">
                {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-teal" />)}
              </div>
              <blockquote className={`mb-8 leading-relaxed ${t.featured ? 'text-lg md:text-xl font-medium text-white' : 'text-gray-300'}`}>
                "{t.quote}"
              </blockquote>
            </div>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-teal text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
              
              {t.featured && t.stat && (
                <div className="text-right hidden sm:block">
                  <div className="text-2xl font-bold text-teal">{t.stat.val}</div>
                  <div className="text-[10px] uppercase text-gray-500 font-bold">{t.stat.label}</div>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
