export function resolveLocale(): string {
  const locale = window.location.pathname.split("/")[1];
  const supported = ["en", "ja", "de", "fr"];
  return supported.includes(locale) ? locale : "en";
}

export function persistLocale(locale: string): void {
  const path = window.location.pathname.replace(/^\/[a-z]{2}/, "");
  window.location.href = `/${locale}${path}`;
}