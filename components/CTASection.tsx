export default function CTASection() {
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
            href="tel:08134486173"
            className="border border-ink/20 px-6 py-3 rounded-sm font-medium hover:border-ink/50 transition-colors"
          >
            0813 448 6173
          </a>
        </div>
      </div>
    </section>
  );
}
