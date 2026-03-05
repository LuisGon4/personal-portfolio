import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#about" className="font-semibold text-sm tracking-widest uppercase text-white">
          Luis
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm tracking-wide text-white hover:underline underline-offset-4"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px bg-white transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-px bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px bg-white transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden border-t border-white/10">
          {navLinks.map(({ label, href }) => (
            <li key={label} className="border-b border-white/10 last:border-b-0">
              <a
                href={href}
                className="block px-6 py-4 text-sm tracking-wide text-white hover:bg-white hover:text-black transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
