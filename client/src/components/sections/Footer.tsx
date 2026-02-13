import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/5 py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="group">
          <svg viewBox="0 0 40 40" className="w-8 h-8 transition-transform group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="4" width="30" height="32" rx="3" fill="#C8D8E8" opacity=".9" />
            <polygon points="0,36 30,36 30,20 22,28 16,22 6,32" fill="#4CAF50" />
            <polygon points="0,36 30,36 30,26 20,32 12,26 0,34" fill="#388E3C" />
            <polygon points="22,4 30,4 30,12" fill="#90A4AE" />
            <circle cx="22" cy="12" r="3" fill="#64B5F6" />
          </svg>
        </Link>
        
        <div className="flex items-center gap-6">
          <a href="https://autoup.io/terms-privacy/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
            Terms & Privacy
          </a>
          <a 
            href="https://calendly.com/ken-autoup/autoup-introduction" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            Contact
          </a>
        </div>
        
        <div className="text-sm text-gray-600">
          © 2025 AutoUp. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
