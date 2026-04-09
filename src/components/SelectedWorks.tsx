import { useLang } from '../context/LanguageContext'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    id: 1,
    categoryKo: 'AI 커뮤니티', categoryEn: 'AI Platform', categoryJa: 'AIプラットフォーム',
    period: '2026.01 – 2026.03',
    titleKo: '마법의 소라고동',
    titleEn: 'Magic Conch Shell',
    descKo: '중고마켓·타임세일·가계부·커뮤니티를 말 한마디로 처리하는 AI 어시스턴트 탑재 커뮤니티 플랫폼. Function Calling AI, 타임세일 재고 동시성 제어, 트랜잭션 기반 키워드 알림, 1GB 서버 JVM 튜닝. k6 부하테스트 49명 동시접속 — p(95) 501ms, 에러율 0% 달성.',
    descEn: 'Community platform with an AI assistant that operates used market, time sales, ledger, and boards via natural language. Built Function Calling AI, atomic stock concurrency, transaction-aware keyword push, JVM tuning on 1 GB server — k6: 49 CCU, p(95) 501 ms, 0% error rate.',
    descJa: '中古市場・タイムセール・家計簿・コミュニティを一言で操作できるAIアシスタント搭載コミュニティプラットフォーム。Function Calling AI、タイムセール在庫の同時実行制御、トランザクション対応キーワードプッシュ通知、1GBサーバーJVMチューニング。k6負荷テスト49名同時接続 — p(95) 501ms、エラー率0%達成。',
    tags: ['Java 21', 'Spring Boot 3.5', 'Spring AI', 'MySQL 8.0', 'Redis', 'WebSocket', 'SSE', 'Docker', 'GitHub Actions'],
    image: '/portfolio/sora.png',
    siteLink: 'http://soragodong.duckdns.org/',
    link: 'https://github.com/M1NiDRAG0N/sora-api',
    reverse: false,
  },
  {
    id: 2,
    categoryKo: 'e커머스', categoryEn: 'eCommerce', categoryJa: 'eコマース',
    period: '2020.03 – 2022.06',
    titleKo: 'RCI eSign & UV-eSign',
    titleEn: 'RCI eSign & UV-eSign',
    descKo: '르노코리아 금융 파트너(RCI 파이낸셜 서비스 코리아)의 자동차 할부·리스 전자서명 하이브리드 앱. PhantomJS 기반 전자계약서 생성, 계약 데이터 인덱스 튜닝으로 조회 속도 개선, 스텝별 오류 재시도 스케줄러 및 계약 트래킹 관리자 기능을 구현했습니다.',
    descEn: 'Hybrid e-signature app for Renault Korea\'s automotive installment and lease financing. Built PhantomJS-based digital contract generation, contract data index tuning, per-step error retry scheduler, and a contract tracking admin console.',
    descJa: 'ルノーコリア金融パートナー（RCIファイナンシャルサービスコリア）の自動車割賦・リース電子署名ハイブリッドアプリ。PhantomJSによる電子契約書生成、インデックスチューニングによる照会速度改善、ステップ別エラー再試行スケジューラ、契約追跡管理コンソールを実装しました。',
    tags: ['Spring Boot', 'Mybatis', 'Oracle', 'AngularJS', 'jQuery', 'PhantomJS', 'Nginx'],
    image: '/portfolio/rci.png',
    siteLink: null,
    link: null,
    reverse: true,
  },
  {
    id: 3,
    categoryKo: 'SaaS · ERP', categoryEn: 'SaaS · ERP', categoryJa: 'SaaS · ERP',
    period: '2020.09 – 2021.12',
    titleKo: 'And U',
    titleEn: 'And U',
    descKo: 'SaaS 형식 기업형 ERP 하이브리드 앱. 전자결재(휴가·반차·외출) 프로세스 개발, COVID-19 열화상 비접촉 발열체크 통신 I/F 구현, 멀티테넌트 데이터베이스 설계 및 메뉴별 기능 고도화·유지운영을 담당했습니다.',
    descEn: 'Enterprise ERP hybrid app in SaaS format. Developed e-approval workflows (leave/half-day/out), implemented contactless thermal fever-check communication for COVID-19, and designed a multi-tenant database architecture.',
    descJa: 'SaaS形式の企業向けERPハイブリッドアプリ。電子決裁（休暇・半休・外出）プロセスの開発、COVID-19対応の非接触サーモグラフィー発熱チェック通信I/F実装、マルチテナントデータベース設計、各機能の高度化と運用保守を担当しました。',
    tags: ['Spring Boot', 'Mybatis', 'MySQL', 'Redis', 'jQuery', 'Linux'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    siteLink: null,
    link: null,
    reverse: false,
  },
  {
    id: 4,
    categoryKo: 'e커머스', categoryEn: 'eCommerce', categoryJa: 'eコマース',
    period: '2020.03 – 2021.03',
    titleKo: 'GM-swork & GM-onlineSales',
    titleEn: 'GM-swork & GM-onlineSales',
    descKo: '현장에서 태블릿으로 차량 견적·계약·전자서명까지 처리하는 e-Commerce 하이브리드 앱. 실시간 프로모션 반영 견적서 카카오톡/문자 발송, 비대면 전자결재, 계약 후 배정·출고·탁송 현황 실시간 추적 기능을 구현했습니다.',
    descEn: 'On-site e-Commerce hybrid app enabling dealers to quote, contract, and collect e-signatures via tablet. Features real-time promotion-based quoting with KakaoTalk/SMS delivery, contactless e-approval, and live post-contract vehicle tracking.',
    descJa: '現場でタブレットを使い車両の見積・契約・電子署名を処理するe-Commerceハイブリッドアプリ。リアルタイムプロモーション反映の見積書をカカオトーク/SMSで送付、非対面電子決裁、契約後の配車・出庫・輸送状況のリアルタイム追跡機能を実装しました。',
    tags: ['Spring Boot', 'Mybatis', 'MySQL', 'jQuery', 'PhantomJS', 'Linux', 'Nginx'],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    siteLink: null,
    link: null,
    reverse: true,
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
            {lang === 'ko' ? project.categoryKo : lang === 'ja' ? project.categoryJa : project.categoryEn}
          </span>
          <span className="text-on-surface-variant/40 text-xs font-label">{project.period}</span>
        </div>
        <h4 className="font-headline text-2xl font-bold mb-4">
          {lang === 'ko' ? project.titleKo : project.titleEn}
        </h4>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
          {lang === 'ko' ? project.descKo : lang === 'ja' ? project.descJa : project.descEn}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] text-on-surface-variant flex items-center gap-1.5 bg-surface-variant/40 px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-primary text-[13px]">check_circle</span>
              {tag}
            </span>
          ))}
        </div>
        {(project.siteLink || project.link) && (
          <div className="flex flex-wrap items-center gap-4">
            {project.siteLink && (
              <a
                className="inline-flex items-center gap-2 text-primary text-sm font-bold"
                href={project.siteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">language</span>
                {t.selectedWorks.liveSite}
              </a>
            )}
            {project.link && (
              <a
                className="inline-flex items-center gap-2 text-primary/60 text-sm font-bold"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                GitHub
              </a>
            )}
          </div>
        )}
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
