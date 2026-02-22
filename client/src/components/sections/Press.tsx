export function Press() {
  const logos = [
    { name: "The New York Times", src: "/images/press/nyt.png", isSvg: false, sizeClass: "h-[108px] md:h-[151px]" },
    { name: "The Wall Street Journal", src: "/images/press/wsj.png", isSvg: false, smaller: true },
    { name: "TechCrunch", src: "/images/press/techcrunch-transparent.png", isSvg: false, sizeClass: "h-[96px] md:h-[134px]" },
    { name: "Forbes", src: "/images/press/forbes.png", isSvg: false },
    { name: "Bloomberg", src: "/images/press/bloomberg.png", isSvg: false },
    { name: "Harvard Business Review", src: "/images/press/hbr.png", isSvg: false },
    { name: "The Washington Post", src: "/images/press/wapo.png", isSvg: false },
    { name: "Entrepreneur", src: "/images/press/entrepreneur.png", isSvg: false, sizeClass: "h-[108px] md:h-[151px]" },
    { name: "Inc. 5000", src: "/images/press/inc5000-transparent.png", isSvg: false, sizeClass: "h-[140px] md:h-[195px]" },
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
            const heightClass = (logo as any).sizeClass || ((logo as any).smaller ? "h-14 md:h-[78px]" : "h-20 md:h-28");

            return (
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
