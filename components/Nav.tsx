"use client";

const links = [
  { label: "Work", href: "#work" },
  { label: "Why", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-sm border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg text-paper tracking-tight"
        >
          HARDCODE
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-paper/70">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-paper transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="text-sm font-medium bg-lime text-ink px-4 py-2 rounded-sm hover:bg-paper transition-colors"
        >
          Message me
        </a>
      </nav>
    </header>
  );
}
