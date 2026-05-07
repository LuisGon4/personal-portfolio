import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];
const vp = { once: false, margin: '-80px' };

const categories = [
  {
    label: 'Languages',
    skills: ['Java', 'C++', 'SQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks',
    skills: ['React', 'Spring Boot', 'PostgreSQL'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Postman', 'Docker', 'AWS (Basics)', 'Vercel', 'Render'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[#0f0f0f]/10 px-6 pt-24 pb-24">
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
            02
          </span>
          <h2 className="relative text-4xl font-display font-bold tracking-tighter flex items-center gap-3">
            <span className="w-2 h-8 bg-[#c17f24] inline-block" />
            Technologies
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, delay: 0.15, ease }}
        >
          {categories.map(({ label, skills }) => (
            <div key={label}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#0f0f0f]/40 mb-3">
                {label}
              </h3>
              <ul className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-mono text-xs px-2 py-1 border border-[#0f0f0f]/20 tracking-wide hover:border-[#c17f24] hover:text-[#c17f24] transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
