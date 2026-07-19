// comp::mobilecomponents.xfdl(메뉴 "모바일 퍼스트 컴포넌트", 실제 menu_id 20200)는 자체
// Dataset(_setContents)이 없다 — 라디오 3개가 각자 내부적으로 만드는 NormalDataset만 있고
// 전부 동일한 3항목 code/data 세트라 여기서는 화면 표시용 라벨만 그대로 옮긴다.

export const LABEL_POSITION_OPTIONS = [
  { code: "overlap", label: "overlap" },
  { code: "outside", label: "outside" },
  { code: "inside", label: "inside" },
] as const;

export type LabelPosition = (typeof LABEL_POSITION_OPTIONS)[number]["code"];

export const INPUT_TYPE_OPTIONS = [
  { code: "date", label: "date" },
  { code: "datetime", label: "datetime" },
  { code: "time", label: "time" },
] as const;

export type InputType = (typeof INPUT_TYPE_OPTIONS)[number]["code"];

// DateField의 inputtype별 placeholder 포맷. 원본 실측(Playwright, 각 라디오 클릭 후
// 빈 입력의 실제 표시값 확인): date="YYYY. M. D.", datetime="YYYY. M. D. aa h:mm:ss",
// time="aa h:mm:ss".
export const INPUT_TYPE_PLACEHOLDER: Record<InputType, string> = {
  date: "YYYY. M. D.",
  datetime: "YYYY. M. D. aa h:mm:ss",
  time: "aa h:mm:ss",
};
