'use client';

import React, { useState } from 'react';
import { C, F } from '../components/theme';
import { SectionTitle } from '../components/ui';

const CATALOGOS: { year: number; file: string }[] = [
  { year: 2025, file: 'CATALOGO 2025.pdf' },
  { year: 2024, file: 'CATALOGO 2024_compressed.pdf' },
  { year: 2023, file: 'CATALOGO 2023-comprimido.pdf' },
  { year: 2022, file: 'CATALOGO 2022_compressed.pdf' },
  { year: 2021, file: 'CATALOGO 2021.pdf' },
  { year: 2020, file: 'CATALOGO 2020.pdf' },
  { year: 2019, file: 'CATALOGO 2019_compressed.pdf' },
  { year: 2016, file: 'CATALOGO 2016.pdf' },
  { year: 2012, file: 'CATALOGO 2012.pdf' },
  { year: 2011, file: 'CATALOGO 2011.pdf' },
  { year: 2010, file: 'CATALOGO 2010.pdf' },
];

function CatTile({ year, file }: { year: number; file: string }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={`/catalogos/${encodeURIComponent(file)}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ textDecoration: 'none', borderRadius: '.5rem', overflow: 'hidden', boxShadow: h ? '0 12px 26px rgba(0,0,0,.18)' : '0 2px 8px rgba(0,0,0,.1)', transition: 'transform .25s, box-shadow .25s', transform: h ? 'translateY(-4px)' : 'none', display: 'block', background: '#f3f3f3' }}
    >
      <div style={{ aspectRatio: '3/4', background: `linear-gradient(150deg,${C.bordo} 0%,${C.dark} 100%)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <img src="/logo.png" alt="" style={{ width: 46, opacity: 0.85, marginBottom: 8 }} />
        <span style={{ ...F.display, color: C.gold, fontSize: '1.6rem', fontWeight: 700 }}>{year}</span>
        <span style={{ ...F.body, color: 'rgba(255,255,255,.6)', fontSize: '.66rem', letterSpacing: '.12em', marginTop: 4, textTransform: 'uppercase' }}>Remate Anual</span>
        <span style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(184,158,88,.95)', color: C.dark, ...F.display, fontWeight: 700, fontSize: '.78rem', padding: '.4rem', textAlign: 'center', transform: h ? 'translateY(0)' : 'translateY(100%)', transition: 'transform .25s' }}>Ver catálogo ↗</span>
      </div>
      <div style={{ padding: '.7rem', textAlign: 'center', ...F.body, fontWeight: 600, color: C.rojo, fontSize: '.85rem' }}>Catálogo {year}</div>
    </a>
  );
}

export default function HistorialPage() {
  return (
    <div style={{ minHeight: '100vh', background: C.white, paddingBottom: '3rem' }}>
      <div style={{ background: `linear-gradient(180deg, ${C.bordo}, ${C.dark})`, padding: '3rem 1.5rem 2.5rem', textAlign: 'center' }}>
        <SectionTitle as="h1" eyebrow="Una vida de trabajo y tradición" style={{ margin: 0 }}>Historial de Remates</SectionTitle>
        <p style={{ ...F.body, color: 'rgba(255,255,255,.88)', maxWidth: 720, margin: '1.25rem auto 0', lineHeight: 1.7 }}>
          Recorré la historia de nuestros remates a través de los catálogos originales de cada año.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(170px,1fr))', gap: 22, padding: '2.5rem 2rem 0', maxWidth: 1000, margin: '0 auto' }}>
        {CATALOGOS.map((c) => <CatTile key={c.year} year={c.year} file={c.file} />)}
      </div>
    </div>
  );
}
