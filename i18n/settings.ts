export const languages = ["en", "zh-TW"];
export const cookieName = "i18next";
export const defaultNS = "translation";

export function getOptions(lng = "en", ns = defaultNS) {
  return {
    supportedLngs: languages,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
