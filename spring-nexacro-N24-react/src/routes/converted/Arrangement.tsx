import { useRef, useState } from "react";
import { useLanguage } from "../../shell/LanguageContext";
import "./arrangement.css";

// 원본 comp::arrangement_phone.xfdl의 cboNo1_innerdataset(_setContents)에서 그대로 추출.
const COUNTRY_CODES = [
  { code: "82", label: "Korea (82)" },
  { code: "1", label: "USA (1)" },
  { code: "7", label: "Russia (7)" },
  { code: "33", label: "France (33)" },
  { code: "34", label: "Spain (34)" },
  { code: "44", label: "Great Britain (44)" },
  { code: "49", label: "Germany (49)" },
  { code: "61", label: "Australia (61)" },
  { code: "63", label: "Philippines (63)" },
  { code: "64", label: "New Zealand (64)" },
  { code: "65", label: "Singapore (65)" },
  { code: "66", label: "Thailand (66)" },
  { code: "81", label: "Japan (81)" },
  { code: "84", label: "Vietnam (84)" },
  { code: "86", label: "China (86)" },
  { code: "91", label: "India (91)" },
];

// 원본 comp::arrangement_familly.xfdl의 Combo00_innerdataset에서 그대로 추출(오타 포함: "Nidce").
const RELATIONSHIPS = [
  "Mother",
  "Father",
  "Daughter",
  "Son",
  "Sister",
  "Brother",
  "Aunt",
  "Uncle",
  "Nidce",
  "Nephew",
  "Cousin (female)",
  "Cousin (Male)",
  "Grandmother",
  "Grandfather",
  "Granddaughter",
  "Grandson",
];

type Contact = { id: number; countryCode: string; phone: string };
type FamilyMember = { id: number; name: string; relationship: string };

/**
 * Nexacro comp::arrangement.xfdl(메뉴 "Arrangement", 실제 menu_id 21300)을 React로 옮긴 화면.
 * 원본은 "Add" 클릭 시 새 하위 폼(divContactN/divFamillyN)을 절대좌표로 삽입하고, 그 top을
 * "이전 항목:-1"이라는 상대좌표 문자열로 지정해 이전 항목 바로 아래에 붙인 뒤, 부모/폼의
 * height를 수동으로 +45(연락처)/+125(가족)만큼 늘리는 방식으로 "Form 기준이 아닌 다른
 * 컴포넌트 기준 상대좌표" 기능을 시연한다 — Delete 시에는 반대로 다음 항목의 top을 그
 * 앞 항목 기준으로 재연결하고 높이를 -45/-110만큼 줄인다.
 *
 * React/CSS의 flex-column은 항목을 DOM 순서대로 자동으로 쌓고 삭제 시 자동으로 재정렬하므로
 * (원본이 수동으로 흉내내는 것을 브라우저가 기본 제공), 좌표 재계산 로직 자체는 포팅하지
 * 않고 배열 상태 + flex 레이아웃으로 동일한 결과를 구현했다 — 20900(메뉴) 아코디언 애니메이션
 * 때와 같은 원칙("레이아웃 메커니즘을 그대로 포팅하지 말고 CSS에 맡긴다").
 *
 * 원본의 실측 버그: 가족정보는 Add 시 +125px, Delete 시 -110px로 높이 증감이 비대칭이라
 * 추가 후 삭제해도 원래 높이로 돌아오지 않고 15px씩 밀린다(Playwright로 540→665→555 실측
 * 확인). flex-column 기반 구현은 이 버그를 별도 처리 없이 자동으로 갖지 않는다(정상 동작).
 *
 * "Familly Infomation"/"Choose Realationship"/"Nidce" 등은 원본 자체가 지역화되지 않은
 * (TEXT() 래핑이 없는) 하드코딩 영문 리터럴이라 오타까지 그대로 재현했다 — 실제로 언어를
 * 바꿔도 원본에서 이 텍스트들은 바뀌지 않는다.
 */
export function Arrangement() {
  const { t } = useLanguage();

  const [customerName, setCustomerName] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([{ id: 0, countryCode: "82", phone: "" }]);
  const nextContactId = useRef(1);

  const [family, setFamily] = useState<FamilyMember[]>([{ id: 0, name: "", relationship: "" }]);
  const nextFamilyId = useRef(1);

  const addContact = () => {
    setContacts((prev) => [...prev, { id: nextContactId.current++, countryCode: "82", phone: "" }]);
  };
  const deleteContact = (id: number) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const addFamily = () => {
    setFamily((prev) => [...prev, { id: nextFamilyId.current++, name: "", relationship: "" }]);
  };
  const deleteFamily = (id: number) => {
    setFamily((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <main className="work">
      <div className="work-card react ar-card">
        <div className="sff-legacy-link-row">
          <a className="sff-legacy-link" href="/nexacro/launch.html#21300">
            {t("sff.legacyLink")} ↗
          </a>
        </div>

        <h1 className="ar-page-title">{t("comp.arrangement.title")}</h1>

        <section className="ar-panel">
          <h2 className="ar-panel-title">Customer Infomation</h2>

          <div className="ar-row">
            <span className="ar-label">Name</span>
            <input
              className="ar-input ar-input-name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>

          {contacts.map((c, i) => (
            <div className="ar-row" key={c.id}>
              <span className="ar-label">Phone Number</span>
              <select
                className="ar-select ar-select-country"
                value={c.countryCode}
                onChange={(e) => {
                  const code = e.target.value;
                  setContacts((prev) => prev.map((x) => (x.id === c.id ? { ...x, countryCode: code } : x)));
                }}
              >
                {COUNTRY_CODES.map((cc) => (
                  <option key={cc.code} value={cc.code}>
                    {cc.label}
                  </option>
                ))}
              </select>
              <input
                className="ar-input"
                value={c.phone}
                onChange={(e) => {
                  const phone = e.target.value;
                  setContacts((prev) => prev.map((x) => (x.id === c.id ? { ...x, phone } : x)));
                }}
              />
              {i === 0 ? (
                <button type="button" className="ar-btn ar-btn-add" onClick={addContact}>
                  Add
                </button>
              ) : (
                <button type="button" className="ar-btn ar-btn-delete" onClick={() => deleteContact(c.id)}>
                  Delete
                </button>
              )}
            </div>
          ))}
        </section>

        <section className="ar-panel">
          <h2 className="ar-panel-title">Familly Infomation</h2>

          {family.map((f, i) => (
            <div className="ar-family-entry" key={f.id}>
              <div className="ar-row">
                <span className="ar-label">Name</span>
                <input
                  className="ar-input ar-input-family-name"
                  value={f.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    setFamily((prev) => prev.map((x) => (x.id === f.id ? { ...x, name } : x)));
                  }}
                />
                {i === 0 ? (
                  <button type="button" className="ar-btn ar-btn-add" onClick={addFamily}>
                    Add
                  </button>
                ) : (
                  <button type="button" className="ar-btn ar-btn-delete" onClick={() => deleteFamily(f.id)}>
                    Delete
                  </button>
                )}
              </div>
              <div className="ar-row">
                <span className="ar-label">Relationship</span>
                <select
                  className={`ar-select ar-select-relationship${f.relationship === "" ? " ar-select-placeholder" : ""}`}
                  value={f.relationship}
                  onChange={(e) => {
                    const relationship = e.target.value;
                    setFamily((prev) => prev.map((x) => (x.id === f.id ? { ...x, relationship } : x)));
                  }}
                >
                  <option value="">Choose Realationship</option>
                  {RELATIONSHIPS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </section>

        <section className="ar-desc">
          <h3 className="ar-desc-title">{t("comp.arrangement.title")}</h3>
          <p className="ar-desc-body">
            {t("comp.arrangement.desc")}{" "}
            <a
              className="ar-desc-link"
              href="http://docs.tobesoft.com/edu_nexacro17_basic_kr#ab415e80eca7a28b"
              target="_blank"
              rel="noreferrer"
            >
              http://docs.tobesoft.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
