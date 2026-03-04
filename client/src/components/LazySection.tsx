import { useEffect, useRef, useState, type ComponentType } from "react";

interface LazySectionProps {
  factory: () => Promise<{ default: ComponentType } | { [key: string]: ComponentType }>;
  exportName?: string;
  rootMargin?: string;
  minHeight?: string;
}

export function LazySection({ factory, exportName, rootMargin = "200px", minHeight = "200px" }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [Component, setComponent] = useState<ComponentType | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          factory().then((mod) => {
            const Comp = exportName ? (mod as Record<string, ComponentType>)[exportName] : (mod as { default: ComponentType }).default;
            setComponent(() => Comp);
          });
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [factory, exportName, rootMargin]);

  if (Component) return <Component />;
  return <div ref={ref} style={{ minHeight }} />;
}
