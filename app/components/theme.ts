import type { CSSProperties } from 'react';

/* Paleta de marca El Retiro */
export const C = {
  gold: '#B89E58',
  goldL: '#d9c06b',
  bordo: '#481a1a',
  dark: '#2d1110',
  nav: '#3a1414',
  white: '#fff',
  cream: '#fff5e6',
  medal: '#fdd9b5',
  green: '#25d366',
  rojo: '#6b1f1f',
} as const;

/* Familias tipográficas (cargadas con next/font vía CSS variables) */
export const F: { display: CSSProperties; body: CSSProperties } = {
  display: { fontFamily: "var(--font-cinzel), 'Cinzel', Georgia, serif" },
  body: { fontFamily: "var(--font-open-sans), 'Open Sans', Arial, sans-serif" },
};
