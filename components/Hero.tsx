"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-ink text-paper pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="text-sm text-lime mb-6 max-w-sm"
          >
            A site built showing what yours could look like.
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6"
          >
            Your work is good enough to sell itself.
            <br />
            It just needs somewhere to stand.
          </motion.h1>
          <motion.p
            variants={item}
            className="text-paper/70 text-lg max-w-md mb-8"
          >
            Most graphic designers don&apos;t have a website. They have a
            portfolio scattered across DMs, PDFs, and old Instagram posts.
            HARDCODE builds the site that puts it all in one place...
            built by David, a full-stack developer, to your brand.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="bg-lime text-ink px-6 py-3 rounded-sm font-medium hover:opacity-90 transition-opacity"
            >
              See the work
            </a>
            <a
              href="#pricing"
              className="border border-paper/30 px-6 py-3 rounded-sm font-medium hover:border-paper/60 transition-colors"
            >
              View packages
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mx-0"
        >
          <Image
            src="/images/Firefly_RemoveBackground.png"
            alt=""
            fill
className="w-full h-auto object-cover [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]" 
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
