import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: 'fa-server',
    title: 'Backend Development',
    desc: 'Scalable, high-performance backend systems using C# and ASP.NET Core. Clean architecture, SOLID principles, maintainable code.',
    color: 'text-electric',
    bg: 'bg-electric/10',
  },
  {
    icon: 'fa-layer-group',
    title: 'Fullstack Web Apps',
    desc: 'End-to-end web applications from frontend UI with React & Tailwind CSS to backend APIs — fully integrated and production-ready.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: 'fa-plug',
    title: 'API Integration',
    desc: 'RESTful API design and third-party integrations — payment gateways, Cloudinary, Auth0, and more.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Auth & Security',
    desc: 'Secure login systems with JWT, hashed passwords, role-based access control, and identity management.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
  },
  {
    icon: 'fa-database',
    title: 'Database Management',
    desc: 'Schema design, query optimization, and migrations using EF Core, PostgreSQL, and SQL Server.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    icon: 'fa-rocket',
    title: 'Cloud Deployment',
    desc: 'Application deployment to Azure, Railway, Render, and Netlify with environment setup and CI/CD pipelines.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
  },
]

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" className="py-28 bg-navy-soft relative" ref={ref}>
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title text-4xl sm:text-5xl mt-4">
            Services
          </h2>
          <p className="font-body text-slate-500 mt-4 max-w-md mx-auto">
            From backend architecture to full product deployment — here's how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card group reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fas ${s.icon} ${s.color} text-lg`}></i>
              </div>
              <h3 className={`font-display font-bold text-lg text-white mb-3`}>{s.title}</h3>
              <p className="font-body text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
