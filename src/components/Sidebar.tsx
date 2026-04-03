import type { SectionId } from '../hooks/useActiveSection'

interface SidebarProps {
  activeSection: SectionId
}

const NAV_ITEMS = [
  { id: 'home'    as SectionId, href: '#home',    icon: 'grid_view' },
  { id: 'tech'    as SectionId, href: '#tech',    icon: 'terminal'  },
  { id: 'work'    as SectionId, href: '#work',    icon: 'code'      },
  { id: 'contact' as SectionId, href: '#contact', icon: 'mail'      },
]

export default function Sidebar({ activeSection }: SidebarProps) {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-full w-20 border-r border-slate-800/15 flex-col items-center py-10 space-y-8 bg-[#060e20] shadow-2xl shadow-black/50 z-40">
      <div className="mb-12 font-headline text-xs font-bold uppercase tracking-widest rotate-180 [writing-mode:vertical-lr] text-slate-500 opacity-60">
        PORTFOLIO <span className="text-cyan-400">V1.0</span>
      </div>
      {NAV_ITEMS.map(({ id, href, icon }) => (
        <a
          key={id}
          href={href}
          className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
            activeSection === id
              ? 'text-cyan-400 border-r-2 border-cyan-400 bg-cyan-400/5'
              : 'text-slate-500 opacity-60 hover:bg-slate-800/40 hover:opacity-100'
          }`}
        >
          <span className="material-symbols-outlined">{icon}</span>
        </a>
      ))}
    </aside>
  )
}
