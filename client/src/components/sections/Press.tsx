export function Press() {
  const logos = [
    { name: "NYT", src: "/images/press/nyt.png", isSvg: false },
    { name: "WSJ", src: "/images/press/wsj.png", isSvg: false, smaller: true },
    { name: "Forbes", src: "/images/press/forbes.png", isSvg: false },
    { name: "Bloomberg", src: "/images/press/bloomberg.png", isSvg: false },
    { name: "TechCrunch", src: "/images/press/techcrunch.png", isSvg: false },
    { name: "HBR", src: "/images/press/hbr.png", isSvg: false },
    { name: "WaPo", src: "/images/press/wapo.png", isSvg: false },
    { name: "Entrepreneur", src: "/images/press/entrepreneur.png", isSvg: false },
    { name: "Inc5000", src: "/images/press/inc5000.png", isSvg: false, blendMode: true },
  ];

  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 border-y border-white/5 bg-navy-deep/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-4">
        <p className="text-base md:text-lg font-bold tracking-[3px] text-g400 uppercase text-center">Client Press</p>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-deep/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-deep/80 to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-left gap-24 w-max py-4 items-center">
          {doubled.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={logo.name}
              className={`${(logo as any).smaller ? "h-14 md:h-[78px]" : "h-20 md:h-28"} w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 flex-shrink-0 ${(logo as any).blendMode ? "grayscale invert mix-blend-screen" : logo.isSvg ? "" : "brightness-0 invert"}`}
              data-testid={`press-logo-${logo.name.toLowerCase()}-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
