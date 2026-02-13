import { Link } from "wouter";
import { ArrowRight, ArrowLeft, Clock, User } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import logoBlackImg from "@assets/autoupblack.png";

const blogPosts = [
  {
    slug: "cold-email-deliverability-2025",
    title: "The Ultimate Guide to Cold Email Deliverability in 2025",
    excerpt: "Deliverability is the single biggest factor determining your outreach success. Learn the proven strategies to land in primary inboxes consistently.",
    category: "Email Strategy",
    readTime: "8 min read",
    author: "Ken at AutoUp",
    date: "Feb 10, 2025",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
  },
  {
    slug: "b2b-lead-generation-ai",
    title: "How AI Is Transforming B2B Lead Generation",
    excerpt: "From data extraction to personalized messaging at scale, AI tools are reshaping how companies build their sales pipeline. Here's what's working right now.",
    category: "AI & Automation",
    readTime: "6 min read",
    author: "Ken at AutoUp",
    date: "Jan 28, 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    slug: "outbound-vs-inbound-sales",
    title: "Outbound vs. Inbound: Why You Need Both in Your Pipeline",
    excerpt: "Most B2B companies rely too heavily on one channel. We break down why a blended approach delivers the most consistent results.",
    category: "Sales Strategy",
    readTime: "5 min read",
    author: "Ken at AutoUp",
    date: "Jan 15, 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    slug: "linkedin-outreach-playbook",
    title: "The LinkedIn Outreach Playbook That Books 30+ Meetings a Month",
    excerpt: "LinkedIn is still the most powerful B2B platform — if you use it right. Here's the exact framework our team uses to generate qualified meetings.",
    category: "LinkedIn",
    readTime: "7 min read",
    author: "Ken at AutoUp",
    date: "Jan 2, 2025",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80",
  },
  {
    slug: "email-copywriting-frameworks",
    title: "5 Email Copywriting Frameworks That Actually Get Replies",
    excerpt: "Forget generic templates. These battle-tested frameworks help you write emails that feel personal and drive real conversations.",
    category: "Copywriting",
    readTime: "6 min read",
    author: "Ken at AutoUp",
    date: "Dec 18, 2024",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
  },
  {
    slug: "scaling-outreach-without-spam",
    title: "How to Scale Outreach to 10,000+ Prospects Without Getting Flagged",
    excerpt: "Volume matters — but so does reputation. Learn how to scale your cold outreach safely while maintaining high deliverability and engagement.",
    category: "Email Strategy",
    readTime: "9 min read",
    author: "Ken at AutoUp",
    date: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
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
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img src={logoBlackImg} alt="AutoUp" className="h-8 w-auto transition-transform group-hover:scale-105" />
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </nav>

      <header className="pt-16 pb-12 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-teal mb-4 block">AutoUp Blog</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-sans">
              Outreach Strategies That Work
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Actionable insights on cold email, lead generation, and scaling your B2B pipeline.
            </p>
          </Reveal>
        </div>
      </header>

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
                  <div className="aspect-[16/10] overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
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
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
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
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AutoUp. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export { blogPosts };
