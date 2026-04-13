export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-lg">
          <span className="gradient-text">Mayor</span><span className="text-white">.</span>
        </span>
        <p className="font-body text-xs text-slate-600">
          © {new Date().getFullYear()} Binuyo Mayowa. Built with React + Vite + Tailwind CSS.
        </p>
        <a href="#" className="font-mono text-xs text-slate-600 hover:text-electric transition-colors flex items-center gap-1">
          Back to top <i className="fas fa-arrow-up text-xs"></i>
        </a>
      </div>
    </footer>
  )
}
