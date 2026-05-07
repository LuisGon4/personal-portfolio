import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];
const vp = { once: false, margin: '-80px' };

const links = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/LuisGon4',
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luis-gonzalez-alvarado-172596382/',
    external: true,
  },
  {
    icon: Mail,
    label: 'luismgon4@gmail.com',
    href: 'mailto:luismgon4@gmail.com',
    external: false,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[#0f0f0f]/10 px-6 pt-24 pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.55, ease }}
        >
          <span
            aria-hidden="true"
            className="absolute -top-6 -left-1 text-[8rem] font-display font-bold leading-none text-[#0f0f0f]/[0.04] select-none pointer-events-none"
          >
            05
          </span>
          <h2 className="relative text-4xl font-display font-bold tracking-tighter flex items-center gap-3">
            <span className="w-2 h-8 bg-[#c17f24] inline-block" />
            Contact
          </h2>
        </motion.div>

        <motion.ul
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, delay: 0.15, ease }}
        >
          {links.map(({ icon: Icon, label, href, external }) => (
            <li key={href}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-3 underline underline-offset-4 hover:text-[#c17f24] transition-colors"
              >
                <Icon size={20} />
                {label}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
