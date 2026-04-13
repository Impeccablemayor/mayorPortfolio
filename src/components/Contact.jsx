import { useReveal } from '../hooks/useReveal'
import { useState } from 'react'

const socials = [
  { icon: 'fa-github', label: 'GitHub', href: 'https://github.com/Impeccablemayor', color: 'hover:text-white' },
  { icon: 'fa-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mayowa-binuyo-63815521b', color: 'hover:text-blue-400' },
  { icon: 'fa-twitter', label: 'Twitter / X', href: 'https://x.com/buildwithmayor', color: 'hover:text-sky-400' },
  { icon: 'fa-instagram', label: 'Instagram', href: 'https://www.instagram.com/buildwithmayor', color: 'hover:text-pink-400' },
  { icon: 'fa-whatsapp', label: 'WhatsApp', href: 'https://wa.me/2347050835448', color: 'hover:text-green-400' },
]

export default function Contact() {
  const [ref] = useReveal()
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    setIsLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/xovgwndd', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSent(true)
        form.reset()
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title text-4xl sm:text-5xl mt-4">Contact Me</h2>
          <p className="font-body text-slate-500 mt-4 max-w-md mx-auto">
            Open to new roles, freelance projects, and interesting collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form */}
          <div className="lg:col-span-3 reveal">
            {sent ? (
              <div className="card flex flex-col items-center justify-center py-16 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display font-bold text-white text-2xl mb-2">Message Sent!</h3>
                <p className="font-body text-slate-500">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5">
                <input type="hidden" name="_subject" value="New message from portfolio!" />

                <div>
                  <label className="font-mono text-xs text-slate-500 uppercase tracking-widest block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Binuyo Mayowa"
                    className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-slate-600 focus:outline-none focus:border-electric transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-slate-500 uppercase tracking-widest block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-slate-600 focus:outline-none focus:border-electric transition-colors"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-slate-500 uppercase tracking-widest block mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-slate-600 focus:outline-none focus:border-electric transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      Sending... <i className="fas fa-spinner fa-spin ml-2 text-sm"></i>
                    </>
                  ) : (
                    <>Send Message <i className="fas fa-paper-plane ml-2 text-sm"></i></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right side */}
          <div className="lg:col-span-2 flex flex-col gap-5 reveal" style={{ transitionDelay: '0.15s' }}>

            {/* Direct contact */}
            <div className="card">
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">Direct Email</p>
              <a
                href="mailto:binuyomayor16@gmail.com"
                className="font-body text-electric hover:underline text-sm break-all"
              >
                binuyomayor16@gmail.com
              </a>
            </div>

            <div className="card">
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-3">WhatsApp</p>
              <a
                href="https://wa.me/2347050835448"
                target="_blank"
                rel="noreferrer"
                className="font-body text-green-400 hover:underline text-sm"
              >
                +234 705 083 5448
              </a>
            </div>

            {/* Socials */}
            <div className="card">
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">Find Me Online</p>
              <div className="flex flex-col gap-3">
                {socials.map(({ icon, label, href, color }) => (
                  <a
                    key={icon}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-3 text-slate-500 ${color} transition-colors group`}
                  >
                    <i className={`fab ${icon} text-lg w-5 text-center`}></i>
                    <span className="font-body text-sm group-hover:translate-x-1 transition-transform">{label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
