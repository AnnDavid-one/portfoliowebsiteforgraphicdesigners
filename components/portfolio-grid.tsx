"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          className={`flex flex-col justify-between border border-black/10 bg-[#fffdf8] p-6 ${
            p.span === "wide" ? "col-span-2 min-h-[320px] sm:col-span-3" : "col-span-2 min-h-[220px]"
          }`}
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.08 }}
        >
          <div>
            <p className="text-sm text-brass-deep">{p.tag}</p>
            <h3 className="mt-3 font-display text-xl">{p.title}</h3>
          </div>
          <p className="mt-auto border-t border-black/10 pt-4 text-sm text-muted-paper">
            Replace with your project thumbnail and title
          </p>
        </motion.div>
      ))}
    </div>
  );
}
