import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];


export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center px-6 py-24 max-w-5xl mx-auto overflow-hidden"
    >
      {/* Geometric decoration — large circle arc in top-right corner */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full border border-[#c17f24]/20 opacity-60 pointer-events-none"
      />
      {/* Geometric decoration — horizontal hairline rule, upper-left */}
      <div
        aria-hidden="true"
        className="absolute top-16 left-0 w-32 h-px bg-[#0f0f0f]/10 pointer-events-none"
      />
      {/* Geometric decoration — vertical hairline, right side */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-4 w-24 h-1 bg-[#0f0f0f]/5 rotate-90 pointer-events-none"
      />

      <div>
          <motion.h1
            className="font-display text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            Luis Gonzalez Alvarado
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl tracking-wide text-[#0f0f0f]/60 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease }}
          >
            Software Engineer · CS Student
          </motion.p>
          <motion.p
            className="text-base md:text-lg leading-relaxed max-w-2xl text-[#0f0f0f]/75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease }}
          >
            I'm a 3rd year computer science student focused on building clean, useful software. I enjoy
            working across the stack from backend systems to cloud infrastructure. Currently
            looking for internship opportunities.
          </motion.p>
      </div>

      {/* Section divider with accent */}
      <motion.div
        className="mt-20 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45, ease }}
      >
        <div className="h-px flex-1 bg-[#0f0f0f]/10" />
        <div className="w-2 h-2 rounded-full bg-[#c17f24]" />
        <div className="h-px flex-1 bg-[#0f0f0f]/10" />
      </motion.div>
    </section>
  );
}
