type RouteTranslations = {
  timeline: string;
  comparative: string;
  escorxadorArmentera: string;
};

type RoutesProps = {
  ca: RouteTranslations;
  es: RouteTranslations;
};
export type Lang = keyof typeof languages;

export type RouteKey = keyof RouteTranslations;

export const languages = {
  ca: 'Catala',
  es: 'Español',
};

export const defaultLang = 'ca';

export const showDefaultLang = false;

export const routes: RoutesProps = {
  ca: {
    timeline: 'cronologia',
    comparative: 'comparativa',
    escorxadorArmentera: 'escorxador-armentera',
  },
  es: {
    timeline: 'cronologia',
    comparative: 'comparativa',
    escorxadorArmentera: 'matadero-armentera',
  },
};
