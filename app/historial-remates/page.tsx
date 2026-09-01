'use client';

import React, { useState } from 'react';
import { C, F } from '../components/theme';
import { SectionTitle } from '../components/ui';

type Catalogo = {
  year: number;
  file: string;
  /** El catálogo del remate en curso: se destaca y se rotula "Actual". */
  actual?: boolean;
  /** Aviso de peso: muchos compradores lo abren desde el campo, con datos móviles. */
  peso?: string;
};

const CATALOGOS: Catalogo[] = [
  { year: 2026, file: 'CATALOGO 2026.pdf', actual: true, peso: '53 MB' },
  { year: 2025, file: 'CATALOGO 2025.pdf' },
  { year: 2024, file: 'CATALOGO 2024_compressed.pdf' },
  { year: 2023, file: 'CATALOGO 2023-comprimido.pdf' },
  { year: 2022, file: 'CATALOGO 2022_compressed.pdf' },
  { year: 2021, file: 'CATALOGO 2021.pdf' },
  { year: 2020, file: 'CATALOGO 2020.pdf' },
  { year: 2019, file: 'CATALOGO 2019_compressed.pdf' },
  { year: 2016, file: 'CATALOGO 2016.pdf' },
  { year: 2014, file: 'CATALOGO 2014.pdf' },
  { year: 2012, file: 'CATALOGO 2012.pdf' },
  { year: 2011, file: 'CATALOGO 2011.pdf' },
  { year: 2010, file: 'CATALOGO 2010.pdf' },
];

function CatTile({ year, file, actual, peso }: Catalogo) {
  const [h, setH] = useState(false);
  return (
    <a
      href={`/catalogos/${encodeURIComponent(file)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir el catálogo del remate ${year} (PDF${peso ? `, ${peso}` : ''})`}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ textDecoration: 'none', borderRadius: '.5rem', overflow: 'hidden', boxShadow: h ? '0 12px 26px rgba(0,0,0,.18)' : '0 2px 8px rgba(0,0,0,.1)', transition: 'transform .25s, box-shadow .25s', transform: h ? 'translateY(-4px)' : 'none', display: 'block', background: '#f3f3f3', outline: actual ? `2px solid ${C.gold}` : 'none', outlineOffset: actual ? 2 : 0 }}
    >
      {/* overflow:hidden es necesario: la cinta "Ver catálogo" descansa fuera del
          borde inferior (translateY(100%)) y sube al hacer hover. Sin recorte se
          apoya sobre el pie de la tarjeta y tapa el "Catálogo {año}". */}
      <div style={{ aspectRatio: '3/4', background: `linear-gradient(150deg,${C.bordo} 0%,${C.dark} 100%)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <img src="/logo.png" alt="" style={{ width: 46, opacity: 0.85, marginBottom: 8 }} />
        <span style={{ ...F.display, color: C.gold, fontSize: '1.6rem', fontWeight: 700 }}>{year}</span>
        <span style={{ ...F.body, color: 'rgba(255,255,255,.6)', fontSize: '.66rem', letterSpacing: '.12em', marginTop: 4, textTransform: 'uppercase' }}>Remate Anual</span>
        {actual && (
          <span style={{ position: 'absolute', top: '.5rem', left: '.5rem', background: C.gold, color: C.dark, ...F.display, fontWeight: 700, fontSize: '.6rem', letterSpacing: '.12em', padding: '.25rem .5rem', borderRadius: '999px' }}>ACTUAL</span>
        )}
        <span style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(184,158,88,.95)', color: C.dark, ...F.display, fontWeight: 700, fontSize: '.78rem', padding: '.4rem', textAlign: 'center', transform: h ? 'translateY(0)' : 'translateY(100%)', transition: 'transform .25s' }}>Ver catálogo ↗</span>
      </div>
      <div style={{ padding: '.7rem', textAlign: 'center', ...F.body, fontWeight: 600, color: C.rojo, fontSize: '.85rem' }}>
        Catálogo {year}
        {peso && <span style={{ display: 'block', fontWeight: 400, color: '#8a7268', fontSize: '.7rem', marginTop: '.15rem' }}>PDF · {peso}</span>}
      </div>
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
          El del 23° Remate, del 4 de septiembre de 2026, está primero.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(170px,1fr))', gap: 22, padding: '2.5rem 2rem 0', maxWidth: 1000, margin: '0 auto' }}>
        {CATALOGOS.map((c) => <CatTile key={c.year} {...c} />)}
      </div>
    </div>
  );
}
