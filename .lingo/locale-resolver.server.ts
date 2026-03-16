export function resolveLocale(request: Request): string {
  const url = new URL(request.url);
  const locale = url.pathname.split("/")[1];
  const supported = ["en", "ja", "de", "fr"];
  return supported.includes(locale) ? locale : "en";
}