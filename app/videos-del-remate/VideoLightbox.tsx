'use client';

import React, { useCallback, useEffect, useState } from 'react';
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
 * El encuadre (16:9 exacto, sin reservarle alto de más al reproductor) lo maneja
 * .vlb-player/.vlb-frame en globals.css, donde está explicado por qué.
 */

type Item = { video: VideoRemate; categoria: string };

export function VideoLightbox({ items, index, onClose, onIndex }: { items: Item[]; index: number; onClose: () => void; onIndex: (i: number) => void }) {
  const [montado, setMontado] = useState(false);
  useEffect(() => setMontado(true), []);

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
          <div className="vlb-frame">
            {/* key = driveId: al cambiar de corral remontamos el iframe en vez de
                reusarlo, si no Drive se queda con el video anterior cargado */}
            <iframe
              key={actual.video.driveId}
              src={drivePreview(actual.video)}
              title={titulo}
              allow="autoplay; fullscreen"
              allowFullScreen
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
