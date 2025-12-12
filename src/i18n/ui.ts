type CaProps = {
  timeline: string;
  comparative: string;
  escorxadorArmentera: string;
};

type EsProps = {
  timeline: string;
  comparative: string;
  escorxadorArmentera: string;
};

type RoutesProps = {
  ca: CaProps;
  es: EsProps;
};

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
