"use client";

import Image from "next/image";
import { projects } from "@/lib/data";

export default function PortfolioShowcase() {
  return (
    <section id="work" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <h2 className="font-display text-3xl md:text-4xl max-w-md">
            Six ways this could look on your site.
          </h2>
          <p className="text-mid max-w-xs text-sm">
            Placeholder case studies for this demo your real site is built
            around your actual work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`group ${i % 3 === 1 ? "sm:mt-10" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink-soft">
                <Image
                  src={project.image}
                  alt={`${project.title}  ${project.discipline} for ${project.client}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors duration-300 flex items-end p-6 opacity-0 group-hover:opacity-100">
                  <p className="text-paper text-sm">{project.description}</p>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-display text-lg">{project.title}</h3>
                <span className="text-xs text-mid">{project.year}</span>
              </div>
              <p className="text-sm text-mid">
                {project.discipline} · {project.client}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
