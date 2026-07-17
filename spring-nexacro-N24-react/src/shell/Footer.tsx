import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <span>{t("shell.footerCopyright")}</span>
      <span>·</span>
      <span>{t("shell.footerTagline")}</span>
    </footer>
  );
}
