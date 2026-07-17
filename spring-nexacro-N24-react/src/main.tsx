import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// KO/EN 혼용 UI를 위해 실제 폰트 파일을 셀프호스팅한다. tokens.css의 --font-kr는 전부터
// "Pretendard Variable"을 1순위로 선언해뒀지만 실제로 로드하는 곳이 없어 시스템 폰트
// (맥은 Apple SD Gothic Neo)로 계속 폴백되고 있었다 — 가독성 개선의 핵심은 이 로드 누락을
// 고치는 것. unicode-range 서브셋이라 실제 쓰는 글리프만 내려받는다.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./styles/tokens.css";
import "./styles/shell.css";
import App from "./App.tsx";
import { LanguageProvider } from "./shell/LanguageContext";
import { ThemeProvider } from "./shell/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
