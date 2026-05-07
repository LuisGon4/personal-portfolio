import { motion } from 'framer-motion';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const ease = [0.22, 1, 0.36, 1];
const vp = { once: false, margin: '-80px' };

export default function Projects() {
  return (
    <section id="projects" className="border-t border-[#0f0f0f]/10 px-6 pt-24 pb-24">
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
            03
          </span>
          <h2 className="relative text-4xl font-display font-bold tracking-tighter flex items-center gap-3">
            <span className="w-2 h-8 bg-[#c17f24] inline-block" />
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: i * 0.09, ease }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
