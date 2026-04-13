import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    title: 'Indoorplants',
    emoji: '🌱',
    desc: 'A responsive frontend web application for discovering and exploring indoor plants. Features clean UI design, structured content layout, and mobile-first responsiveness.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    live: 'https://tailwindcss-plant-practice.netlify.app/',
    github: 'https://github.com/Impeccablemayor/Indoorplants',
    type: 'Frontend',
    color: 'from-green-500/20 to-teal-500/20',
    border: 'border-green-500/20',
  },
  {
    title: 'Gigi Marketplace',
    emoji: '🛒',
    desc: 'A web-based platform built to empower local artisans in Ilorin by connecting them with potential customers online. React-powered marketplace with modern UI.',
    tags: ['React', 'JavaScript'],
    live: 'https://marketplace-46fcavd1c-impeccablemayors-projects.vercel.app/',
    github: 'https://github.com/Impeccablemayor/market',
    type: 'Frontend',
    color: 'from-blue-500/20 to-purple-500/20',
    border: 'border-blue-500/20',
  },
  {
    title: 'Academic Resource Hub',
    emoji: '📚',
    desc: 'Backend of a collaborative academic resource-sharing platform. Designed secure RESTful APIs, authentication system with school email validation, and Cloudinary media integration.',
    tags: ['ASP.NET Core', 'PostgreSQL', 'Cloudinary', 'Auth0', 'C#'],
    live: null,
    github: 'https://github.com/Impeccablemayor/ResourceSharingBackend',
    type: 'Backend',
    color: 'from-electric/20 to-accent/20',
    border: 'border-electric/20',
  },
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="section-tag">My Work</span>
          <h2 className="section-title text-4xl sm:text-5xl mt-4">Projects</h2>
          <p className="font-body text-slate-500 mt-4 max-w-md mx-auto">
            Real things I've built — deployed, working, and open source.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col bg-navy-card border ${p.border} rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top gradient */}
              <div className={`h-2 w-full bg-gradient-to-r ${p.color}`} />

              {/* Header */}
              <div className={`h-40 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl">{p.emoji}</span>
                <div className="absolute top-3 right-3">
                  <span className="font-mono text-xs bg-navy/50 border border-white/10 text-slate-400 px-2 py-1 rounded-full">
                    {p.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <h3 className="font-display font-bold text-white text-xl mb-3">{p.title}</h3>
                <p className="font-body text-sm text-slate-500 leading-relaxed mb-5">{p.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="font-mono text-xs bg-white/5 border border-white/10 text-slate-400 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="p-4 border-t border-white/5 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-xl text-sm font-body transition-all duration-200"
                >
                  <i className="fab fa-github"></i> Code
                </a>
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-electric/10 hover:bg-electric/20 text-electric rounded-xl text-sm font-body transition-all duration-200 border border-electric/20"
                  >
                    <i className="fas fa-arrow-up-right-from-square text-xs"></i> Live
                  </a>
                ) : (
                  <div className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-white/3 text-slate-600 rounded-xl text-sm font-body cursor-not-allowed">
                    <i className="fas fa-lock text-xs"></i> Private
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/Impeccablemayor"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <i className="fab fa-github"></i> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
