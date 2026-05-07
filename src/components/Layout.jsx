import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="pt-14">{children}</main>
      <footer className="border-t border-[#0f0f0f]/20 mt-24 py-8 text-center text-xs tracking-widest uppercase text-[#0f0f0f]/40">
        © {new Date().getFullYear()} Luis
      </footer>
    </>
  );
}
