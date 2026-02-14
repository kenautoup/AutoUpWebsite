import { Zap } from "lucide-react";

export function Certifications() {
  return (
    <section className="py-8 bg-white border-y border-[#eef1f5] text-center">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <span className="text-[#8a9bb0] font-medium">Endorsed by the best —</span>
        <span className="flex items-center gap-2 text-[#1e293b] font-bold bg-[#f7f8fa] border border-[#eef1f5] px-4 py-1.5 rounded-full text-sm">
          <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
          Instantly.ai Certified Expert
        </span>
      </div>
    </section>
  );
}
