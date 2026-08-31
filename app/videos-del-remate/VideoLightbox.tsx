'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { C, F } from '../components/theme';
import { drivePreview, driveView, tituloVideo, type VideoRemate } from '../data/videos-remate';

/**
 * Reproductor a pantalla completa (patrón lightbox, como el embed de YouTube).
 *
 * Por qué no se reproduce dentro de la tarjeta: en el celular la tarjeta mide
 * ~350 px y el video quedaba diminuto. Sacándolo a un overlay usa todo el ancho
 * de la pantalla y el alto se calcula contra el viewport.
 *
 * El encuadre (16:9 exacto) lo maneja .vlb-player/.vlb-frame en globals.css.
 */

/**
 * Ancho a partir del cual el reproductor de Drive se comporta bien.
 *
 * Por debajo de ~400 px Drive cambia a un layout compacto que monta una barra
 * propia de ~40-48 px ARRIBA del video: el video se corre hacia abajo, queda
 * aplastado y se recorta. Y el póster previo, más abajo de ~560 px, lo escala
 * como cover y le come los bordes (se pierden el número de corral y los DEPs).
 * En el celular el reproductor mide ~371 px, o sea que caía justo en la zona mala.
 *
 * En vez de reservarle alto a esa barra —que sólo existe en pantallas chicas y
 * cuyo alto varía— nunca le damos a Drive un viewport chico: montamos el iframe
 * a 640 px y lo achicamos con transform:scale hasta el ancho real. Drive cree
 * que tiene 640 px, usa el layout bueno, y nosotros lo vemos del tamaño que
 * corresponde. Medido: banda de 0 px arriba y abajo, y el video ocupa la caja
 * entera a 16:9. Cuando la caja ya es más ancha que 640 px (desktop) no se
 * escala nada, para no reescalar de más.
 */
const ANCHO_BASE = 640;

type Item = { video: VideoRemate; categoria: string };

export function VideoLightbox({ items, index, onClose, onIndex }: { items: Item[]; index: number; onClose: () => void; onIndex: (i: number) => void }) {
  const [montado, setMontado] = useState(false);
  useEffect(() => setMontado(true), []);

  /* Escala del iframe: ver ANCHO_BASE. Medimos la caja real y, si es más
     angosta que 640 px, montamos el iframe a 640 y lo achicamos. */
  const frameRef = useRef<HTMLDivElement>(null);
  const [caja, setCaja] = useState({ ancho: ANCHO_BASE, escala: 1 });
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const medir = () => {
      const ancho = el.clientWidth;
      if (!ancho) return;
      const base = Math.max(ancho, ANCHO_BASE);
      setCaja({ ancho: base, escala: ancho / base });
    };
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
    // depende de `montado`: en el primer render devolvemos null (el portal todavía
    // no existe) y frameRef.current es null. Con deps [] el observer nunca se
    // llegaba a enganchar y la escala se quedaba en 1.
  }, [montado]);

  const actual = items[index];
  const anterior = useCallback(() => onIndex((index - 1 + items.length) % items.length), [index, items.length, onIndex]);
  const siguiente = useCallback(() => onIndex((index + 1) % items.length), [index, items.length, onIndex]);

  // Teclado: Esc cierra y las flechas recorren los corrales sin volver a la grilla
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') anterior();
      else if (e.key === 'ArrowRight') siguiente();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, anterior, siguiente]);

  // Bloqueamos el scroll del fondo mientras el overlay está abierto
  useEffect(() => {
    const previo = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previo; };
  }, []);

  if (!montado || !actual) return null;

  const titulo = tituloVideo(actual.video);

  const navBtn: React.CSSProperties = {
    ...F.display,
    alignItems: 'center',
    background: 'rgba(255,255,255,.08)',
    border: '1px solid rgba(184,158,88,.55)',
    borderRadius: '999px',
    color: C.white,
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: '.72rem',
    fontWeight: 700,
    gap: '.4rem',
    letterSpacing: '.06em',
    padding: '.55rem .95rem',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };

  return createPortal(
    <div
      className="vlb-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={titulo}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="vlb-bar">
        <div style={{ minWidth: 0 }}>
          <p style={{ ...F.display, color: C.gold, fontSize: '.6rem', fontWeight: 700, letterSpacing: '.16em', margin: '0 0 .2rem', textTransform: 'uppercase' }}>
            {actual.categoria} · {index + 1} de {items.length}
          </p>
          <h2 className="vlb-titulo" style={{ ...F.display, color: C.white, fontWeight: 700, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{titulo}</h2>
        </div>
        <button type="button" onClick={onClose} aria-label="Cerrar video" className="vlb-cerrar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div className="vlb-stage">
        <div className="vlb-player">
          <div className="vlb-frame" ref={frameRef}>
            {/* key = driveId: al cambiar de corral remontamos el iframe en vez de
                reusarlo, si no Drive se queda con el video anterior cargado */}
            <iframe
              key={actual.video.driveId}
              src={drivePreview(actual.video)}
              title={titulo}
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{
                height: Math.round((caja.ancho * 9) / 16),
                transform: `scale(${caja.escala})`,
                width: caja.ancho,
              }}
            />
          </div>
        </div>
      </div>

      <div className="vlb-bar vlb-bar-pie">
        <button type="button" onClick={anterior} style={navBtn} aria-label="Corral anterior">← Anterior</button>
        <a href={driveView(actual.video)} target="_blank" rel="noopener noreferrer" style={{ ...navBtn, borderColor: C.gold, color: C.gold }}>
          Abrir en Drive ↗
        </a>
        <button type="button" onClick={siguiente} style={navBtn} aria-label="Corral siguiente">Siguiente →</button>
      </div>
    </div>,
    document.body,
  );
}
