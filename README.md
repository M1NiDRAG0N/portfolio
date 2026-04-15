<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:4f46e5,100:06b6d4&height=180&section=header&text=Portfolio&fontSize=55&fontColor=ffffff&fontAlignY=38&desc=Full%20Stack%20Developer%20이용민&descAlignY=58&descSize=20" width="100%"/>
</div>

<div align="center">

[![Live](https://img.shields.io/badge/🌐_Live_Site-m1nidrag0n.github.io/portfolio-06b6d4?style=for-the-badge)](https://m1nidrag0n.github.io/portfolio/)
&nbsp;
[![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript_5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=flat-square&logo=github&logoColor=white)](https://pages.github.com)

</div>

---

## 소개

백엔드의 견고함과 프론트엔드의 세심함이 만나는 풀스택 개발자 **이용민**의 개인 포트폴리오 SPA입니다.  
한국어 · English · 日本語 **3개 국어**를 지원하며, 스크롤 애니메이션과 반응형 레이아웃으로 구성되어 있습니다.

<div align="center">
  <img src="screen.png" alt="포트폴리오 스크린샷" width="85%"/>
</div>

---

## 주요 기능

| 기능 | 설명 |
|------|------|
| 🌐 **3개국어 지원** | 한국어 / English / 日本語 실시간 전환 (LanguageContext) |
| 🎞 **스크롤 애니메이션** | IntersectionObserver 기반 섹션별 fade-up / slide 애니메이션 |
| 📱 **반응형 디자인** | 모바일 · 태블릿 · 데스크탑 완전 대응 |
| 📜 **스크롤 프로그레스** | 상단 진행 바로 읽기 위치 시각화 |
| 📬 **연락처 폼** | 이메일 발송 연동 |
| ⚡ **빠른 빌드** | Vite 6 기반 최적화 번들 |

---

## 소개된 프로젝트

### 🤖 마법의 소라고동 (sora-api) \`2026.01 – 2026.03\`
> AI 어시스턴트가 자연어 명령으로 중고마켓·타임세일·가계부·커뮤니티를 처리하는 통합 플랫폼

- Function Calling AI, 타임세일 재고 동시성 제어, 트랜잭션 기반 키워드 알림
- k6 부하테스트: 49 CCU, p(95) 501ms, **에러율 0%** 달성
- \`Java 21\` \`Spring Boot 3.5\` \`Spring AI\` \`MySQL 8.0\` \`Redis\` \`WebSocket\` \`SSE\` \`Docker\`

### 📝 RCI eSign & UV-eSign \`2020.03 – 2022.06\`
> 르노코리아 금융 파트너(RCI 파이낸셜)의 자동차 할부·리스 전자서명 하이브리드 앱

- PhantomJS 기반 전자계약서 생성, 계약 데이터 인덱스 튜닝, 오류 재시도 스케줄러
- \`Spring Boot\` \`Mybatis\` \`Oracle\` \`AngularJS\` \`PhantomJS\` \`Nginx\`

### 🏢 And U \`2020.09 – 2021.12\`
> SaaS 형식 기업형 ERP 하이브리드 앱

- 전자결재 프로세스, COVID-19 비접촉 열화상 발열체크 I/F, 멀티테넌트 DB 설계
- \`Spring Boot\` \`Mybatis\` \`MySQL\` \`Redis\` \`jQuery\` \`Linux\`

### 🚗 GM-swork & GM-onlineSales \`2020.03 – 2021.03\`
> 현장 태블릿으로 차량 견적·계약·전자서명을 처리하는 e-Commerce 하이브리드 앱

- 실시간 프로모션 견적서 카카오톡/문자 발송, 비대면 전자결재, 계약 후 차량 실시간 추적
- \`Spring Boot\` \`Mybatis\` \`MySQL\` \`jQuery\` \`PhantomJS\` \`Nginx\`

---

## 기술 스택

\`\`\`
Frontend   React 19 · TypeScript 5.7 · Tailwind CSS 3 · Vite 6
상태 관리   React Context API (LanguageContext)
애니메이션  IntersectionObserver · CSS Custom Animations
배포       GitHub Pages (gh-pages)
\`\`\`

---

## 로컬 실행

\`\`\`bash
git clone https://github.com/M1NiDRAG0N/portfolio.git
cd portfolio
npm install
npm run dev
\`\`\`

> 브라우저에서 \`http://localhost:5173/portfolio/\` 접속

### 배포

\`\`\`bash
npm run build
npm run deploy   # gh-pages 브랜치로 자동 배포
\`\`\`

---

## 프로젝트 구조

\`\`\`
src/
├── components/
│   ├── Hero.tsx          # 메인 히어로 섹션
│   ├── About.tsx         # 자기소개
│   ├── TechStacks.tsx    # 기술 스택
│   ├── SelectedWorks.tsx # 프로젝트 목록
│   ├── Contact.tsx       # 연락처 폼
│   ├── Header.tsx        # 네비게이션
│   ├── Sidebar.tsx       # 사이드바
│   ├── Footer.tsx        # 푸터
│   └── MobileNav.tsx     # 모바일 네비게이션
├── context/
│   └── LanguageContext.tsx  # 3개국어 상태 관리
├── hooks/
│   ├── useInView.ts         # 스크롤 감지
│   ├── useActiveSection.ts  # 활성 섹션 추적
│   └── useScrollProgress.ts # 스크롤 진행도
└── i18n/
    └── translations.ts      # KO / EN / JA 번역 데이터
\`\`\`

---

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-M1NiDRAG0N-181717?style=for-the-badge&logo=github)](https://github.com/M1NiDRAG0N)
[![Gmail](https://img.shields.io/badge/Gmail-minidragon.lee@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:minidragon.lee@gmail.com)

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:06b6d4,100:4f46e5&height=100&section=footer" width="100%"/>

</div>
