import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { useInView } from '../hooks/useInView'

// 경력 타임라인 — 추가/수정 가능
const timeline = [
  {
    period: '2020.03 – 2022.06',
    company: '모빌라이즈파이낸셜서비스',
    companyEn: 'Mobilize Financial Services',
    companyJa: 'モビライズファイナンシャルサービス',
    role: 'Full Stack Developer',
    desc: 'RCI eSign & UV-eSign — 자동차 전자 할부 계약 e-Commerce 시스템 개발',
    descEn: 'RCI eSign & UV-eSign — Automotive electronic installment contract e-Commerce system',
    descJa: 'RCI eSign & UV-eSign — 自動車電子割賦契約e-Commerceシステム開発',
    tags: ['Spring Boot', 'Oracle', 'AngularJS'],
  },
  {
    period: '2020.09 – 2021.12',
    company: 'And U',
    companyEn: 'And U',
    companyJa: 'And U',
    role: 'Full Stack Developer',
    desc: 'SaaS 형식 ERP 서비스 개발',
    descEn: 'SaaS-based ERP service development',
    descJa: 'SaaS形式ERPサービス開発',
    tags: ['Java', 'MySQL', 'Vue'],
  },
  // TODO: 경력 추가
]

export default function About() {
  const { lang, t } = useLang()
  const [imgError, setImgError] = useState(false)

  const { ref: leftRef,  inView: leftIn  } = useInView(0.15)
  const { ref: rightRef, inView: rightIn } = useInView(0.1)

  return (
    <section className="px-6 md:px-24 mb-24" id="about">
      {/* Section heading */}
      <div className={`mb-12 ${leftIn ? 'fade-up-done' : 'fade-up-init'}`} ref={leftRef}>
        <h3 className="font-headline text-2xl font-bold mb-3">{t.about.title}</h3>
        <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* ── Left: Photo card ─────────────────────────── */}
        <div
          className={`w-full lg:w-80 flex-shrink-0 slide-left-${leftIn ? 'done' : 'init'}`}
          style={{ transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
        >
          {/* Photo */}
          <div className="relative mb-5 group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 blur-xl scale-95 group-hover:scale-100 transition-transform duration-500" />
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container">
              {!imgError ? (
                <img
                  // public/profile.jpg 에 사진 파일을 넣어주세요
                  src="/portfolio/profile.jpg"
                  alt={t.about.photoAlt}
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                // 사진 없을 때 플레이스홀더
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-surface-container-high">
                  <span className="material-symbols-outlined text-outline text-6xl">person</span>
                  <p className="font-label text-[10px] text-outline uppercase tracking-widest">
                    profile.jpg
                  </p>
                </div>
              )}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Name badge overlaid on photo bottom */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-headline font-bold text-lg text-on-surface">{t.about.name}</p>
              <p className="font-label text-[11px] text-primary uppercase tracking-widest">{t.about.role}</p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: '3+', label: lang === 'ko' ? '년 경력' : lang === 'ja' ? '年の経験' : 'Yrs Exp' },
              { value: '2+', label: lang === 'ko' ? '프로젝트' : lang === 'ja' ? 'プロジェクト' : 'Projects' },
              { value: 'BE', label: lang === 'ko' ? '백엔드' : lang === 'ja' ? 'バックエンド' : 'Backend' },
              { value: 'FE', label: lang === 'ko' ? '프론트' : lang === 'ja' ? 'フロント' : 'Frontend' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-3 text-center"
              >
                <p className="font-headline font-bold text-primary text-lg leading-none mb-0.5">{value}</p>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Bio + Timeline ─────────────────────── */}
        <div
          ref={rightRef}
          className={`flex-1 min-w-0 slide-right-${rightIn ? 'done' : 'init'}`}
          style={{ transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s' }}
        >
          {/* Bio */}
          <p className="text-on-surface-variant text-sm leading-relaxed mb-10">
            {t.about.bio}
          </p>

          {/* Timeline */}
          <p className="font-label text-[10px] uppercase tracking-[0.25em] text-secondary mb-6">
            {t.about.experienceLabel}
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-primary/40 via-outline-variant/30 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  {/* Dot */}
                  <div className="flex-shrink-0 mt-1">
                    <span className="block w-3.5 h-3.5 rounded-full border-2 border-primary bg-background group-hover:bg-primary/20 transition-colors shadow-[0_0_6px_rgba(161,250,255,0.4)]" />
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <p className="font-label text-[10px] text-on-surface-variant/50 uppercase tracking-widest mb-1">
                      {item.period}
                    </p>
                    <p className="font-headline font-bold text-base text-on-surface leading-tight">
                      {lang === 'ko' ? item.company : lang === 'ja' ? item.companyJa : item.companyEn}
                    </p>
                    <p className="font-label text-[11px] text-primary mb-2">{item.role}</p>
                    <p className="text-on-surface-variant text-xs leading-relaxed mb-3">
                      {lang === 'ko' ? item.desc : lang === 'ja' ? item.descJa : item.descEn}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[10px] rounded-full font-label border border-outline-variant/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
