import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { useInView } from '../hooks/useInView'

interface FormState {
  name: string
  email: string
  details: string
}

type SubmitStatus = 'idle' | 'sending' | 'success'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState<FormState>({ name: '', email: '', details: '' })
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const { ref, inView } = useInView(0.1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: 실제 전송 연동 (EmailJS, Formspree 등)
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('success')
    setForm({ name: '', email: '', details: '' })
  }

  return (
    <section className="px-6 md:px-24 mb-16" id="contact">
      <div
        ref={ref}
        className={`bg-surface-container p-8 md:p-14 rounded-[2rem] relative overflow-hidden ${inView ? 'fade-up-done' : 'fade-up-init'}`}
      >
        {/* Background glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 blur-[100px] -mr-40 -mt-40 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/4 blur-[80px] -ml-20 -mb-20 rounded-full pointer-events-none" />

        <div className="relative max-w-xl">
          <h3 className="font-headline text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h3>
          <p className="text-on-surface-variant text-sm mb-10">{t.contact.subtitle}</p>

          {status === 'success' ? (
            <div className="flex flex-col items-start gap-3 py-8 fade-up-done">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-1">
                <span className="material-symbols-outlined text-secondary text-2xl">check_circle</span>
              </div>
              <p className="font-headline text-xl font-bold">{t.contact.success}</p>
              <p className="text-on-surface-variant text-sm">{t.contact.successSub}</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                {t.contact.send}
              </button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                    {t.contact.name}
                  </label>
                  <input
                    name="name" value={form.name} onChange={handleChange} required
                    className="w-full bg-surface-bright/40 border border-outline-variant/25 rounded-lg px-4 py-2.5 text-sm focus:border-primary/50 focus:outline-none transition-colors text-on-surface placeholder:text-on-surface-variant/30"
                    placeholder={t.contact.namePlaceholder}
                    type="text"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                    {t.contact.email}
                  </label>
                  <input
                    name="email" value={form.email} onChange={handleChange} required
                    className="w-full bg-surface-bright/40 border border-outline-variant/25 rounded-lg px-4 py-2.5 text-sm focus:border-primary/50 focus:outline-none transition-colors text-on-surface placeholder:text-on-surface-variant/30"
                    placeholder={t.contact.emailPlaceholder}
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                  {t.contact.details}
                </label>
                <textarea
                  name="details" value={form.details} onChange={handleChange} required
                  className="w-full bg-surface-bright/40 border border-outline-variant/25 rounded-lg px-4 py-2.5 text-sm focus:border-primary/50 focus:outline-none transition-colors text-on-surface placeholder:text-on-surface-variant/30"
                  placeholder={t.contact.detailsPlaceholder}
                  rows={4}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-10 py-3 rounded-md font-bold text-sm transition-all active:scale-95 hover:shadow-[0_0_24px_rgba(161,250,255,0.2)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {status === 'sending' && (
                  <span className="material-symbols-outlined animate-spin text-[16px]">progress_activity</span>
                )}
                {status === 'sending' ? t.contact.sending : t.contact.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
