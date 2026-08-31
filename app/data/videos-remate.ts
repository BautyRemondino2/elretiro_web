export type VideoRemate = {
  corral: number;
  nombre?: string;
  driveId: string;
};

export const VIDEOS_TOROS: VideoRemate[] = [
  { corral: 1, nombre: 'Lautaro', driveId: '1yGC1cvQHs1SyUq_hPkrMq4JkxNMbNaTq' },
  { corral: 2, driveId: '1IARGN9unWjg0FXuW6ck5mXmwtf_bPRWb' },
  { corral: 3, driveId: '1TqgFqWlJGZmXbTW99ZuvGj3Ts4LgTdFM' },
  { corral: 4, driveId: '1JoAc3Z3D5tDXfgGp8L9KMQrAo60s1oyY' },
  { corral: 5, driveId: '1lv50B3b8v2w447fOEDDYhQ1_RimGz06b' },
  { corral: 6, driveId: '1KjiWCJ-di1Ud0ujYUe3kw7OatDDuSlFi' },
  { corral: 7, driveId: '1rgkwPaRrBsrS1cFa47wQyY0O1QFUS1C0' },
  { corral: 8, driveId: '1ah7NOjm561I3i5PD7bh2iWMMyHrAaJ5u' },
  { corral: 9, driveId: '1TJ-7TWLxTtwaMFo1spk5Xu23XUXvQAmp' },
  { corral: 10, driveId: '1r8MnuQpkFBeGkjRi78QpoxaxBU9xCw5T' },
  { corral: 11, driveId: '1-p6gQbtlO8Uj7BhJCsjzP6vtMpJkPvKC' },
  { corral: 12, driveId: '1BEFvXntG4UVVSmPfl60SQXurVo-YYtsU' },
  { corral: 13, driveId: '1ZW_tSuCBRWdrWECu24curBjGWjlOOBVi' },
  { corral: 14, driveId: '1eBStxISecDoMhW0rG8nX9mL2Non7r9zH' },
];

export const VIDEOS_VAQUILLONAS: VideoRemate[] = [
  { corral: 15, driveId: '1wbmRM7xaZzd2f4v6QfHdLPdyEhycWVQD' },
  { corral: 16, driveId: '19ghQy8jkcCPxsHtKF6FsHJU3LJcupuql' },
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

export const drivePoster = (v: VideoRemate) => `https://drive.google.com/thumbnail?id=${v.driveId}&sz=w1600`;
export const drivePreview = (v: VideoRemate) => `https://drive.google.com/file/d/${v.driveId}/preview`;
export const driveView = (v: VideoRemate) => `https://drive.google.com/file/d/${v.driveId}/view`;
