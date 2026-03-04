export default function ProjectCard({ title, description, tags, githubUrl, liveUrl }) {
  return (
    <article className="border border-black flex flex-col gap-4 p-6">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-black/70 flex-1">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="font-mono text-xs px-2 py-1 border border-black/30 tracking-wide"
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
          className="underline underline-offset-4 tracking-wide hover:text-black/60"
        >
          GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 tracking-wide hover:text-black/60"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
