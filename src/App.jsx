import Layout from './components/Layout';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

export default function App() {
  return (
    <Layout>
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </Layout>
  );
}
