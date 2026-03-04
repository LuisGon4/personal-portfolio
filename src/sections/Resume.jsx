export default function Resume() {
  return (
    <section id="resume" className="px-6 py-24 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold tracking-tighter mb-12">Resume</h2>

      <a
        href="/resume.pdf"
        download
        className="inline-block underline underline-offset-4 hover:text-black/60 transition-colors"
      >
        Download Resume
      </a>

      <div className="mt-8 w-full">
        <iframe
          src="/resume.pdf"
          className="w-full border border-black/10"
          style={{ height: "80vh" }}
          title="Resume"
        >
          <p>
            PDF preview unavailable.{" "}
            <a href="/resume.pdf" download className="underline underline-offset-4">
              Download resume
            </a>
            .
          </p>
        </iframe>
      </div>
    </section>
  );
}
