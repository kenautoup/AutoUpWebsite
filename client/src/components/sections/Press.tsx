export function Press() {
  const logos = [
    { name: "NYT", src: "/images/press/nyt.png", sizeClass: "h-[108px] md:h-[151px]" },
    { name: "WSJ", src: "/images/press/wsj.png", smaller: true },
    { name: "TechCrunch", src: "/images/press/techcrunch.svg", sizeClass: "h-[60px] md:h-[84px]" },
    { name: "Forbes", src: "/images/press/forbes.png" },
    { name: "Bloomberg", src: "/images/press/bloomberg.png" },
    { name: "HBR", src: "/images/press/hbr.svg" },
    { name: "WaPo", src: "/images/press/wapo.png" },
    { name: "Entrepreneur", src: "/images/press/entrepreneur.png", sizeClass: "h-[108px] md:h-[151px]" },
    { name: "Inc5000", src: "/images/press/inc5000.svg", smaller: true },
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
          {doubled.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={logo.name}
              style={{ filter: "grayscale(100%)" }}
              className={`${logo.sizeClass ? logo.sizeClass : logo.smaller ? "h-14 md:h-[78px]" : "h-20 md:h-28"} w-auto object-contain opacity-30 hover:opacity-70 transition-opacity duration-300 flex-shrink-0`}
              data-testid={`press-logo-${logo.name.toLowerCase()}-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
