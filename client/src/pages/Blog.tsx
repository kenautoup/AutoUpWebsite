import { Link } from "wouter";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

const blogPosts = [
  {
    slug: "cold-email-deliverability-2025",
    title: "The Ultimate Guide to Cold Email Deliverability in 2025",
    excerpt: "Deliverability is the single biggest factor determining your outreach success. Learn the proven strategies to land in primary inboxes consistently.",
    category: "Email Strategy",
    readTime: "8 min read",
    author: "Ken at AutoUp",
    date: "Feb 10, 2025",
  },
  {
    slug: "b2b-lead-generation-ai",
    title: "How AI Is Transforming B2B Lead Generation",
    excerpt: "From data extraction to personalized messaging at scale, AI tools are reshaping how companies build their sales pipeline. Here's what's working right now.",
    category: "AI & Automation",
    readTime: "6 min read",
    author: "Ken at AutoUp",
    date: "Jan 28, 2025",
  },
  {
    slug: "outbound-vs-inbound-sales",
    title: "Outbound vs. Inbound: Why You Need Both in Your Pipeline",
    excerpt: "Most B2B companies rely too heavily on one channel. We break down why a blended approach delivers the most consistent results.",
    category: "Sales Strategy",
    readTime: "5 min read",
    author: "Ken at AutoUp",
    date: "Jan 15, 2025",
  },
  {
    slug: "linkedin-outreach-playbook",
    title: "The LinkedIn Outreach Playbook That Books 30+ Meetings a Month",
    excerpt: "LinkedIn is still the most powerful B2B platform — if you use it right. Here's the exact framework our team uses to generate qualified meetings.",
    category: "LinkedIn",
    readTime: "7 min read",
    author: "Ken at AutoUp",
    date: "Jan 2, 2025",
  },
  {
    slug: "email-copywriting-frameworks",
    title: "5 Email Copywriting Frameworks That Actually Get Replies",
    excerpt: "Forget generic templates. These battle-tested frameworks help you write emails that feel personal and drive real conversations.",
    category: "Copywriting",
    readTime: "6 min read",
    author: "Ken at AutoUp",
    date: "Dec 18, 2024",
  },
  {
    slug: "scaling-outreach-without-spam",
    title: "How to Scale Outreach to 10,000+ Prospects Without Getting Flagged",
    excerpt: "Volume matters — but so does reputation. Learn how to scale your cold outreach safely while maintaining high deliverability and engagement.",
    category: "Email Strategy",
    readTime: "9 min read",
    author: "Ken at AutoUp",
    date: "Dec 5, 2024",
  },
];

const categoryColors: Record<string, string> = {
  "Email Strategy": "bg-blue-50 text-blue-700",
  "AI & Automation": "bg-purple-50 text-purple-700",
  "Sales Strategy": "bg-emerald-50 text-emerald-700",
  "LinkedIn": "bg-sky-50 text-sky-700",
  "Copywriting": "bg-amber-50 text-amber-700",
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-36 pb-6 md:pt-40 md:pb-8 overflow-hidden relative bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[3px] text-teal mb-6 block">The AutoUp System</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.1] font-sans text-[#1e293b]">
              10,000+ Positive Replies.<br />
              <em className="text-teal">Every Month.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[20px] md:text-[22px] text-[#64748b] max-w-[540px] mx-auto mb-8 leading-relaxed">
              The strategies, frameworks, and insights behind the system.
            </p>
          </Reveal>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-white rounded-lg border border-gray-100 overflow-visible hover-elevate transition-all"
                  data-testid={`blog-card-${post.slug}`}
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || "bg-gray-50 text-gray-700"}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#4580F7] transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-4 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between gap-2 flex-wrap pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <span className="text-xs text-gray-400">{post.date}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-20 mb-8">
            <Reveal>
              <p className="text-lg text-gray-500 mb-6">Want results like these?</p>
              <a
                href="https://calendly.com/ken-autoup/autoup-introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#4580F7] hover:bg-[#5090FF] text-white font-bold text-lg px-10 py-[18px] rounded-xl transition-all duration-200 ease-out shadow-[0_2px_12px_rgba(69,128,247,0.2)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
                data-testid="link-blog-cta"
              >
                Book Intro Call <ArrowUpRight className="w-5 h-5" />
              </a>
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export { blogPosts };
