import type { LangCode } from "../i18n/resources";

export type ThemeMode = "L" | "D";

export interface Preferences {
  langCode: LangCode;
  themeMode: ThemeMode;
}

// 원본 Application.xadl.js가 쓰는 localStorage 키/데이터 shape("privateData",
// {langCode, themeMode})를 그대로 맞췄다. 다만 원본은 Application_onbeforeexit(창을 닫을
// 때)에만 저장해서 브라우저가 비정상 종료되면 선택이 날아간다 — 여기서는 값이 바뀔 때마다
// 즉시 저장해 그 결함을 재현하지 않았다.
const STORAGE_KEY = "privateData";

function detectBrowserLang(): LangCode {
  return typeof navigator !== "undefined" && navigator.language.toLowerCase().includes("ko") ? "ko" : "en";
}

export function loadPreferences(): Preferences {
  let langCode = detectBrowserLang();
  let themeMode: ThemeMode = "L";
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw) as Partial<Preferences>;
      if (data.langCode === "ko" || data.langCode === "en") langCode = data.langCode;
      if (data.themeMode === "L" || data.themeMode === "D") themeMode = data.themeMode;
    }
  } catch {
    // localStorage 접근 불가(프라이빗 모드 등) — 기본값 사용
  }
  return { langCode, themeMode };
}

export function savePreferences(patch: Partial<Preferences>) {
  try {
    const current = loadPreferences();
    const next = { ...current, ...patch };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // no-op
  }
}
