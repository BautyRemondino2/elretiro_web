import React from 'react';
import { SectionTitle } from '../components/ui';
import { C, F } from '../components/theme';
import { VIDEOS_TOROS, VIDEOS_VAQUILLONAS, type VideoRemate } from '../data/videos-remate';

function VideoCard({ video, categoria }: { video: VideoRemate; categoria: string }) {
  const title = `Corral ${String(video.corral).padStart(2, '0')}${video.nombre ? ` — ${video.nombre}` : ''}`;
  const previewUrl = `https://drive.google.com/file/d/${video.driveId}/preview`;
  const driveUrl = `https://drive.google.com/file/d/${video.driveId}/view`;

  return (
    <article style={{ background: C.white, borderRadius: '.65rem', overflow: 'hidden', border: '1px solid rgba(72,26,26,.14)', boxShadow: '0 5px 18px rgba(45,17,16,.12)' }}>
      <div style={{ aspectRatio: '16/9', background: C.dark, position: 'relative' }}>
        <iframe
          src={previewUrl}
          title={`${title}, ${categoria}`}
          loading="lazy"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ border: 'none', display: 'block', height: '100%', inset: 0, position: 'absolute', width: '100%' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.75rem', padding: '.9rem 1rem' }}>
        <div>
          <p style={{ ...F.display, color: C.gold, fontSize: '.65rem', fontWeight: 700, letterSpacing: '.14em', margin: '0 0 .25rem', textTransform: 'uppercase' }}>{categoria}</p>
          <h3 style={{ ...F.display, color: C.bordo, fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>{title}</h3>
        </div>
        <a href={driveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${title} en Drive`} style={{ ...F.display, border: `1px solid ${C.gold}`, borderRadius: '999px', color: C.bordo, flexShrink: 0, fontSize: '.66rem', fontWeight: 700, letterSpacing: '.04em', padding: '.43rem .62rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Ver en Drive ↗
        </a>
      </div>
    </article>
  );
}

function VideoGroup({ id, eyebrow, title, description, videos, tone = 'light' }: { id: string; eyebrow: string; title: string; description: string; videos: VideoRemate[]; tone?: 'light' | 'cream' }) {
  return (
    <section id={id} style={{ background: tone === 'cream' ? C.cream : C.white, padding: '3.75rem 2rem' }}>
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

      <VideoGroup id="toros" eyebrow="Lotes en venta" title="Toros" description="Videos de los corrales 01 al 14." videos={VIDEOS_TOROS} />
      <VideoGroup id="vaquillonas" eyebrow="Lotes en venta" title="Vaquillonas" description="Videos de los corrales 15 al 23." videos={VIDEOS_VAQUILLONAS} tone="cream" />
    </div>
  );
}
