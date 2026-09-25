export default function CTASection() {
  const whatsappUrl = "https://wa.me/2347066718671?text=Hi%20David,%20I%20saw%20your%20portfolio%20site%20and%20I'd%20love%20to%20discuss%20a%20project.";

  return (
    <section id="cta" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 text-center">
        <h2 className="font-display text-3xl md:text-5xl max-w-2xl mx-auto mb-8">
          Have a different scope in mind?
          <br />
          Message me.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:ducehenna59@gmail.com"
            className="bg-ink text-paper px-6 py-3 rounded-sm font-medium hover:bg-ink-soft transition-colors"
          >
            ducehenna59@gmail.com
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink/20 px-6 py-3 rounded-sm font-medium hover:border-ink/50 transition-colors flex items-center gap-2"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
