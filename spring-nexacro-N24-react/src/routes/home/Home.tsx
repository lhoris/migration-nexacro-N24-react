import { RollingBanner } from "./RollingBanner";
import { RealOsmuSection } from "./RealOsmuSection";
import { ReferenceSection } from "./ReferenceSection";
import "./home.css";

/**
 * Nexacro frame::main.xfdl(홈 화면)의 React 대체재.
 * div_rolling(main_rolling.xfdl) + div_realosmu(main_realosmu.xfdl) +
 * div_reference(main_reference.xfdl) 3개 섹션을 원본과 같은 순서로 그대로 옮겼다.
 */
export function Home() {
  return (
    <main className="home">
      <RollingBanner />
      <RealOsmuSection />
      <ReferenceSection />
    </main>
  );
}
