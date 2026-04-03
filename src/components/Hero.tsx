import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      className="hero-dot-grid relative min-h-screen flex flex-col justify-center px-6 md:px-24 mb-8 overflow-hidden"
      id="home"
    >
      {/* Ambient glow blobs */}
      <div className="animate-glow pointer-events-none absolute -top-10 -left-10 w-96 h-96 bg-primary/8 blur-[120px] rounded-full" />
      <div className="animate-glow pointer-events-none absolute bottom-20 right-0 w-72 h-72 bg-secondary/6 blur-[100px] rounded-full" style={{ animationDelay: '2.5s' }} />

      <div className="relative z-10">
        <h2 className="animate-hero-role font-headline text-primary text-xs uppercase tracking-[0.25em] mb-5 opacity-80">
          {t.hero.role}
        </h2>
        <h1 className="animate-hero-title font-headline text-5xl md:text-7xl font-bold leading-[1.05] tracking-tighter mb-6 max-w-3xl">
          {t.hero.title1}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
            {t.hero.title2}
          </span>
        </h1>
        <p className="animate-hero-subtitle font-body text-on-surface-variant text-base md:text-lg max-w-xl mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="animate-hero-cta flex flex-col sm:flex-row gap-3">
          <a
            href="#work"
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-7 py-3 rounded-md font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_24px_rgba(161,250,255,0.25)] transition-all active:scale-95"
          >
            {t.hero.cta}
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
          <a
            href="#work"
            className="px-7 py-3 rounded-md font-bold text-sm text-primary border border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all flex items-center justify-center gap-2"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-hero-cta">
        <span className="font-label text-[9px] uppercase tracking-[0.2em]">scroll</span>
        <span className="material-symbols-outlined text-[16px]">keyboard_arrow_down</span>
      </div>
    </section>
  )
}
