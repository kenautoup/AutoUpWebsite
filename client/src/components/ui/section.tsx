import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-32 relative overflow-hidden", className)}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}
