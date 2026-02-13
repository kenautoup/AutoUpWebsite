export function Press() {
  const logos = ["NYT", "WSJ", "Forbes", "Bloomberg", "TechCrunch", "HBR", "Fortune", "WaPo"];

  return (
    <section className="py-10 border-y border-white/5 bg-navy-deep/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase mr-4">Client Press</span>
          {logos.map((logo) => (
            <span key={logo} className="text-xl font-serif font-bold text-gray-400 hover:text-white transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
