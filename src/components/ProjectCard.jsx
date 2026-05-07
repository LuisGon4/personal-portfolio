export default function ProjectCard({ title, description, tags, githubUrl, liveUrl }) {
  return (
    <article className="border border-[#0f0f0f]/15 flex flex-col gap-4 p-6 hover:-translate-y-0.5 transition-transform duration-200">
      <h3 className="text-xl font-display font-semibold tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-[#0f0f0f]/65 flex-1">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-xs px-2 py-1 border border-[#0f0f0f]/20 tracking-wide hover:border-[#c17f24] hover:text-[#c17f24] transition-colors"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="flex gap-4 text-sm">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 tracking-wide hover:text-[#c17f24] transition-colors"
        >
          GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 tracking-wide hover:text-[#c17f24] transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
