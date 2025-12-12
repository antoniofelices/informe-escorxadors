import { defaultLang, showDefaultLang, routes } from './ui';
import type { Lang, RouteKey } from './ui';
import { stringToTranslate } from './strings-to-translate';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in stringToTranslate) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof stringToTranslate)[typeof defaultLang]) {
    return stringToTranslate[lang][key] || stringToTranslate[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, language: Lang = lang) {
    const pathName = path.replaceAll('/', '') as RouteKey;

    const hasTranslation =
      routes[language] !== undefined &&
      routes[language][pathName] !== undefined;

    let translatedPath = path;

    if (hasTranslation) {
      translatedPath = '/' + routes[language][pathName];
    }

    const isDefaultLanguageWithoutPrefix =
      !showDefaultLang && language === defaultLang;

    if (isDefaultLanguageWithoutPrefix) {
      return translatedPath;
    }

    return `/${language}${translatedPath}`;
  };
}
