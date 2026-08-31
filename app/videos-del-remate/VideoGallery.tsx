'use client';

import React, { useState } from 'react';
import { SectionTitle } from '../components/ui';
import { C, F } from '../components/theme';
import { VideoCard } from './VideoCard';
import { VideoLightbox } from './VideoLightbox';
import { VIDEOS_TOROS, VIDEOS_VAQUILLONAS, type VideoRemate } from '../data/videos-remate';

type Grupo = { id: string; eyebrow: string; titulo: string; descripcion: string; videos: VideoRemate[]; tone: 'light' | 'cream' };

const GRUPOS: Grupo[] = [
  {
    id: 'toros',
    eyebrow: 'Lotes en venta',
    titulo: 'Toros',
    descripcion: `Videos de los corrales 01 al 14 — ${VIDEOS_TOROS.length} lotes.`,
    videos: VIDEOS_TOROS,
    tone: 'light',
  },
  {
    id: 'vaquillonas',
    eyebrow: 'Lotes en venta',
    titulo: 'Vaquillonas',
    descripcion: `Videos de los corrales 15 al 23 — ${VIDEOS_VAQUILLONAS.length} lotes.`,
    videos: VIDEOS_VAQUILLONAS,
    tone: 'cream',
  },
];

/* Lista plana de los 23 corrales: el lightbox navega de corrido con las flechas
   sin importar en qué sección arrancaste. */
const ITEMS = GRUPOS.flatMap((g) => g.videos.map((video) => ({ video, categoria: g.titulo })));
const offsetDe = (id: string) => ITEMS.findIndex((it) => it.video.driveId === GRUPOS.find((g) => g.id === id)!.videos[0].driveId);

export function VideoGallery() {
  const [abierto, setAbierto] = useState<number | null>(null);

  return (
    <>
      {GRUPOS.map((g) => {
        const offset = offsetDe(g.id);
        return (
          <section
            key={g.id}
            id={g.id}
            className="remate-section"
            style={{ background: g.tone === 'cream' ? C.cream : C.white, scrollMarginTop: '5rem' }}
          >
            <div style={{ maxWidth: 1120, margin: '0 auto' }}>
              <SectionTitle eyebrow={g.eyebrow} align="left" color={C.bordo} style={{ marginBottom: '.9rem' }}>{g.titulo}</SectionTitle>
              <p style={{ ...F.body, color: '#5e4c45', fontSize: '.94rem', lineHeight: 1.65, margin: '0 0 1.8rem', maxWidth: 680 }}>{g.descripcion}</p>
              <div className="remate-video-grid" style={{ display: 'grid', gap: '1.4rem', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
                {g.videos.map((video, i) => (
                  <VideoCard key={video.driveId} video={video} categoria={g.titulo} onOpen={() => setAbierto(offset + i)} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {abierto !== null && (
        <VideoLightbox items={ITEMS} index={abierto} onIndex={setAbierto} onClose={() => setAbierto(null)} />
      )}
    </>
  );
}
