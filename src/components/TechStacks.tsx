import { useLang } from '../context/LanguageContext'
import { useInView } from '../hooks/useInView'

const stacks = [
  {
    icon: 'terminal',
    title: 'Backend',
    subtitle: 'Spring Boot, Java, NestJS',
    tags: ['PYTHON', 'MYBATIS'],
  },
  {
    icon: 'code',
    title: 'Frontend',
    subtitle: 'React, Vue, TypeScript',
    tags: ['HTML/CSS', 'JQUERY'],
  },
  {
    icon: 'database',
    title: 'Database',
    subtitle: 'MySQL, Oracle, Redis',
    tags: ['RDBMS', 'IN-MEMORY'],
  },
  {
    icon: 'memory',
    title: 'Infrastructure',
    subtitle: 'Linux, Docker, GitHub',
    tags: ['CI/CD', 'NGINX'],
  },
]

export default function TechStacks() {
  const { t } = useLang()
  const { ref: headingRef, inView: headingIn } = useInView()
  const { ref: gridRef,    inView: gridIn    } = useInView(0.1)

  return (
    <section
      className="px-6 md:px-24 mb-24 bg-surface-container-low py-16 rounded-[2rem] mx-2 md:mx-8"
      id="tech"
    >
      <div
        ref={headingRef}
        className={`flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 ${headingIn ? 'fade-up-done' : 'fade-up-init'}`}
      >
        <div>
          <h3 className="font-headline text-2xl font-bold mb-1">{t.techStacks.title}</h3>
          <p className="text-on-surface-variant text-sm">{t.techStacks.subtitle}</p>
        </div>
        <div className="h-[1px] flex-grow bg-outline-variant/20 mx-8 hidden md:block" />
        <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary">
          {t.techStacks.version}
        </span>
      </div>

      <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stacks.map((stack, i) => (
          <div
            key={stack.title}
            className={`card-glow bg-surface-container-highest p-5 rounded-xl border border-transparent group ${
              gridIn ? 'fade-up-done' : 'fade-up-init'
            }`}
            style={{ transitionDelay: gridIn ? `${i * 70}ms` : '0ms' }}
          >
            <div className="w-9 h-9 rounded-lg bg-surface-bright flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-primary text-[20px]">{stack.icon}</span>
            </div>
            <h4 className="font-headline font-bold text-base mb-0.5">{stack.title}</h4>
            <p className="text-xs text-on-surface-variant mb-3">{stack.subtitle}</p>
            <div className="flex flex-wrap gap-1">
              {stack.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-secondary-container/30 text-secondary text-[10px] rounded-full font-label"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
