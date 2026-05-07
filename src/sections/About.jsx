import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

// Replace public/profile.jpg with your actual photo — no code change needed.
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

      {/* Two-column grid: text left, photo right */}
      <div className="grid md:grid-cols-[1fr_280px] gap-12 items-center">
        {/* Left: text */}
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
            working across the stack — from designing systems to cloud infrastructure. Currently
            looking for internship and new grad opportunities.
          </motion.p>
        </div>

        {/* Right: photo */}
        <motion.div
          className="hidden md:flex justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease }}
        >
          <div className="relative">
            {/* Offset accent border */}
            <div className="absolute -inset-2 border-2 border-[#c17f24] rounded-2xl translate-x-2 translate-y-2" />
            <img
              src="/profile.jpg"
              alt="Luis Gonzalez Alvarado"
              className="relative w-64 h-64 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
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
