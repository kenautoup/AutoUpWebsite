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

  return (
    <section className="py-10 border-y border-white/5 bg-navy-deep/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <span className="text-xs font-bold tracking-[2px] text-g400 uppercase mr-2">Client Press</span>
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-6 md:h-7 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300"
              data-testid={`press-logo-${logo.name.toLowerCase()}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
