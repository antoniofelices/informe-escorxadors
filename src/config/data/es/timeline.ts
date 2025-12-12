import origenComunal from '@assets/images/origen-comunal.png';
import rupturaNeoliberal from '@assets/images/ruptura-neoliberal.png';
import serveiPublicMunicipal from '@assets/images/servei-public-municipal.png';
import privatitzacioDeclive from '@assets/images/privatitzacio-declive.png';
import publicComunitari from '@assets/images/public-comunitari.png';

const dataTimelineEs = [
  {
    image: origenComunal,
    altImage: '',
    title: 'Origen comunal',
    time: 'Edad Media (S. XIII - XVIII)',
    description1: 'Modelo económico',
    text1: 'Economía moral de uso y reciprocidad',
    description2: 'Descripción',
    text2:
      'Los mataderos son medios comunales de producción. La propiedad es colectiva, el uso es equitativo y se gestiona por el común a través de arrendamientos.',
    description3: 'Ejemplo histórico ilustrativo',
    text3:
      'Carta de Población de Figueres (1267) — el macèl·lum como bien comunal',
  },
  {
    image: rupturaNeoliberal,
    altImage: '',
    title: 'La ruptura liberal con la desamortización',
    time: '1855 - 1890',
    description1: 'Modelo económico',
    text1:
      'La propiedad privada y el mercado libre vertebran la economía. Se mercantiliza la tierra y la mano de obra.',
    description2: 'Descripción',
    text2:
      'Se privatizan tierras y servicios (hornos, molinos, mataderos) transformándolos, junto con la mano de obra, en mercancías. Con la pérdida de autonomía del campesinado, aumenta el conflicto social y la represión',
    description3: 'Ejemplo histórico ilustrativo',
    text3:
      'La Ley de Madoz (1855) destruye la propiedad comunal al poner a la venta los bienes y tierras municipales que eran comunales',
  },
  {
    image: serveiPublicMunicipal,
    altImage: '',
    title: 'Servicio público municipal',
    time: '1890',
    description1: 'Modelo económico',
    text1: 'Gestión pública municipal',
    description2: 'Descripción',
    text2:
      'Los mataderos se convierten en servicios municipales esenciales y prácticamente todos los pueblos se dotan de uno público. Son equipamientos referentes en higiene, arquitectónicamente destacados y accesibles.',
    description3: 'Ejemplo histórico ilustrativo',
    text3:
      'La Ley de Bases de Régimen Local (1945) asume la competencia de los mataderos como propia de los ayuntamientos',
  },
  {
    image: privatitzacioDeclive,
    altImage: '1996 - 2022',
    title: 'Privatización y declive',
    time: '',
    description1: 'Modelo económico',
    text1: 'Oligopolio privado y dependencia logística',
    description2: 'Descripción',
    text2:
      'Se cierran 103 mataderos municipales entre 1998 y 2022. El sacrificio se concentra en macroplantas industriales, dejando solo el 2% en mataderos de baja capacidad',
    description3: 'Ejemplo histórico ilustrativo',
    text3:
      'El Real Decreto-Ley 7/1996 y la Ley Montoro (2013) ponen fin a la obligatoriedad del servicio del equipamiento matadero como servicio público',
  },
  {
    image: publicComunitari,
    altImage: '2022 - Futuro',
    title: 'Hacia un modelo público-comunitario',
    time: '',
    description1: 'Modelo económico',
    text1: 'Gobernanza democrática y economía social',
    description2: 'Descripción',
    text2:
      'Un matadero de propiedad pública gestionado mediante un modelo de gobernanza colectiva que involucra a los diferentes agentes de la cadena agroalimentaria local',
    description3: 'Ejemplo histórico ilustrativo',
    text3:
      "Surgimiento de mataderos público-comunitarios como el Matadero de l'Armentera",
  },
];

export default dataTimelineEs;
