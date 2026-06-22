export type Animal = {
  nombre: string;
  imagen: string;
  slug: string;
  tag: string;
};

export const TOROS: Animal[] = [
  { nombre: 'MARCAERRE GAUCHO', imagen: '/producto/toros_padres/gaucho.jpg', slug: 'gaucho', tag: 'Toro Padre' },
  { nombre: 'MARCAERRE PAMPA', imagen: '/producto/toros_padres/gaucho.jpg', slug: 'gaucho', tag: 'Toro Padre' },
  { nombre: 'MARCAERRE RUSO', imagen: '/producto/toros_padres/gaucho.jpg', slug: 'gaucho', tag: 'Toro Padre' },
];

export const VACAS: Animal[] = [
  { nombre: 'MARCAERRE VICKY', imagen: '/producto/donantes/vicky.jpg', slug: 'vicky', tag: 'Donante' },
  { nombre: 'MARCAERRE BONITA', imagen: '/producto/donantes/vicky.jpg', slug: 'vicky', tag: 'Donante' },
  { nombre: 'MARCAERRE BRAVA', imagen: '/producto/donantes/vicky.jpg', slug: 'vicky', tag: 'Donante' },
];

export type Dep = { dep: string; prec: string; ranking: string; prom: string };
export type AnimalDetalle = {
  nombre: string;
  tipo: string;
  imagen: string;
  medallas: string[];
  fn: string;
  hba: string;
  senasa: string;
  adn: string;
  pan: number;
  frame: string;
  pad: number;
  ce: number;
  paf: number;
  peso: number;
  descripcion: string;
  deps: Record<string, Dep>;
};

export const ANIMALES: Record<string, AnimalDetalle> = {
  gaucho: {
    nombre: 'MARCAERRE GAUCHO',
    tipo: 'Toro Padre',
    imagen: '/producto/toros_padres/gaucho.jpg',
    medallas: ['Gran Campeón Palermo', 'Reservado Campeón'],
    fn: '01/01/2020',
    hba: 'HBA123456',
    senasa: 'SENASA123456',
    adn: 'ADN123456',
    pan: 500,
    frame: 'Mediano',
    pad: 600,
    ce: 35,
    paf: 700,
    peso: 800,
    descripcion:
      'Toro con genética destacada en producción de carne. Su progenie presenta excelentes DEPs en las principales características económicas para la producción bovina en el Litoral argentino. Uno de los toros más destacados de nuestra historia, con índices de selección en el 1% superior de la raza.',
    deps: {
      PN: { dep: '+0.92', prec: '0.67', ranking: '94%', prom: '0.13' },
      PD: { dep: '+8.43', prec: '0.73', ranking: '13%', prom: '4.50' },
      AM: { dep: '+4.13', prec: '0.48', ranking: '7%', prom: '1.13' },
      CM: { dep: '+44.75', prec: '0.78', ranking: '1%', prom: '3.38' },
    },
  },
  vicky: {
    nombre: 'MARCAERRE VICKY',
    tipo: 'Donante',
    imagen: '/producto/donantes/vicky.jpg',
    medallas: ['Campeona Palermo'],
    fn: '01/02/2021',
    hba: 'HBA654321',
    senasa: 'SENASA654321',
    adn: 'ADN654321',
    pan: 450,
    frame: 'Mediano',
    pad: 550,
    ce: 33,
    paf: 650,
    peso: 700,
    descripcion:
      'Donante de elite con fertilidad comprobada y linaje superior. Hija directa de los mejores ejemplares de la cabaña, con DEPs excepcionales en producción de carne y reproducción.',
    deps: {
      PN: { dep: '+0.92', prec: '0.67', ranking: '94%', prom: '0.13' },
      PD: { dep: '+8.43', prec: '0.73', ranking: '13%', prom: '4.50' },
      AM: { dep: '+4.13', prec: '0.48', ranking: '7%', prom: '1.13' },
      CM: { dep: '+44.75', prec: '0.78', ranking: '1%', prom: '3.38' },
    },
  },
};

export const DEP_LABELS: Record<string, string> = {
  PN: 'Peso Nacer',
  PD: 'Peso Destete',
  AM: 'Aptitud Materna',
  CM: 'Carne / Músculo',
};
