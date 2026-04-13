import { useState, useEffect } from 'react'

const links = ['About', 'Services', 'Projects', 'Tech', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-navy/90 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-xl text-white">
          <span className="gradient-text">Mayor</span>
          <span className="text-white">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/2347050835448"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 btn-primary text-sm py-2 px-5"
        >
          <i className="fab fa-whatsapp"></i> Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-xl p-2"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-card border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-body text-slate-300 hover:text-white text-lg"
            >
              {link}
            </a>
          ))}
          <a
            href="https://wa.me/2347050835448"
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-center text-sm mt-2"
          >
            <i className="fab fa-whatsapp mr-2"></i> Let's Talk
          </a>
        </div>
      )}
    </header>
  )
}
