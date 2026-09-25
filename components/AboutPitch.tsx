export default function AboutPitch() {
  return (
    <section id="about" className="bg-ink text-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <p className="text-sm text-lime mb-4">Who&apos;s building this</p>
          <h2 className="font-display text-3xl md:text-4xl">
            David, HARDCODE.
          </h2>
        </div>
        <div className="space-y-5 text-paper/75 max-w-prose">
          <p>
            HARDCODE is brand company where the full-stack developer David
            Okechukwu builds and ships every site himself, from the first
            layout to the last deploy.
          </p>
          <p>
            This demo is one example of what that looks like: a fast,
            animated, mobile-ready site built with the same tools used for
            production software not a page builder template with your logo
            dropped in.
          </p>
          <p>
            If you want your own version of this built around your actual
            work, your colors, your voice, that&apos;s the job.
          </p>
        </div>
      </div>
    </section>
  );
}
