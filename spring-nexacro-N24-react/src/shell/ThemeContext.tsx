import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { loadPreferences, savePreferences, type ThemeMode } from "./preferences";

export type { ThemeMode };

interface ThemeContextValue {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// 원본: btnTheme_onclick이 app.themeMode를 L<->D로 토글하고
// nexacro.loadStyle("xcssrc::demo_"+mode+".xcss")로 라이트/다크 스타일시트를 스왑한다.
// React 쪽은 별도 스타일시트 스왑 대신 document.documentElement에 data-theme을 찍고
// tokens.css의 :root[data-theme="dark"|"light"] 토큰 오버라이드로 같은 효과를 낸다.
//
// 원본은 재방문 시 저장된 themeMode를 쓰지 않고 matchMedia(prefers-color-scheme)로
// 덮어써 버리는 결함이 있다(Application.xadl.js) — 사용자가 수동으로 고른 테마가
// 새로고침마다 OS 설정에 밀려 사라진다. 여기서는 그 결함을 재현하지 않고 저장된
// 선택을 그대로 존중한다: 최초 방문(localStorage 없음)에서만 OS 선호를 참고한다.
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const prefs = loadPreferences();
    const hasStored = (() => {
      try {
        return localStorage.getItem("privateData") !== null;
      } catch {
        return false;
      }
    })();
    if (!hasStored && typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      return "D";
    }
    return prefs.themeMode;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = themeMode === "D" ? "dark" : "light";
    savePreferences({ themeMode });
  }, [themeMode]);

  const toggleTheme = () => setThemeMode((prev) => (prev === "L" ? "D" : "L"));

  return <ThemeContext.Provider value={{ themeMode, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
