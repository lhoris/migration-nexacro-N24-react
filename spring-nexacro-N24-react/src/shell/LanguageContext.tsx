import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { RESOURCES, type LangCode } from "../i18n/resources";
import { loadPreferences, savePreferences } from "./preferences";

export type { LangCode };

interface LanguageContextValue {
  lang: LangCode;
  toggleLanguage: () => void;
  /** 원본 Nexacro의 TEXT(key, fallback) 그대로: 리소스에 키가 없으면 fallback, 그마저 없으면 key 자체를 보여준다. */
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// 원본: btnLanguage_onclick가 app.langCode를 ko<->en으로 토글하고 changeLanguage()가
// stringrc JSON을 다시 로드 + gdsAllMenu를 caption_"+langCode 컬럼으로 다시 그린다.
// 여기서는 fetch 없이 이미 번들된 RESOURCES/menu.ts의 labelEn을 그대로 스위치하는
// 방식으로 같은 결과를 낸다(SPA라 새 언어 파일을 네트워크로 불러올 필요가 없다).
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangCode>(() => loadPreferences().langCode);

  useEffect(() => {
    document.documentElement.lang = lang;
    savePreferences({ langCode: lang });
  }, [lang]);

  const toggleLanguage = () => setLang((prev) => (prev === "ko" ? "en" : "ko"));
  const t = (key: string, fallback?: string) => RESOURCES[lang][key] ?? fallback ?? key;

  return <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
