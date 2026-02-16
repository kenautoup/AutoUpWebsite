import { useState, useEffect } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, User, Calendar } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Reveal } from "@/components/ui/reveal";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getPostBySlug, getAdjacentPosts, type SanityPost } from "@/lib/sanityQueries";
import { urlFor } from "@/lib/sanity";

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-gray-600 leading-relaxed mb-6 text-[17px]">{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 font-sans">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3 font-sans">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-teal/40 pl-5 my-6 text-gray-500 italic text-[17px] leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#4580F7] underline hover:text-[#5090FF] transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(800).auto("format").url()}
            alt={value.alt || ""}
            className="rounded-lg w-full"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="text-sm text-gray-400 mt-2 text-center">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<SanityPost | null>(null);
  const [adjacent, setAdjacent] = useState<{ prev: any; next: any }>({ prev: null, next: null });
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  usePageMeta({
    title: post ? `${post.title} — AutoUp Blog` : "AutoUp Blog",
    description: post?.excerpt || "Cold email outbound strategies and insights from AutoUp.",
    canonical: post ? `https://autoup.io/blog/${post.slug}` : undefined,
    ogImage: post?.ogImage || "https://autoup.io/og-image.png",
    ogType: "article",
  });

  useEffect(() => {
    if (!post) return;

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.excerpt,
      "author": {
        "@type": "Person",
        "name": post.author,
      },
      "publisher": {
        "@type": "Organization",
        "name": "AutoUp",
        "logo": {
          "@type": "ImageObject",
          "url": "https://autoup.io/favicon.png",
        },
      },
      "datePublished": post.publishedAt,
      "mainEntityOfPage": `https://autoup.io/blog/${post.slug}`,
      ...(post.ogImage ? { image: post.ogImage } : {}),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [post]);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setNotFound(false);

    getPostBySlug(slug)
      .then((result) => {
        if (!result) {
          setNotFound(true);
        } else {
          setPost(result);
          getAdjacentPosts(result.publishedAt).then(setAdjacent);
        }
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20 container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-6" />
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-12" />
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20 container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post not found</h1>
          <p className="text-gray-500 mb-8">The post you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog" className="text-[#4580F7] font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {formatDate(post.publishedAt)}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="prose prose-lg max-w-none">
              {post.body && (
                <PortableText value={post.body} components={portableTextComponents} />
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
            {adjacent.prev ? (
              <Link
                href={`/blog/${adjacent.prev.slug}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors max-w-[45%]"
                data-testid="link-prev-post"
              >
                <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">{adjacent.prev.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : <div />}
            {adjacent.next ? (
              <Link
                href={`/blog/${adjacent.next.slug}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors text-right max-w-[45%]"
                data-testid="link-next-post"
              >
                <span className="hidden sm:inline">{adjacent.next.title}</span>
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
