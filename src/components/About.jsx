import { useReveal } from '../hooks/useReveal'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Built' },
  { value: '10+', label: 'Devs Trained' },
  { value: '100%', label: 'Commitment' },
]

export default function About() {
  const [ref] = useReveal()

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left — identity block */}
          <div className="flex-1 reveal">
            <span className="section-tag">Who I Am</span>
            <h2 className="section-title text-4xl sm:text-5xl mt-4 mb-8 leading-tight">
              Building Africa's<br />
              <span className="gradient-text">Next Tech Layer</span>
            </h2>

            <div className="space-y-4 text-slate-400 font-body text-base leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Mayowa Binuyo</span> — a fullstack developer
                based in Lagos. I got into tech because I liked breaking things and figuring out why they broke.
                That curiosity turned into a career.
              </p>
              <p>
                My main home is the backend —{' '}
                <span className="text-white font-medium">C# and ASP.NET Core</span> is where I'm most
                comfortable. I think in APIs, schemas, and auth flows. On the frontend I work with{' '}
                <span className="text-white font-medium">React and Tailwind</span> well enough to ship
                complete products without needing a handoff.
              </p>
              <p>
                I care about code that actually works in the real world — not just in development.
                Clean architecture, proper error handling, security that doesn't cut corners.
                The kind of things that make a difference when users show up.
              </p>
              <p>
                When I'm not coding, I'm on a football pitch or thinking about what to build next.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="/file/Mayowa_Binuyo_CV.pdf" download className="btn-primary text-sm">
                <i className="fas fa-download mr-2"></i> Download CV
              </a>
              <a href="#contact" className="btn-outline text-sm">Contact Me</a>
            </div>
          </div>

          {/* Right — stats */}
          <div className="flex-1 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="card text-center py-8">
                  <div className="font-display font-bold text-4xl gradient-text mb-2">{value}</div>
                  <div className="font-body text-sm text-slate-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Currently */}
            <div className="mt-4 card flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center">
                <span className="glow-dot"></span>
              </div>
              <div>
                <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-1">Based In</p>
                <p className="font-body text-sm text-white">Lagos, Nigeria — Open to new opportunities</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
