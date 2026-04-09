import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from '../i18n/translations'
import type { Lang } from '../i18n/translations'

interface LanguageContextValue {
  lang: Lang
  t: (typeof translations)[Lang]
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ko')

  const toggle = () => setLang((prev) => prev === 'ko' ? 'en' : prev === 'en' ? 'ja' : 'ko')

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
