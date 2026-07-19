// 원본 comp::fittocontents.xfdl은 svc::koreafilmLoad.do(+ 외부 KOFIC API 키)로 실제 영화
// 데이터를 받아오는데, 이 프로젝트엔 그 백엔드가 없다(Playwright로 원본 화면을 직접 열어
// "[-1]FAILED" 알럿을 실측 확인 — Pivot/FileTransfer와 같은 "백엔드 없음" 케이스). 이 화면의
// 핵심 기능은 실제 KOFIC 데이터 그 자체가 아니라 "텍스트 길이에 따라 컴포넌트 크기가 자동
// 조정되는" fittocontents 동작이지만, 사용자 요청으로 제목/감독/배우/장르/줄거리는 가상
// 인물이 아니라 실존하는 한국 영화 6편의 실제 정보를 그대로 사용한다(사실 정보라 저작권
// 문제 없음). 단, 줄거리는 실제 마케팅 문구를 그대로 베끼지 않고 직접 요약해 새로 썼다.
// 포스터 이미지는 실제 영화 포스터(저작권 있는 홍보물이라 그대로 내려받아 쓸 수 없음 —
// 위키피디아의 포스터 파일도 전부 "non-free"로 명시돼 있어 재배포 불가함을 실측 확인)
// 대신 자체 제작한 SVG 일러스트(posterAccent 색상 기반 그라디언트 + 제목 텍스트)로 대체한다
// — 실존 포스터 디자인을 모사하지 않은 완전히 새로운 그림.
export interface FitToContentsMovie {
  posterAccent: string;
  title: string;
  directorNm: string;
  runtime: string;
  actorEnNm: string;
  genre: string;
  prodYear: string;
  nation: string;
  plotText: string;
  company: string;
}

export const FITTOCONTENTS_MOVIES: FitToContentsMovie[] = [
  {
    posterAccent: "#6954e1",
    title: "기생충",
    directorNm: "봉준호",
    runtime: "132",
    actorEnNm: "Song Kang-ho",
    genre: "드라마",
    prodYear: "2019",
    nation: "한국",
    company: "CJ ENM",
    plotText:
      "가난한 반지하 가족이 부유한 저택에 하나둘 위장 취업하며 벌어지는 사건을 그린 블랙 코미디. 두 계급 사이의 보이지 않는 경계가 무너지면서 예상치 못한 파국으로 치닫는다.",
  },
  {
    posterAccent: "#c98a2b",
    title: "부산행",
    directorNm: "연상호",
    runtime: "118",
    actorEnNm: "Gong Yoo",
    genre: "액션",
    prodYear: "2016",
    nation: "한국",
    company: "NEW",
    plotText:
      "정체불명의 바이러스가 전국으로 퍼지는 가운데, 부산행 KTX에 탑승한 승객들이 좀비떼로부터 살아남기 위해 사투를 벌이는 이야기.",
  },
  {
    posterAccent: "#3b7bc4",
    title: "봄날은 간다",
    directorNm: "허진호",
    runtime: "106",
    actorEnNm: "Yoo Ji-tae",
    genre: "로맨스",
    prodYear: "2001",
    nation: "한국",
    company: "싸이더스",
    plotText: "라디오 방송국에서 만난 두 남녀가 짧은 사랑을 나누고, 서서히 멀어지는 과정을 담담하게 그린 멜로 영화.",
  },
  {
    posterAccent: "#2d2d33",
    title: "신세계",
    directorNm: "박훈정",
    runtime: "134",
    actorEnNm: "Lee Jung-jae",
    genre: "느와르",
    prodYear: "2013",
    nation: "한국",
    company: "NEW",
    plotText:
      "경찰 신분을 숨기고 범죄 조직에 8년간 잠입한 형사가, 조직 내 후계자 다툼에 휘말려 정체성의 혼란을 겪는 하드보일드 느와르.",
  },
  {
    posterAccent: "#e15454",
    title: "써니",
    directorNm: "강형철",
    runtime: "124",
    actorEnNm: "Yoo Ho-jung",
    genre: "코미디",
    prodYear: "2011",
    nation: "한국",
    company: "CJ 엔터테인먼트",
    plotText: "1980년대 여고 시절 절친했던 친구들이 시간이 흘러 다시 뭉치며 그 시절의 우정을 되새기는 이야기.",
  },
  {
    posterAccent: "#2d9c5a",
    title: "님아, 그 강을 건너지 마오",
    directorNm: "진모영",
    runtime: "86",
    actorEnNm: "Jo Byeong-man",
    genre: "다큐멘터리",
    prodYear: "2014",
    nation: "한국",
    company: "다이브픽쳐스",
    plotText:
      "76년을 함께한 노부부의 마지막 사계절을 담은 다큐멘터리. 서로를 향한 변함없는 애정과 다가오는 이별의 순간까지 담담하게 기록했다.",
  },
];
