import { Link } from "wouter";
import logoImg from "@assets/logo.webp";

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/5 py-12 min-h-[200px]" data-theme="dark" role="contentinfo">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-5">
        <Link href="/" className="group">
          <img src={logoImg} alt="AutoUp" width={158} height={24} className="h-6 w-auto transition-transform group-hover:scale-105" />
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/terms" className="text-sm md:text-[14px] text-gray-500 hover:text-gray-300 transition-colors" data-testid="link-terms">
            Terms & Privacy
          </Link>
          <a 
            href="https://calendly.com/ken-autoup/autoup-introduction" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm md:text-[14px] text-gray-500 hover:text-gray-300 transition-colors"
            data-testid="link-contact"
          >
            Contact
          </a>
        </div>
        
        <div className="text-sm md:text-[14px] text-gray-600">
          © {new Date().getFullYear()} AutoUp. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
