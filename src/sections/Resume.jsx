import { useState } from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];
const vp = { once: false, margin: '-80px' };

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="border-t border-[#0f0f0f]/10 px-6 pt-24 pb-24">
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
            04
          </span>
          <h2 className="relative text-4xl font-display font-bold tracking-tighter">Resume</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, delay: 0.15, ease }}
        >
          <div className="flex items-center gap-6">
            <a
              href="/resume.pdf"
              download
              className="inline-block underline underline-offset-4 hover:text-[#c17f24] transition-colors"
            >
              Download Resume
            </a>
            <button
              onClick={() => setShowPreview(p => !p)}
              className="border border-[#0f0f0f] px-4 py-1.5 text-sm hover:bg-[#0f0f0f] hover:text-[#f5f2eb] transition-colors"
            >
              {showPreview ? 'Hide Preview' : 'Preview Resume'}
            </button>
          </div>

          {showPreview && (
            <div className="mt-8 w-full">
              <iframe
                src="/resume.pdf"
                className="w-full border border-[#0f0f0f]/10"
                style={{ height: '80vh' }}
                title="Resume"
              >
                <p>
                  PDF preview unavailable.{' '}
                  <a href="/resume.pdf" download className="underline underline-offset-4">
                    Download resume
                  </a>
                  .
                </p>
              </iframe>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
