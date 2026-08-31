import React from 'react';
import type { Metadata } from 'next';
import { SectionTitle } from '../components/ui';
import { C, F } from '../components/theme';
import { VideoGallery } from './VideoGallery';

export const metadata: Metadata = {
  title: 'Videos de los ejemplares — 23° Remate Anual | Cabaña El Retiro',
  description:
    'Mirá los videos de los 23 corrales del 23° Remate Anual de Cabaña El Retiro: toros Braford y Brangus, y vaquillonas de generaciones avanzadas.',
};

export default function VideosDelRematePage() {
  return (
    <div style={{ background: C.white }}>
      {/* Las miniaturas salen de i.ytimg.com y el reproductor de YouTube:
          abrir las conexiones antes de tiempo le saca un par de saltos de red
          a la carga en el celular. */}
      <link rel="preconnect" href="https://i.ytimg.com" />
      <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      <section className="remate-hero" style={{ background: `linear-gradient(120deg, ${C.dark} 0%, ${C.bordo} 68%, #6b2a26 100%)`, textAlign: 'center' }}>
        <SectionTitle as="h1" eyebrow="23° Remate Anual" style={{ marginBottom: '1rem' }}>Videos de los ejemplares</SectionTitle>
        <p style={{ ...F.body, color: 'rgba(255,255,255,.88)', fontSize: '1rem', lineHeight: 1.7, margin: '0 auto', maxWidth: 680 }}>
          Mirá cada lote antes del remate. Tocá el corral que querés conocer y el video se abre a pantalla completa.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.7rem', justifyContent: 'center', marginTop: '1.6rem' }}>
          <a href="#toros" style={{ ...F.display, background: C.gold, borderRadius: '999px', color: C.dark, fontSize: '.78rem', fontWeight: 700, letterSpacing: '.05em', padding: '.65rem 1.05rem', textDecoration: 'none' }}>Ver toros</a>
          <a href="#vaquillonas" style={{ ...F.display, border: `1px solid ${C.gold}`, borderRadius: '999px', color: C.white, fontSize: '.78rem', fontWeight: 700, letterSpacing: '.05em', padding: '.65rem 1.05rem', textDecoration: 'none' }}>Ver vaquillonas</a>
        </div>
      </section>

      <VideoGallery />
    </div>
  );
}
