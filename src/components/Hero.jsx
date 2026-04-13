import mayorPhoto from '../assets/mayor.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl animate-pulse2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse2 pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-electric/10 border border-electric/20 rounded-full px-4 py-2 mb-8">
              <span className="glow-dot"></span>
              <span className="font-mono text-xs text-electric">Available for work — Lagos, Nigeria</span>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-none mb-6 text-white">
              BINUYO<br />
              <span className="gradient-text">MAYOWA</span>
            </h1>

            <p className="font-mono text-accent text-sm tracking-widest uppercase mb-6">
              Fullstack Web Developer
            </p>

            <p className="font-body text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              I build scalable, secure web applications using{' '}
              <span className="text-white font-medium">.NET & C#</span> on the backend and{' '}
              <span className="text-white font-medium">React & Tailwind</span> on the frontend.
              Solving real problems with clean code.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
              <a
                href="https://wa.me/2347050835448"
                target="_blank"
                rel="noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <i className="fab fa-whatsapp text-green-400"></i> WhatsApp
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6">
              <span className="font-mono text-xs text-slate-600 uppercase tracking-widest">Find me on</span>
              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                {[
                  { icon: 'fa-github', href: 'https://github.com/Impeccablemayor', hover: 'hover:text-white' },
                  { icon: 'fa-linkedin', href: 'https://www.linkedin.com/in/mayowa-binuyo-63815521b', hover: 'hover:text-blue-400' },
                  { icon: 'fa-instagram', href: 'https://www.instagram.com/buildwithmayor', hover: 'hover:text-pink-400' },
                  { icon: 'fa-twitter', href: 'https://x.com/buildwithmayor', hover: 'hover:text-sky-400' },
                  { icon: 'fa-facebook', href: 'https://www.facebook.com/share/1B6zNLL43t/', hover: 'hover:text-blue-500' },
                ].map(({ icon, href, hover }) => (
                  <a key={icon} href={href} target="_blank" rel="noreferrer"
                    className={`text-slate-500 ${hover} text-xl transition-all duration-200 hover:-translate-y-1`}>
                    <i className={`fab ${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0 animate-float mt-10 lg:mt-0">
            <div className="relative mx-auto lg:mx-0">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric via-accent to-purple-500 p-1 blur-sm opacity-70" />
              <div className="relative p-1 bg-gradient-to-br from-electric via-accent to-purple-500 rounded-full">
                <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-navy-card border-4 border-navy flex items-center justify-center overflow-hidden">
                  <img src={mayorPhoto} alt="Mayowa Binuyo" className="w-full h-full rounded-full object-cover object-top" />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-navy-card border border-electric/30 rounded-xl px-3 py-2 shadow-lg">
                <span className="font-mono text-xs text-electric">C# / .NET</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-navy-card border border-accent/30 rounded-xl px-3 py-2 shadow-lg">
                <span className="font-mono text-xs text-accent">React Dev</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
