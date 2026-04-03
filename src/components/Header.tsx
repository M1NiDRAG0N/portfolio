import { useLang } from '../context/LanguageContext'
import type { SectionId } from '../hooks/useActiveSection'

interface HeaderProps {
  activeSection: SectionId
}

const NAV_ITEMS: { label: keyof ReturnType<typeof useLang>['t']['nav']; href: string }[] = [
  { label: 'portfolio', href: '#home'    },
  { label: 'about',     href: '#about'   },
  { label: 'stacks',    href: '#tech'    },
  { label: 'history',   href: '#work'    },
]

export default function Header({ activeSection }: HeaderProps) {
  const { lang, t, toggle } = useLang()

  const isActive = (href: string) => {
    const section = href.replace('#', '') as SectionId
    return activeSection === section
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-[#060e20]/80 backdrop-blur-xl flex justify-between items-center px-8 py-4">
      <div className="text-xl font-bold tracking-tighter text-cyan-400 font-headline">
        MINIDRAGON
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`font-headline tracking-tight transition-colors ${
                isActive(href)
                  ? 'text-cyan-400 font-bold border-b-2 border-cyan-400'
                  : 'text-slate-400 font-medium hover:text-cyan-300'
              }`}
            >
              {t.nav[label]}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="glass-panel rounded-full px-3 py-1 flex items-center gap-2 border border-outline-variant/15 cursor-pointer hover:border-primary/30 transition-colors"
            aria-label="Toggle language"
          >
            <span className={`text-[10px] font-bold font-label transition-colors ${lang === 'ko' ? 'text-primary' : 'text-on-surface-variant'}`}>
              KR
            </span>
            <span className={`text-[10px] font-medium font-label transition-colors ${lang === 'en' ? 'text-primary' : 'text-on-surface-variant'}`}>
              EN
            </span>
          </button>
          <a
            href="#contact"
            className="hidden md:block bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-5 py-2 rounded-md font-bold text-sm active:scale-95 transition-transform duration-200"
          >
            {t.nav.hireMe}
          </a>
        </div>
      </div>
    </header>
  )
}
