import { useLang } from '../context/LanguageContext'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    id: 1,
    categoryKo: 'e커머스', categoryEn: 'eCommerce',
    period: '2020.03 – 2022.06',
    titleKo: 'RCI eSign & UV-eSign',
    titleEn: 'RCI eSign & UV-eSign',
    descKo: '모빌라이즈파이낸셜서비스(구 알씨아이파이낸셜서비스코리아)의 자동차 전자 할부 계약 e-Commerce 하이브리드 앱. 외부 API I/F 연동 및 PhantomJS 기반 전자계약서 생성으로 고객에게 편리한 비대면 계약 경험을 제공했습니다.',
    descEn: 'Automotive electronic installment contract e-Commerce hybrid app for Mobilize Financial Services. Delivered a seamless paperless contract experience via external API integration and PhantomJS-based e-document generation.',
    tags: ['Spring Boot', 'Mybatis', 'Oracle', 'AngularJS', 'PhantomJS', 'Nginx'],
    image: 'https://play-lh.googleusercontent.com/apPH21I9GKNN1Dja51tebb0_ZORFsnKKhXVUqtYQz73ZH3HWRD9qw5DQ0kcnohpErzI=w526-h296-rw',
    link: null,
    reverse: false,
  },
  {
    id: 2,
    categoryKo: 'SaaS · ERP', categoryEn: 'SaaS · ERP',
    period: '2020.09 – 2021.12',
    titleKo: 'And U',
    titleEn: 'And U',
    descKo: 'SaaS 형식 기업형 ERP 하이브리드 앱. 전자결재(휴가·반차·외출) 프로세스 개발, COVID-19 열화상 비접촉 발열체크 통신 I/F 구현, 멀티테넌트 데이터베이스 설계 및 메뉴별 기능 고도화·유지운영을 담당했습니다.',
    descEn: 'Enterprise ERP hybrid app in SaaS format. Developed e-approval workflows (leave/half-day/out), implemented contactless thermal fever-check communication for COVID-19, and designed a multi-tenant database architecture.',
    tags: ['Spring Boot', 'Mybatis', 'MySQL', 'Redis', 'jQuery', 'Linux'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    link: null,
    reverse: true,
  },
  {
    id: 3,
    categoryKo: 'AI 생활비서', categoryEn: 'AI Platform',
    period: '2026.01 – 2026.03',
    titleKo: '마법의 소라고동',
    titleEn: 'Magic Conch Shell',
    descKo: '"소비 관리 + 생활 정보 + 커뮤니티"를 하나로 통합한 AI 기반 생활 비서 서비스. 자연어 명령으로 가계부·중고마켓·플래시세일·커뮤니티를 실행하는 AI 어시스턴트와 SSE 실시간 알림, WebSocket 채팅을 구현한 SCIT 48기 팀 프로젝트.',
    descEn: 'AI-powered life assistant integrating finance management, used goods trading, community, and flash sales. Features a natural language AI assistant (Function Calling via Groq), SSE push notifications, and WebSocket chat — SCIT 48th team project.',
    tags: ['Spring Boot 3.5', 'Spring AI', 'MySQL', 'Redis', 'WebSocket', 'SSE'],
    image: '/portfolio/sora.png',
    link: 'https://github.com/M1NiDRAG0N/sora-api',
    reverse: false,
  },
]

function ProjectItem({ project }: { project: (typeof projects)[0] }) {
  const { lang, t } = useLang()
  const { ref: imgRef,  inView: imgIn  } = useInView(0.15)
  const { ref: textRef, inView: textIn } = useInView(0.15)

  const imgAnim  = project.reverse
    ? (imgIn  ? 'slide-right-done' : 'slide-right-init')
    : (imgIn  ? 'slide-left-done'  : 'slide-left-init')
  const textAnim = project.reverse
    ? (textIn ? 'slide-left-done'  : 'slide-left-init')
    : (textIn ? 'slide-right-done' : 'slide-right-init')

  return (
    <div className={`flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      {/* Image */}
      <div
        ref={imgRef}
        className={`w-full md:w-3/5 aspect-video rounded-2xl overflow-hidden bg-surface-container relative group ${imgAnim}`}
      >
        {project.image ? (
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75"
            src={project.image}
            alt={lang === 'ko' ? project.titleKo : project.titleEn}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-surface-container-high">
            <span className="material-symbols-outlined text-outline text-5xl">image</span>
            <p className="font-label text-[10px] text-outline uppercase tracking-widest">screenshot</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Text */}
      <div ref={textRef} className={`w-full md:w-2/5 ${textAnim}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-label text-[10px] text-primary uppercase tracking-widest px-3 py-1 bg-primary/10 rounded-full border border-primary/15">
            {lang === 'ko' ? project.categoryKo : project.categoryEn}
          </span>
          <span className="text-on-surface-variant/40 text-xs font-label">{project.period}</span>
        </div>
        <h4 className="font-headline text-2xl font-bold mb-4">
          {lang === 'ko' ? project.titleKo : project.titleEn}
        </h4>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
          {lang === 'ko' ? project.descKo : project.descEn}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] text-on-surface-variant flex items-center gap-1.5 bg-surface-variant/40 px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-primary text-[13px]">check_circle</span>
              {tag}
            </span>
          ))}
        </div>
        <a
          className="inline-flex items-center gap-2 text-primary text-sm font-bold group"
          href={project.link ?? '#'}
          target={project.link ? '_blank' : undefined}
          rel={project.link ? 'noopener noreferrer' : undefined}
        >
          {project.link ? (
            <>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              GitHub
            </>
          ) : (
            <>
              {t.selectedWorks.caseStudy}
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </>
          )}
        </a>
      </div>
    </div>
  )
}

export default function SelectedWorks() {
  const { t } = useLang()
  const { ref: headingRef, inView: headingIn } = useInView()

  return (
    <section className="px-6 md:px-24 mb-24" id="work">
      <div
        ref={headingRef}
        className={`mb-12 ${headingIn ? 'fade-up-done' : 'fade-up-init'}`}
      >
        <h3 className="font-headline text-2xl font-bold mb-3 tracking-tight">{t.selectedWorks.title}</h3>
        <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary" />
      </div>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
