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
        className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full border border-indigo-200 opacity-40 pointer-events-none"
      />
      {/* Geometric decoration — small filled square accent, bottom-left */}
      <div
        aria-hidden="true"
        className="absolute bottom-16 left-4 w-20 h-20 bg-indigo-50 pointer-events-none"
      />

      {/* Two-column grid: text left, photo right */}
      <div className="grid md:grid-cols-[1fr_280px] gap-12 items-center">
        {/* Left: text */}
        <div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
            Luis Gonzalez Alvarado
          </h1>
          <p className="text-lg md:text-xl tracking-wide text-black/70 mb-10">
            Software Engineer · CS Student
          </p>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl text-black/80">
            I'm a computer science student focused on building clean, useful software. I enjoy
            working across the stack — from designing systems to shipping interfaces. Currently
            looking for internship and new grad opportunities.
          </p>
        </div>

        {/* Right: photo */}
        <div className="hidden md:flex justify-end">
          <div className="relative">
            {/* Offset accent border */}
            <div className="absolute -inset-2 border-2 border-indigo-500 rounded-2xl translate-x-2 translate-y-2" />
            <img
              src="/profile.jpg"
              alt="Luis Gonzalez Alvarado"
              className="relative w-64 h-64 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Section divider with accent */}
      <div className="mt-20 flex items-center gap-4">
        <div className="h-px flex-1 bg-black/10" />
        <div className="w-2 h-2 rounded-full bg-indigo-500" />
        <div className="h-px flex-1 bg-black/10" />
      </div>
    </section>
  );
}
