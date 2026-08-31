export type VideoRemate = {
  corral: number;
  nombre?: string;
  /** ID del archivo en Drive. Se usa mientras el lote no esté en YouTube. */
  driveId: string;
  /**
   * ID del video en YouTube (los 11 caracteres de youtu.be/XXXXXXXXXXX).
   * Si está, se reproduce desde YouTube y se ignora driveId.
   *
   * Por qué conviene: el reproductor de Drive cambia de layout según el ancho
   * (abajo de ~420 px mete una barra propia arriba del video), recorta el
   * póster en pantallas chicas y tiene cuota de ancho de banda — justo el día
   * del remate, con mucha gente mirando a la vez, puede empezar a fallar.
   * YouTube no tiene nada de eso.
   */
  youtubeId?: string;
};

export const VIDEOS_TOROS: VideoRemate[] = [
  { corral: 1, nombre: 'Lautaro', driveId: '1yGC1cvQHs1SyUq_hPkrMq4JkxNMbNaTq', youtubeId: 'DPVuaiHD-94' },
  { corral: 2, driveId: '1IARGN9unWjg0FXuW6ck5mXmwtf_bPRWb', youtubeId: '3u8uRJI6hgg' },
  { corral: 3, driveId: '1TqgFqWlJGZmXbTW99ZuvGj3Ts4LgTdFM', youtubeId: 'jmbRYSPodZk' },
  { corral: 4, driveId: '1JoAc3Z3D5tDXfgGp8L9KMQrAo60s1oyY', youtubeId: 'JW0CDFLfjps' },
  { corral: 5, driveId: '1lv50B3b8v2w447fOEDDYhQ1_RimGz06b', youtubeId: 'rDMHyRWxtLs' },
  { corral: 6, driveId: '1KjiWCJ-di1Ud0ujYUe3kw7OatDDuSlFi', youtubeId: 'cDUh0fs0bFE' },
  { corral: 7, driveId: '1rgkwPaRrBsrS1cFa47wQyY0O1QFUS1C0', youtubeId: 'XRfZV0aH28k' },
  { corral: 8, driveId: '1ah7NOjm561I3i5PD7bh2iWMMyHrAaJ5u', youtubeId: 'U6lgktmeicI' },
  { corral: 9, driveId: '1TJ-7TWLxTtwaMFo1spk5Xu23XUXvQAmp', youtubeId: 'Ue-YCOsSzHM' },
  { corral: 10, driveId: '1r8MnuQpkFBeGkjRi78QpoxaxBU9xCw5T', youtubeId: 'DjDBYEgNk18' },
  { corral: 11, driveId: '1-p6gQbtlO8Uj7BhJCsjzP6vtMpJkPvKC', youtubeId: 'I17s-jXXgi4' },
  { corral: 12, driveId: '1BEFvXntG4UVVSmPfl60SQXurVo-YYtsU', youtubeId: '2Y8uI2vQFo0' },
  { corral: 13, driveId: '1ZW_tSuCBRWdrWECu24curBjGWjlOOBVi', youtubeId: 'aHR36V6YVMI' },
  { corral: 14, driveId: '1eBStxISecDoMhW0rG8nX9mL2Non7r9zH', youtubeId: '-1CrngIgqLU' },
];

export const VIDEOS_VAQUILLONAS: VideoRemate[] = [
  { corral: 15, driveId: '1wbmRM7xaZzd2f4v6QfHdLPdyEhycWVQD', youtubeId: 'q5PkKUYaDdM' },
  { corral: 16, driveId: '19ghQy8jkcCPxsHtKF6FsHJU3LJcupuql', youtubeId: 'LUDbBpfFm7Y' },
  { corral: 17, driveId: '19dwm1JfJr5Ek0VAybvOyP29XBsPdbTNm' },
  { corral: 18, driveId: '19uIwlYiLjlF4L02sswbryEKdzpaN6LDC' },
  { corral: 19, driveId: '1_3lNL2QyCUqoyJDEe4kNG2kk_90qFCS6' },
  { corral: 20, driveId: '1XrSE6Tg0fUpiAS-32h7S5iW4ajfyH62e' },
  { corral: 21, driveId: '1RHwvEUYsgNofdKaPhzILB11WUI95xmIt' },
  { corral: 22, driveId: '14TkKXVOGhneHw29QNC4zS9ztSjpsU1yY' },
  { corral: 23, driveId: '1K0O6Eg_or-bT-5APuwMmXSfMgqqq7FXm' },
];

/** Corral con dos dígitos, como figura en el catálogo ("07", no "7"). */
export const corralLabel = (v: VideoRemate) => String(v.corral).padStart(2, '0');

/** Título visible del lote, compartido por la tarjeta y el reproductor. */
export const tituloVideo = (v: VideoRemate) => `Corral ${corralLabel(v)}${v.nombre ? ` — ${v.nombre}` : ''}`;

/** Un lote está migrado cuando tiene ID de YouTube. */
export const esYoutube = (v: VideoRemate) => Boolean(v.youtubeId);

/**
 * URL del reproductor embebido.
 *
 * En YouTube arrancamos con autoplay: el usuario ya tocó "Ver video" en la
 * tarjeta, así que pedirle un segundo toque adentro del reproductor sobra. Va
 * de la mano con allow="autoplay" en el iframe, que le delega el permiso. Si el
 * navegador igual lo bloquea (pasa en iOS con sonido), no se rompe nada: queda
 * el póster con el play, como antes.
 *
 * playsinline evita que iOS se lo lleve solo a pantalla completa, y rel=0 deja
 * los relacionados del final dentro del mismo canal en vez de mandar al
 * espectador a videos de terceros.
 *
 * Drive no acepta autoplay, así que ahí no lo pedimos.
 */
export const urlEmbed = (v: VideoRemate) =>
  v.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`
    : `https://drive.google.com/file/d/${v.driveId}/preview`;

/** URL para abrir el video en su sitio (YouTube o Drive), fuera de la página. */
export const urlExterna = (v: VideoRemate) =>
  v.youtubeId ? `https://youtu.be/${v.youtubeId}` : `https://drive.google.com/file/d/${v.driveId}/view`;

/** Texto del botón que abre el video afuera. */
export const textoExterno = (v: VideoRemate) => (v.youtubeId ? 'Ver en YouTube ↗' : 'Abrir en Drive ↗');

/**
 * Miniaturas a probar, en orden. La tarjeta va bajando si alguna falla:
 * maxresdefault no existe para videos subidos en baja resolución.
 */
export const posters = (v: VideoRemate) =>
  v.youtubeId
    ? [`https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg`, `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`]
    : [`https://drive.google.com/thumbnail?id=${v.driveId}&sz=w1600`];
