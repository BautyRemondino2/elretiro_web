'use client';

import React, { useEffect, useState } from 'react';
import { C, F } from '../components/theme';
import { posters, tituloVideo, type VideoRemate } from '../data/videos-remate';

/**
 * Tarjeta de video con patrón "facade": mostramos la miniatura con el botón de
 * play de la marca, y el reproductor recién se monta —en el lightbox— al hacer
 * clic.
 *
 * Por qué: 23 iframes de YouTube montados de entrada hacen que la página cargue
 * lentísimo (cada uno se trae su propio player), y encima cada uno pinta su
 * chrome. El facade nos devuelve el control visual y deja la carga de la grilla
 * en un solo pedido de imagen por tarjeta.
 */
export function VideoCard({ video, categoria, onOpen }: { video: VideoRemate; categoria: string; onOpen: () => void }) {
  const [hover, setHover] = useState(false);
  /* Índice de la miniatura en uso; si falla pasamos a la siguiente y,
     agotadas todas, al degradé de marca. */
  const [posterIdx, setPosterIdx] = useState(0);
  const [conHover, setConHover] = useState(false);

  /* En touch el navegador dispara mouseenter al tocar y el estado queda pegado
     (tarjeta levantada, play dorado) hasta que tocás otra cosa. Sólo activamos
     los efectos de hover donde hay puntero real. */
  useEffect(() => {
    setConHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  const activo = hover && conHover;
  const candidatos = posters(video);
  const poster = candidatos[posterIdx];
  const title = tituloVideo(video);

  return (
    <article
      style={{
        background: C.white,
        borderRadius: '.65rem',
        overflow: 'hidden',
        border: '1px solid rgba(72,26,26,.14)',
        boxShadow: activo ? '0 14px 30px rgba(45,17,16,.22)' : '0 5px 18px rgba(45,17,16,.12)',
        transform: activo ? 'translateY(-4px)' : 'none',
        transition: 'transform .25s ease, box-shadow .25s ease',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Reproducir ${title}`}
        style={{
          appearance: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'block',
          padding: 0,
          textAlign: 'left',
          width: '100%',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <div style={{ aspectRatio: '16/9', background: poster ? C.dark : `linear-gradient(150deg, ${C.bordo}, ${C.dark})`, overflow: 'hidden', position: 'relative', width: '100%' }}>
          {poster && (
            <img
              src={poster}
              alt=""
              loading="lazy"
              onError={() => setPosterIdx((i) => i + 1)}
              style={{
                display: 'block',
                height: '100%',
                objectFit: 'cover',
                transform: activo ? 'scale(1.05)' : 'none',
                transition: 'transform .45s ease',
                width: '100%',
              }}
            />
          )}
          {/* Velo para que el play siempre tenga contraste sobre el pelaje claro */}
          <span
            style={{
              background: activo
                ? 'linear-gradient(180deg, rgba(45,17,16,.10), rgba(45,17,16,.42))'
                : 'linear-gradient(180deg, rgba(45,17,16,.04), rgba(45,17,16,.30))',
              inset: 0,
              position: 'absolute',
              transition: 'background .25s ease',
            }}
          />
          <span
            className="vcard-play"
            style={{
              alignItems: 'center',
              background: activo ? C.gold : 'rgba(45,17,16,.62)',
              border: `2px solid ${activo ? C.gold : 'rgba(255,255,255,.85)'}`,
              borderRadius: '50%',
              boxShadow: '0 6px 18px rgba(0,0,0,.3)',
              display: 'flex',
              justifyContent: 'center',
              left: '50%',
              position: 'absolute',
              top: '50%',
              transform: `translate(-50%,-50%) scale(${activo ? 1.08 : 1})`,
              transition: 'background .25s ease, transform .25s ease, border-color .25s ease',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill={activo ? C.dark : C.white} style={{ marginLeft: 3 }} aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>

        <div style={{ alignItems: 'center', display: 'flex', gap: '.75rem', justifyContent: 'space-between', padding: '.9rem 1rem' }}>
          <div style={{ minWidth: 0 }}>
            <p style={{ ...F.display, color: C.gold, fontSize: '.65rem', fontWeight: 700, letterSpacing: '.14em', margin: '0 0 .25rem', textTransform: 'uppercase' }}>{categoria}</p>
            <h3 style={{ ...F.display, color: C.bordo, fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>{title}</h3>
          </div>
          <span style={{ ...F.display, border: `1px solid ${C.gold}`, borderRadius: '999px', color: C.bordo, flexShrink: 0, fontSize: '.66rem', fontWeight: 700, letterSpacing: '.04em', padding: '.43rem .62rem', whiteSpace: 'nowrap' }}>
            Ver video ▸
          </span>
        </div>
      </button>
    </article>
  );
}
