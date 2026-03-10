import { useState } from 'react';

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="px-6 py-24 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold tracking-tighter mb-12">Resume</h2>

      <div className="flex items-center gap-6">
        <a
          href="/resume.pdf"
          download
          className="inline-block underline underline-offset-4 hover:text-black/60 transition-colors"
        >
          Download Resume
        </a>
        <button
          onClick={() => setShowPreview(p => !p)}
          className="border border-black px-4 py-1.5 text-sm hover:bg-black hover:text-white transition-colors"
        >
          {showPreview ? 'Hide Preview' : 'Preview Resume'}
        </button>
      </div>

      {showPreview && (
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
      )}
    </section>
  );
}
