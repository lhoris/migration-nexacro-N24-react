import { useEffect, useRef, useState } from "react";

interface CountUpNumberProps {
  target: number;
  durationMs?: number;
}

// 원본 main_reference.xfdl.js는 외부 countUp.js(CDN) + IntersectionObserver로 스크롤 진입 시
// 숫자를 0에서 목표값까지 애니메이션한다. 외부 스크립트를 새로 붙이는 대신 같은 동작을
// requestAnimationFrame으로 직접 구현했다 — 한 번 보이면 그 뒤로는 다시 트리거하지 않는 것도 동일.
export function CountUpNumber({ target, durationMs = 1400 }: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min(1, (now - start) / durationMs);
              setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, durationMs]);

  return <span ref={ref}>{value.toLocaleString("en-US")}</span>;
}
