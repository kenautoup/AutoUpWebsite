import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: ReactNode;
  "data-theme"?: string;
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
