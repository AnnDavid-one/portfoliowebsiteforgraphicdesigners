const reasons = [
  {
    title: "A client Googles you and finds nothing.",
    body: "An Instagram grid isn't a portfolio, it's evidence you exist. A site is evidence you're good.",
  },
  {
    title: "PDFs get lost. Links don't.",
    body: "One address you can put on a business card, an invoice, or a DM.. and it always shows your best work first.",
  },
  {
    title: "It's the difference between freelancer and studio.",
    body: "The same work reads as more serious the moment it has a proper home, before a client's read a single case study.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="bg-ink text-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="font-display text-3xl md:text-4xl max-w-lg mb-16">
          You don&apos;t need a website. You need clients to stop wondering
          if you're any good.
        </h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="border-t border-paper/20 pt-6">
              <h3 className="font-display text-xl mb-3">{reason.title}</h3>
              <p className="text-paper/70 text-sm leading-relaxed">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
