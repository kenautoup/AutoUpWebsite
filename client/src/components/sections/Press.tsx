import tcLogoPath from "@assets/techcrunchlogo_1771039496189.webp";
import inc5000LogoPath from "@assets/Inc5000_Medallion_Black-adj_1771765584510.webp";

export function Press() {
  const logos = [
    { name: "The New York Times", src: "/images/press/nyt.png", isSvg: false, sizeClass: "h-[108px] md:h-[151px]" },
    { name: "The Wall Street Journal", src: "/images/press/wsj.png", isSvg: false, smaller: true },
    { name: "TechCrunch", src: tcLogoPath, isSvg: false, sizeClass: "h-[60px] md:h-[84px]" },
    { name: "Forbes", src: "/images/press/forbes.png", isSvg: false },
    { name: "Bloomberg", src: "/images/press/bloomberg.png", isSvg: false },
    { name: "Harvard Business Review", src: "/images/press/hbr.png", isSvg: false },
    { name: "The Washington Post", src: "/images/press/wapo.png", isSvg: false },
    { name: "Entrepreneur", src: "/images/press/entrepreneur.png", isSvg: false, sizeClass: "h-[108px] md:h-[151px]" },
    { name: "Inc. 5000", src: inc5000LogoPath, isSvg: false, sizeClass: "h-[140px] md:h-[195px] mix-blend-multiply" },
  ];

  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 border-y border-[#eef1f5] bg-[#f7f8fa] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-4">
        <p className="text-base md:text-lg font-bold tracking-[3px] text-[#8a9bb0] uppercase text-center">Client Press</p>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f7f8fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f7f8fa] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-left gap-24 w-max py-4 items-center">
          {doubled.map((logo, i) => {
            const sizeClass = (logo as any).sizeClass;
            const isBlend = sizeClass?.includes("mix-blend");
            const sizeOnly = sizeClass?.replace(/mix-blend-\S+/, "").trim();
            const heightClass = sizeOnly || ((logo as any).smaller ? "h-14 md:h-[78px]" : "h-20 md:h-28");

            return isBlend ? (
              <div
                key={`${logo.name}-${i}`}
                className={`${heightClass} flex-shrink-0 mix-blend-multiply opacity-30 hover:opacity-70 transition-opacity duration-300`}
                data-testid={`press-logo-${logo.name.toLowerCase()}-${i}`}
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} — AutoUp client press feature`}
                  className="h-full w-auto object-contain"
                />
              </div>
            ) : (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={`${logo.name} — AutoUp client press feature`}
                className={`${heightClass} w-auto object-contain opacity-30 hover:opacity-70 transition-opacity duration-300 flex-shrink-0`}
                data-testid={`press-logo-${logo.name.toLowerCase()}-${i}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
