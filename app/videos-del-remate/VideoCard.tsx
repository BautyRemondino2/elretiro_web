'use client';

import React, { useState } from 'react';
import { C, F } from '../components/theme';
import type { VideoRemate } from '../data/videos-remate';

/**
 * Tarjeta de video con patrón "facade": en reposo mostramos un poster nuestro
 * (miniatura de Drive) con el botón de play de la marca. El iframe de Drive
 * recién se monta al hacer clic.
 *
 * Por qué: 23 iframes de Drive montados de entrada hacen que la página cargue
 * lentísimo, y cada uno pinta su propio chrome (ícono de "abrir en ventana",
 * play negro genérico, barras negras según el encuadre del video). El facade
 * nos devuelve el control visual y deja la carga en un solo pedido de imagen.
 */
export function VideoCard({ video, categoria }: { video: VideoRemate; categoria: string }) {
  const [playing, setPlaying] = useState(false);
  const [hover, setHover] = useState(false);
  const [posterFallo, setPosterFallo] = useState(false);

  const corral = String(video.corral).padStart(2, '0');
  const title = `Corral ${corral}${video.nombre ? ` — ${video.nombre}` : ''}`;
  const poster = `https://drive.google.com/thumbnail?id=${video.driveId}&sz=w1600`;
  const previewUrl = `https://drive.google.com/file/d/${video.driveId}/preview`;
  const driveUrl = `https://drive.google.com/file/d/${video.driveId}/view`;

  return (
    <article
      style={{
        background: C.white,
        borderRadius: '.65rem',
        overflow: 'hidden',
        border: '1px solid rgba(72,26,26,.14)',
        boxShadow: hover ? '0 14px 30px rgba(45,17,16,.22)' : '0 5px 18px rgba(45,17,16,.12)',
        transform: hover && !playing ? 'translateY(-4px)' : 'none',
        transition: 'transform .25s ease, box-shadow .25s ease',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ aspectRatio: '16/9', background: C.dark, position: 'relative', overflow: 'hidden' }}>
        {playing ? (
          <iframe
            src={previewUrl}
            title={`${title}, ${categoria}`}
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ border: 'none', display: 'block', height: '100%', inset: 0, position: 'absolute', width: '100%' }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Reproducir ${title}`}
            style={{
              appearance: 'none',
              background: posterFallo ? `linear-gradient(150deg, ${C.bordo}, ${C.dark})` : C.dark,
              border: 'none',
              cursor: 'pointer',
              display: 'block',
              height: '100%',
              inset: 0,
              padding: 0,
              position: 'absolute',
              width: '100%',
            }}
          >
            {!posterFallo && (
              <img
                src={poster}
                alt=""
                loading="lazy"
                onError={() => setPosterFallo(true)}
                style={{
                  display: 'block',
                  height: '100%',
                  objectFit: 'cover',
                  transform: hover ? 'scale(1.05)' : 'none',
                  transition: 'transform .45s ease',
                  width: '100%',
                }}
              />
            )}
            {/* Velo para que el play siempre tenga contraste sobre el pelaje claro */}
            <span
              style={{
                background: hover
                  ? 'linear-gradient(180deg, rgba(45,17,16,.10), rgba(45,17,16,.42))'
                  : 'linear-gradient(180deg, rgba(45,17,16,.04), rgba(45,17,16,.30))',
                inset: 0,
                position: 'absolute',
                transition: 'background .25s ease',
              }}
            />
            <span
              style={{
                alignItems: 'center',
                background: hover ? C.gold : 'rgba(45,17,16,.62)',
                border: `2px solid ${hover ? C.gold : 'rgba(255,255,255,.85)'}`,
                borderRadius: '50%',
                boxShadow: '0 6px 18px rgba(0,0,0,.3)',
                display: 'flex',
                height: 62,
                justifyContent: 'center',
                left: '50%',
                position: 'absolute',
                top: '50%',
                transform: `translate(-50%,-50%) scale(${hover ? 1.08 : 1})`,
                transition: 'background .25s ease, transform .25s ease, border-color .25s ease',
                width: 62,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill={hover ? C.dark : C.white} style={{ marginLeft: 3 }}>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            {/* Número de corral sobre el poster, para ubicarse de un vistazo */}
            <span
              style={{
                ...F.display,
                background: 'rgba(45,17,16,.72)',
                borderRadius: '999px',
                color: C.gold,
                fontSize: '.62rem',
                fontWeight: 700,
                left: '.7rem',
                letterSpacing: '.12em',
                padding: '.3rem .6rem',
                position: 'absolute',
                top: '.7rem',
              }}
            >
              CORRAL {corral}
            </span>
          </button>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.75rem', padding: '.9rem 1rem' }}>
        <div>
          <p style={{ ...F.display, color: C.gold, fontSize: '.65rem', fontWeight: 700, letterSpacing: '.14em', margin: '0 0 .25rem', textTransform: 'uppercase' }}>{categoria}</p>
          <h3 style={{ ...F.display, color: C.bordo, fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>{title}</h3>
        </div>
        <a
          href={driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ${title} en Drive`}
          style={{ ...F.display, border: `1px solid ${C.gold}`, borderRadius: '999px', color: C.bordo, flexShrink: 0, fontSize: '.66rem', fontWeight: 700, letterSpacing: '.04em', padding: '.43rem .62rem', textDecoration: 'none', whiteSpace: 'nowrap' }}
        >
          Pantalla completa ↗
        </a>
      </div>
    </article>
  );
}
