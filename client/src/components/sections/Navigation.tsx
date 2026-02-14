import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import logoImg from "@assets/logo.png";
import logoBlackImg from "@assets/autoupblack.png";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overDark, setOverDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const darkSections = document.querySelectorAll('[data-theme="dark"]');
      const navBottom = 80;
      let isOverDark = false;
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < navBottom && rect.bottom > 0) {
          isOverDark = true;
        }
      });
      setOverDark(isOverDark);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Results", href: "#results" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/blog", external: false },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = overDark;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? isDark
            ? "bg-[#0B1A2E]/95 backdrop-blur-md shadow-lg py-4 border-b border-white/5"
            : "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-[#eef1f5]"
          : isDark
            ? "bg-transparent py-6"
            : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50 flex items-center group">
          <img
            src={isDark ? logoImg : logoBlackImg}
            alt="AutoUp"
            className="h-8 w-auto transition-all group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) scrollToSection(e, link.href);
                  }}
                  className={cn(
                    "text-[16px] font-sans font-medium transition-colors",
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                  data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://calendly.com/ken-autoup/autoup-introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans font-bold px-5 py-2.5 rounded-lg transition-all duration-200 ease-out bg-[#4580F7] hover:bg-[#5090FF] text-white shadow-[0_2px_10px_rgba(69,128,247,0.2)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
            data-testid="link-nav-cta"
          >
            Book Intro Call <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden relative z-50 p-2",
            isDark ? "text-white" : "text-gray-900"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-x-0 top-[72px] bg-white border-b border-[#eef1f5] p-6 flex flex-col gap-4 shadow-2xl transition-all duration-300 md:hidden origin-top",
            mobileOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) scrollToSection(e, link.href);
                else setMobileOpen(false);
              }}
              className="text-lg font-sans font-medium text-gray-700 hover:text-teal py-2 border-b border-gray-100"
              data-testid={`nav-link-mobile-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://calendly.com/ken-autoup/autoup-introduction"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-[#4580F7] text-white font-sans font-bold px-5 py-3 rounded-lg w-full"
          >
            Book Intro Call <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
