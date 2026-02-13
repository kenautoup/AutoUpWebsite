import { Zap } from "lucide-react";

export function Certifications() {
  return (
    <section className="py-8 bg-navy-deep border-y border-white/5 text-center">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <span className="text-gray-500 font-medium">Endorsed by the best —</span>
        <span className="flex items-center gap-2 text-white font-bold bg-white/5 px-4 py-1.5 rounded-full text-sm">
          <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
          Instantly.ai Certified Expert
        </span>
      </div>
    </section>
  );
}
