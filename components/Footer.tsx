import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/60 py-10 border-t border-paper/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm">
        <div>
          <p className="text-paper font-display text-lg mb-1">HARDCODE</p>
          <p>No 12 Chief Abel Street, Omoku, Rivers State</p>
        </div>
        <ul className="flex flex-wrap gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-paper transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
