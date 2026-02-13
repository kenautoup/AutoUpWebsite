export function Press() {
  const logos = [
    { name: "NYT", src: "/images/press/nyt.png" },
    { name: "WSJ", src: "/images/press/wsj.png" },
    { name: "Forbes", src: "/images/press/forbes.png" },
    { name: "Bloomberg", src: "/images/press/bloomberg.png" },
    { name: "TechCrunch", src: "/images/press/techcrunch.png" },
    { name: "HBR", src: "/images/press/hbr.png" },
    { name: "WaPo", src: "/images/press/wapo.png" },
    { name: "Entrepreneur", src: "/images/press/entrepreneur.png" },
  ];

  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 border-y border-white/5 bg-navy-deep/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-4">
        <p className="text-sm font-bold tracking-[2px] text-g400 uppercase text-center">Client Press</p>
      </div>
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-deep/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-deep/80 to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-left gap-24 w-max py-4">
          {doubled.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={logo.name}
              className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
              data-testid={`press-logo-${logo.name.toLowerCase()}-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
