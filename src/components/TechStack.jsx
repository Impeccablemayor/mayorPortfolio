import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const stack = [
  { name: 'C#', icon: '🔷', category: 'Backend' },
  { name: '.NET / ASP.NET', icon: '🟣', category: 'Backend' },
  { name: 'Entity Framework', icon: '🗃️', category: 'Backend' },
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'JavaScript', icon: '🟨', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
  { name: 'HTML5 / CSS3', icon: '🌐', category: 'Frontend' },
  { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
  { name: 'SQL Server', icon: '🗄️', category: 'Database' },
  { name: 'Auth0', icon: '🔐', category: 'Tools' },
  { name: 'Cloudinary', icon: '☁️', category: 'Tools' },
  { name: 'Git / GitHub', icon: '🐙', category: 'Tools' },
  { name: 'WordPress / CMS', icon: '📝', category: 'Tools' },
  { name: 'REST APIs', icon: '🔌', category: 'Backend' },
  { name: 'Postman', icon: '📮', category: 'Tools' },
]

const categories = ['All', 'Backend', 'Frontend', 'Database', 'Tools']

export default function TechStack() {
  const [ref, revealAll] = useReveal()
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? stack : stack.filter((s) => s.category === active)

  useEffect(() => {
    revealAll()
  }, [active, revealAll])

  return (
    <section id="tech" className="py-28 bg-navy-soft relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <span className="section-tag">Tools & Languages</span>
          <h2 className="section-title text-4xl sm:text-5xl mt-4">Tech Stack</h2>
          <p className="font-body text-slate-500 mt-4 max-w-md mx-auto">
            The tools I use to build clean, scalable, and efficient software.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                active === cat
                  ? 'bg-electric border-electric text-white'
                  : 'border-white/10 text-slate-500 hover:border-electric/40 hover:text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map((tech, i) => (
            <div
              key={tech.name}
              className="card flex flex-col items-center gap-3 py-6 text-center group cursor-default reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
              <span className="font-body text-sm text-slate-300 group-hover:text-white transition-colors">{tech.name}</span>
              <span className="font-mono text-xs text-slate-600">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
