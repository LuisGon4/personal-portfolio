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
    <section id="skills" className="px-6 py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-12 flex items-center gap-3">
          <span className="w-2 h-8 bg-indigo-500 inline-block" />
          Technologies
        </h2>

        {categories.map(({ label, skills }) => (
          <div key={label}>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-black/40 mb-3">
              {label}
            </h3>
            <ul className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="font-mono text-xs px-2 py-1 border border-black/30 tracking-wide hover:border-indigo-400 hover:text-indigo-600 transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
