import { tiers } from "@/lib/data";

export default function PricingTiers() {
  return (
    <section id="pricing" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-lg mb-16">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Three ways to start.
          </h2>
          <p className="text-mid">
            Every site is designed around your brand, these packages set the
            scope, not the look. Not sure which fits? Message me and we&apos;ll
            figure it out together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-sm p-8 flex flex-col ${
                tier.highlighted
                  ? "bg-ink text-paper md:-translate-y-4 shadow-xl"
                  : "bg-white border border-paper-dim text-ink"
              }`}
            >
              {tier.highlighted && (
                <span className="text-xs uppercase tracking-wide text-lime mb-4">
                  Most chosen
                </span>
              )}
              <h3 className="font-display text-2xl mb-1">{tier.name}</h3>
              <p
                className={`text-sm mb-6 ${
                  tier.highlighted ? "text-paper/60" : "text-mid"
                }`}
              >
                {tier.forWhom}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-sm flex gap-3">
                    <span
                      className={
                        tier.highlighted ? "text-lime" : "text-indigo"
                      }
                    >
                      
                    </span>
                    <span
                      className={
                        tier.highlighted ? "text-paper/85" : "text-ink/80"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`text-center py-3 rounded-sm font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-lime text-ink hover:opacity-90"
                    : "bg-ink text-paper hover:bg-ink-soft"
                }`}
              >
                {tier.price}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
