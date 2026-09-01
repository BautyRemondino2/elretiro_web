export type VideoRemate = {
  corral: number;
  nombre?: string;
  /** ID del video en YouTube: los 11 caracteres de youtu.be/XXXXXXXXXXX. */
  youtubeId: string;
};

export const VIDEOS_TOROS: VideoRemate[] = [
  { corral: 1, nombre: 'Lautaro', youtubeId: 'DPVuaiHD-94' },
  { corral: 2, youtubeId: '3u8uRJI6hgg' },
  { corral: 3, youtubeId: 'jmbRYSPodZk' },
  { corral: 4, youtubeId: 'JW0CDFLfjps' },
  { corral: 5, youtubeId: 'rDMHyRWxtLs' },
  { corral: 6, youtubeId: 'cDUh0fs0bFE' },
  { corral: 7, youtubeId: 'XRfZV0aH28k' },
  { corral: 8, youtubeId: 'U6lgktmeicI' },
  { corral: 9, youtubeId: 'Ue-YCOsSzHM' },
  { corral: 10, youtubeId: 'DjDBYEgNk18' },
  { corral: 11, youtubeId: 'I17s-jXXgi4' },
  { corral: 12, youtubeId: '2Y8uI2vQFo0' },
  { corral: 13, youtubeId: 'aHR36V6YVMI' },
  { corral: 14, youtubeId: '-1CrngIgqLU' },
];

export const VIDEOS_VAQUILLONAS: VideoRemate[] = [
  { corral: 15, youtubeId: 'q5PkKUYaDdM' },
  { corral: 16, youtubeId: 'LUDbBpfFm7Y' },
  { corral: 17, youtubeId: 'd5AM8kvulkQ' },
  { corral: 18, youtubeId: 'vEBpRfcEiOc' },
  { corral: 19, youtubeId: 'wdgzu0zGtp4' },
  { corral: 20, youtubeId: 'Eqn3cxgC0rU' },
  { corral: 21, youtubeId: 'mfTKSlUqTJg' },
  { corral: 22, youtubeId: 'bF_aqp8KlAk' },
  { corral: 23, youtubeId: 'DfR414tba8E' },
];

/** Corral con dos dígitos, como figura en el catálogo ("07", no "7"). */
export const corralLabel = (v: VideoRemate) => String(v.corral).padStart(2, '0');

/** Título visible del lote, compartido por la tarjeta y el reproductor. */
export const tituloVideo = (v: VideoRemate) => `Corral ${corralLabel(v)}${v.nombre ? ` — ${v.nombre}` : ''}`;

/** Miniatura del video. maxresdefault no existe para los subidos en baja, por eso la cascada. */
export const posters = (v: VideoRemate) => [
  `https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg`,
  `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`,
];

/**
 * Reproductor embebido.
 *
 * autoplay: el usuario ya tocó "Ver video" en la tarjeta, pedirle un segundo
 * toque adentro del reproductor sobra. Va de la mano con allow="autoplay" en el
 * iframe. Si el navegador lo bloquea (pasa en iOS con sonido) no se rompe nada:
 * queda el póster con el play.
 *
 * playsinline evita que iOS se lo lleve solo a pantalla completa, y rel=0 deja
 * los relacionados del final dentro del canal en vez de mandar al espectador a
 * videos de otras cabañas.
 */
export const urlEmbed = (v: VideoRemate) =>
  `https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`;

/** El video en YouTube, para abrirlo fuera de la página. */
export const urlExterna = (v: VideoRemate) => `https://youtu.be/${v.youtubeId}`;
