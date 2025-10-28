import { register, init, getLocaleFromNavigator } from "svelte-i18n";

type LanguageRecord = { code: string; label: string };

export const AvailableLanguages: Array<LanguageRecord> = [
  { code: "en", label: "English" },
  { code: "cs", label: "Čeština" },
];

export function setupI18n(): void {
  AvailableLanguages.forEach((l) => {
    register(l.code, () => import(`../lang/${l.code}.json`));
  });

  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator() || "en",
  });
}
