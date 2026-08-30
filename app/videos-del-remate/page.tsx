import React from 'react';
import type { Metadata } from 'next';
import { SectionTitle } from '../components/ui';
import { C, F } from '../components/theme';
import { VideoCard } from './VideoCard';
import { VIDEOS_TOROS, VIDEOS_VAQUILLONAS, type VideoRemate } from '../data/videos-remate';

export const metadata: Metadata = {
  title: 'Videos de los ejemplares — 23° Remate Anual | Cabaña El Retiro',
  description:
    'Mirá los videos de los 23 corrales del 23° Remate Anual de Cabaña El Retiro: toros Braford y Brangus, y vaquillonas de generaciones avanzadas.',
};

function VideoGroup({ id, eyebrow, title, description, videos, tone = 'light' }: { id: string; eyebrow: string; title: string; description: string; videos: VideoRemate[]; tone?: 'light' | 'cream' }) {
  return (
    <section id={id} style={{ background: tone === 'cream' ? C.cream : C.white, padding: '3.75rem 2rem', scrollMarginTop: '5rem' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <SectionTitle eyebrow={eyebrow} align="left" color={C.bordo} style={{ marginBottom: '.9rem' }}>{title}</SectionTitle>
        <p style={{ ...F.body, color: '#5e4c45', fontSize: '.94rem', lineHeight: 1.65, margin: '0 0 1.8rem', maxWidth: 680 }}>{description}</p>
        <div className="remate-video-grid" style={{ display: 'grid', gap: '1.4rem', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
          {videos.map((video) => <VideoCard key={video.driveId} video={video} categoria={title} />)}
        </div>
      </div>
    </section>
  );
}

export default function VideosDelRematePage() {
  return (
    <div style={{ background: C.white }}>
      <section style={{ background: `linear-gradient(120deg, ${C.dark} 0%, ${C.bordo} 68%, #6b2a26 100%)`, padding: '3.4rem 2rem 3.2rem', textAlign: 'center' }}>
        <SectionTitle as="h1" eyebrow="23° Remate Anual" style={{ marginBottom: '1rem' }}>Videos de los ejemplares</SectionTitle>
        <p style={{ ...F.body, color: 'rgba(255,255,255,.88)', fontSize: '1rem', lineHeight: 1.7, margin: '0 auto', maxWidth: 680 }}>
          Mirá cada lote antes del remate. Seleccioná el video del corral que querés conocer y reproducilo directamente desde la página.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.7rem', justifyContent: 'center', marginTop: '1.6rem' }}>
          <a href="#toros" style={{ ...F.display, background: C.gold, borderRadius: '999px', color: C.dark, fontSize: '.78rem', fontWeight: 700, letterSpacing: '.05em', padding: '.65rem 1.05rem', textDecoration: 'none' }}>Ver toros</a>
          <a href="#vaquillonas" style={{ ...F.display, border: `1px solid ${C.gold}`, borderRadius: '999px', color: C.white, fontSize: '.78rem', fontWeight: 700, letterSpacing: '.05em', padding: '.65rem 1.05rem', textDecoration: 'none' }}>Ver vaquillonas</a>
        </div>
      </section>

      <VideoGroup id="toros" eyebrow="Lotes en venta" title="Toros" description={`Videos de los corrales 01 al 14 — ${VIDEOS_TOROS.length} lotes.`} videos={VIDEOS_TOROS} />
      <VideoGroup id="vaquillonas" eyebrow="Lotes en venta" title="Vaquillonas" description={`Videos de los corrales 15 al 23 — ${VIDEOS_VAQUILLONAS.length} lotes.`} videos={VIDEOS_VAQUILLONAS} tone="cream" />
    </div>
  );
}
