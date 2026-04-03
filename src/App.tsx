import { LanguageProvider } from './context/LanguageContext'
import { useActiveSection } from './hooks/useActiveSection'
import type { SectionId } from './hooks/useActiveSection'
import { useScrollProgress } from './hooks/useScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TechStacks from './components/TechStacks'
import SelectedWorks from './components/SelectedWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'

// Sections in scroll order — positions on the rail (0–100%)
const SECTION_DOTS: { id: SectionId; pos: number }[] = [
  { id: 'home',    pos: 0   },
  { id: 'about',   pos: 25  },
  { id: 'tech',    pos: 50  },
  { id: 'work',    pos: 75  },
  { id: 'contact', pos: 100 },
]

const SECTION_ORDER: SectionId[] = ['home', 'about', 'tech', 'work', 'contact']

function Layout() {
  const activeSection = useActiveSection()
  const scrollProgress = useScrollProgress()

  const activeIdx = SECTION_ORDER.indexOf(activeSection)

  return (
    <div className="selection:bg-primary selection:text-on-primary-container">
      <Header activeSection={activeSection} />
      <main className="relative pb-32">
        {/* Scroll progress rail (desktop) */}
        <div className="fixed left-4 top-1/2 -translate-y-1/2 w-[2px] h-40 hidden lg:block pointer-events-none z-30">
          {/* Track */}
          <div className="absolute inset-0 bg-outline-variant/20 rounded-full" />
          {/* Fill */}
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-secondary to-primary rounded-full shadow-[0_0_8px_rgba(161,250,255,0.4)] transition-all duration-200"
            style={{ height: `${scrollProgress * 100}%` }}
          />
          {/* Section dots */}
          {SECTION_DOTS.map(({ id, pos }, i) => {
            const isPast = i <= activeIdx
            return (
              <a
                key={id}
                href={`#${id}`}
                className="absolute left-1/2 -translate-x-1/2 pointer-events-auto"
                style={{ top: `${pos}%` }}
              >
                <span
                  className={`block rounded-full border transition-all duration-300 ${
                    isPast
                      ? 'w-2.5 h-2.5 -translate-y-[1px] bg-primary border-primary shadow-[0_0_6px_rgba(161,250,255,0.8)]'
                      : 'w-1.5 h-1.5 bg-outline-variant/50 border-outline-variant/50'
                  }`}
                />
              </a>
            )
          })}
        </div>
        <Hero />
        <About />
        <TechStacks />
        <SelectedWorks />
        <Contact />
      </main>
      <MobileNav activeSection={activeSection} />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  )
}

export default App
