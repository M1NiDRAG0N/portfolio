import { useLang } from '../context/LanguageContext'
import type { SectionId } from '../hooks/useActiveSection'

interface MobileNavProps {
  activeSection: SectionId
}

const NAV_ITEMS = [
  { id: 'home'    as SectionId, href: '#home',    icon: 'home',          labelKo: '홈',    labelEn: 'Home',    labelJa: 'ホーム'    },
  { id: 'about'   as SectionId, href: '#about',   icon: 'person',        labelKo: '소개',  labelEn: 'About',   labelJa: '自己紹介'  },
  { id: 'work'    as SectionId, href: '#work',    icon: 'rocket_launch', labelKo: '작업물', labelEn: 'Work',   labelJa: '実績'      },
  { id: 'contact' as SectionId, href: '#contact', icon: 'mail',          labelKo: '연락',  labelEn: 'Contact', labelJa: 'お問合せ'  },
]

export default function MobileNav({ activeSection }: MobileNavProps) {
  const { lang } = useLang()

  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl border border-white/5 bg-[#060e20]/60 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex justify-around items-center px-4 py-2 z-50">
      {NAV_ITEMS.map(({ id, href, icon, labelKo, labelEn }) => (
        <a
          key={id}
          href={href}
          className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all active:scale-90 ${
            activeSection === id
              ? 'bg-cyan-400/10 text-cyan-400'
              : 'text-slate-400 opacity-50'
          }`}
        >
          <span className="material-symbols-outlined">{icon}</span>
          <span className="font-body text-[10px] font-bold">
            {lang === 'ko' ? labelKo : lang === 'ja' ? labelJa : labelEn}
          </span>
        </a>
      ))}
    </nav>
  )
}
