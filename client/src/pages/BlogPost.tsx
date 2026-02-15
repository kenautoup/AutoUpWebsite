import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, User, Calendar } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { blogPosts } from "./Blog";

type ContentBlock = { type: "heading"; text: string } | { type: "paragraph"; text: string };

const postContent: Record<string, ContentBlock[]> = {
  "cold-email-deliverability-2025": [
    { type: "paragraph", text: "Cold email deliverability isn't just a technical problem — it's the foundation of your entire outreach strategy. If your emails don't land in the primary inbox, nothing else matters. Not your copy, not your offer, not your targeting." },
    { type: "paragraph", text: "In 2025, inbox providers have gotten significantly smarter. Google and Microsoft are using AI-driven filters that look beyond simple spam triggers. They're analyzing sending patterns, engagement rates, and even the semantic content of your emails." },
    { type: "heading", text: "Infrastructure" },
    { type: "paragraph", text: "The first rule of deliverability is infrastructure. You need properly warmed domains, authenticated DNS records (SPF, DKIM, DMARC), and a clean sending reputation. At AutoUp, we maintain separate domain infrastructure for every client to prevent cross-contamination." },
    { type: "heading", text: "Volume Management" },
    { type: "paragraph", text: "Volume management is equally critical. Sending 1,000 emails from a single domain on day one is a guaranteed way to get flagged. We use a gradual ramp-up strategy, starting with 20-30 emails per day per mailbox and scaling over 2-3 weeks." },
    { type: "heading", text: "Content" },
    { type: "paragraph", text: "Content matters more than ever. Avoid HTML-heavy templates, excessive links, and trigger words. Plain-text emails with a single, soft call-to-action consistently outperform designed templates in cold outreach." },
    { type: "heading", text: "Engagement Signals" },
    { type: "paragraph", text: "Engagement signals are the new currency of deliverability. When recipients open, reply, and move your emails out of spam, it signals to providers that your messages are wanted. This is why personalization at the subject line and opening line level is non-negotiable." },
    { type: "heading", text: "List Quality" },
    { type: "paragraph", text: "Finally, list quality is your secret weapon. Verify every email address before sending. A bounce rate above 3% will damage your sender reputation faster than almost anything else. We use triple-verified lists with real-time validation to keep bounce rates below 1%." },
  ],
  "b2b-lead-generation-ai": [
    { type: "paragraph", text: "Artificial intelligence has fundamentally changed how B2B companies identify, qualify, and engage potential customers. What used to take a team of SDRs weeks can now be accomplished in hours." },
    { type: "heading", text: "AI-Powered Data Extraction" },
    { type: "paragraph", text: "The biggest shift is in data extraction. AI tools can now scrape, clean, and enrich prospect data from dozens of sources simultaneously. At AutoUp, we use AI to build hyper-targeted prospect lists based on technographic, firmographic, and intent signals." },
    { type: "heading", text: "Personalization at Scale" },
    { type: "paragraph", text: "Personalization at scale is where AI truly shines. Instead of generic mail merge fields, AI can analyze a prospect's LinkedIn activity, company news, and tech stack to generate genuinely relevant opening lines. This isn't about tricking people — it's about showing you've done your homework." },
    { type: "heading", text: "Predictive Lead Scoring" },
    { type: "paragraph", text: "Predictive lead scoring is another game-changer. By analyzing patterns in your closed-won deals, AI can identify which prospects are most likely to convert. This means your team spends time on the right opportunities instead of casting a wide net." },
    { type: "heading", text: "Automated A/B Testing" },
    { type: "paragraph", text: "Automated A/B testing has also evolved. AI can now test dozens of subject line and body variations simultaneously, learning in real-time which messaging resonates with specific segments. We've seen this approach improve reply rates by 40-60%." },
    { type: "heading", text: "The Human Element" },
    { type: "paragraph", text: "The key is using AI as a force multiplier, not a replacement for human judgment. The best-performing campaigns combine AI-powered data and personalization with human-crafted strategy and messaging frameworks." },
  ],
  "outbound-vs-inbound-sales": [
    { type: "paragraph", text: "The outbound vs. inbound debate has raged in B2B sales for over a decade. But the truth is, the most successful companies don't choose — they build systems that leverage both." },
    { type: "heading", text: "The Power of Inbound" },
    { type: "paragraph", text: "Inbound is powerful because buyers come to you with intent. They've already recognized a problem and are actively looking for solutions. But inbound is slow to build, unpredictable in volume, and increasingly competitive as more companies invest in content marketing." },
    { type: "heading", text: "Why Outbound Gives You Control" },
    { type: "paragraph", text: "Outbound gives you control. You choose who to talk to, when to reach out, and what message to deliver. Done right, outbound creates conversations that would never happen through inbound alone — especially with enterprise decision-makers who aren't Googling for solutions." },
    { type: "heading", text: "The Blended Approach" },
    { type: "paragraph", text: "The magic happens when you combine them. Your outbound campaigns generate awareness and conversations. Some of those prospects aren't ready to buy today, but when they are, they come back through inbound channels. Meanwhile, your inbound content builds credibility that makes your cold outreach more effective." },
    { type: "heading", text: "Real Results" },
    { type: "paragraph", text: "At AutoUp, we've seen clients achieve 3-4x pipeline growth by adding a structured outbound program to their existing inbound efforts. The key is treating them as complementary systems, not competing channels." },
  ],
  "linkedin-outreach-playbook": [
    { type: "paragraph", text: "LinkedIn remains the single most powerful platform for B2B prospecting. With 900+ million professionals and unmatched targeting capabilities, it's a goldmine — if you know how to mine it." },
    { type: "heading", text: "Optimize Your Profile" },
    { type: "paragraph", text: "The foundation is your profile. Before sending a single connection request, your profile needs to clearly communicate the value you bring. This isn't about listing your job history — it's about positioning yourself as someone worth talking to." },
    { type: "heading", text: "Personalized Connection Requests" },
    { type: "paragraph", text: "Connection requests should be personalized but brief. Reference something specific about the prospect — a recent post, a mutual connection, or a company milestone. Generic 'I'd love to connect' messages have abysmal acceptance rates." },
    { type: "heading", text: "Lead With Value" },
    { type: "paragraph", text: "Once connected, resist the urge to pitch immediately. The best-performing sequences start with a value-add message — sharing a relevant article, insight, or case study. This builds credibility before you make any ask." },
    { type: "heading", text: "The Meeting Request" },
    { type: "paragraph", text: "When you do transition to a meeting request, make it specific and low-friction. 'I'd love 15 minutes to share how we helped [similar company] achieve [specific result]' outperforms vague requests every time." },
    { type: "heading", text: "Volume and Consistency" },
    { type: "paragraph", text: "Volume matters, but so does quality. We recommend sending 30-50 connection requests per day with 2-3 follow-up messages per accepted connection. This generates a consistent 30+ qualified meetings per month for most B2B companies." },
    { type: "heading", text: "Multichannel Is the Secret Sauce" },
    { type: "paragraph", text: "The secret sauce is combining LinkedIn with email outreach. Prospects who see you on both channels are 3x more likely to respond. At AutoUp, we orchestrate multichannel sequences that create natural touchpoints across platforms." },
  ],
  "email-copywriting-frameworks": [
    { type: "paragraph", text: "Most cold emails fail because they focus on the sender, not the recipient. The best-performing emails flip this dynamic entirely — they're about the prospect's world, not yours." },
    { type: "heading", text: "Framework 1: Problem-Agitate-Solve" },
    { type: "paragraph", text: "The Problem-Agitate-Solve (PAS) approach. Open with a specific problem your prospect faces, agitate it by highlighting the cost of inaction, then position your solution. This works because it shows you understand their reality." },
    { type: "heading", text: "Framework 2: The Relevant Case Study" },
    { type: "paragraph", text: "Lead with a result you achieved for a similar company. 'We helped [company in their industry] achieve [specific metric]. Would you be open to a quick chat about how we could do the same for [their company]?'" },
    { type: "heading", text: "Framework 3: Trigger-Based Outreach" },
    { type: "paragraph", text: "Reference a specific event — a new funding round, a job posting that signals growth, or a recent product launch. This makes your email feel timely and relevant rather than mass-produced." },
    { type: "heading", text: "Framework 4: The Question-First Approach" },
    { type: "paragraph", text: "Open with a thought-provoking question that highlights a gap in their current strategy. 'What would it mean for [company] if your SDR team could book 3x more meetings without adding headcount?'" },
    { type: "heading", text: "Framework 5: The Direct Value Offer" },
    { type: "paragraph", text: "Sometimes the simplest approach works best. 'I have an idea that could help [company] [achieve specific outcome]. Worth a 15-minute conversation?' No fluff, no buildup — just a clear value proposition." },
    { type: "heading", text: "Universal Best Practices" },
    { type: "paragraph", text: "Across all frameworks, keep emails under 100 words, use a single clear CTA, and write like a human — not a marketing department. The goal is to start a conversation, not close a deal in the first email." },
  ],
  "scaling-outreach-without-spam": [
    { type: "paragraph", text: "Scaling cold outreach is one of the most common challenges B2B companies face. You need volume to build pipeline, but aggressive scaling destroys deliverability and sender reputation." },
    { type: "heading", text: "Infrastructure-First Scaling" },
    { type: "paragraph", text: "The solution is infrastructure-first scaling. Before you send a single email at scale, you need the right foundation: multiple sending domains, properly warmed mailboxes, and authenticated DNS records across all of them." },
    { type: "paragraph", text: "We recommend a minimum of 3-5 sending domains per campaign, each with 2-3 mailboxes. This distributes your sending volume and protects your primary domain from reputation damage. At AutoUp, we manage dedicated infrastructure for every client." },
    { type: "heading", text: "Mailbox Warming" },
    { type: "paragraph", text: "Mailbox warming is non-negotiable. New mailboxes need 2-3 weeks of gradual volume increase before they're ready for campaign sending. We use automated warming tools that simulate real email conversations to build sender reputation." },
    { type: "heading", text: "Smart Segmentation" },
    { type: "paragraph", text: "List segmentation is your scaling secret. Instead of blasting 10,000 prospects with the same message, segment them into groups of 200-500 based on industry, role, company size, or pain point. This allows for personalized messaging that drives engagement." },
    { type: "heading", text: "Sending Patterns" },
    { type: "paragraph", text: "Sending patterns matter more than most people realize. Spread your sends across the business day, avoid weekends, and never send in large bursts. Inbox providers flag unnatural sending patterns as potential spam." },
    { type: "heading", text: "Monitor Everything" },
    { type: "paragraph", text: "Monitor everything. Track deliverability rates, open rates, reply rates, and bounce rates daily. If any metric drops below your benchmarks, pause and diagnose before continuing. At AutoUp, we use real-time monitoring dashboards to catch issues before they become problems." },
    { type: "heading", text: "Sustainable Scale" },
    { type: "paragraph", text: "The endgame is sustainable scale. We've helped clients reach 10,000+ prospects per month while maintaining deliverability above 95% and reply rates above 5%. It's possible — but only with the right infrastructure and discipline." },
  ],
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link href="/blog" className="text-[#4580F7] hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const content = postContent[post.slug] || [];
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Reveal>
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-sans" data-testid="text-post-title">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="prose prose-lg max-w-none">
              {content.map((block, i) =>
                block.type === "heading" ? (
                  <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-sans">
                    {block.text}
                  </h2>
                ) : (
                  <p key={i} className="text-gray-600 leading-relaxed mb-6 text-[17px]">
                    {block.text}
                  </p>
                )
              )}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-sans">Ready to scale your outreach?</h3>
              <p className="text-gray-500 mb-6">Book a free strategy call and see how AutoUp can build your pipeline.</p>
              <a
                href="https://calendly.com/ken-autoup/autoup-introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#4580F7] hover:bg-[#5090FF] text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 ease-out shadow-[0_2px_10px_rgba(69,128,247,0.2)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
                data-testid="link-post-cta"
              >
                Book Intro Call <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          <div className="mt-12 flex items-center justify-between gap-4 pt-8 border-t border-gray-100">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors max-w-[45%]"
                data-testid="link-prev-post"
              >
                <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">{prevPost.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors text-right max-w-[45%]"
                data-testid="link-next-post"
              >
                <span className="hidden sm:inline">{nextPost.title}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
