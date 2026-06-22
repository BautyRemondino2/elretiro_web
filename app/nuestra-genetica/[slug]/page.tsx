'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { CSSProperties } from 'react';
import { C, F } from '../../components/theme';
import { Btn, MedalBadge, SectionTitle } from '../../components/ui';
import { ANIMALES, DEP_LABELS } from '../../data/animales';

export default function AnimalDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? 'gaucho';
  const a = ANIMALES[slug] || ANIMALES.gaucho;
  const depKeys = Object.keys(a.deps);
  const cell: CSSProperties = { ...F.body, border: `1px solid ${C.gold}`, padding: '10px 14px' };

  return (
    <div style={{ minHeight: '100vh', background: C.dark, color: C.white, paddingBottom: '3rem' }}>
      {/* breadcrumb */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1.25rem 2rem 0' }}>
        <span style={{ ...F.body, fontSize: '.85rem', color: 'rgba(255,255,255,.6)' }}>
          <Link href="/nuestra-genetica" style={{ color: C.gold, textDecoration: 'none' }}>Genética</Link>
          &nbsp;/&nbsp; {a.tipo} &nbsp;/&nbsp; <span style={{ color: C.white }}>{a.nombre}</span>
        </span>
      </div>

      <div className="two-col reveal" style={{ maxWidth: 1200, margin: '0 auto', padding: '1.5rem 2rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'flex-start' }}>
        <img src={a.imagen} alt={a.nombre} style={{ width: '100%', borderRadius: '.6rem', boxShadow: '0 0 24px rgba(0,0,0,.45)', border: '1px solid rgba(184,158,88,.3)' }} />
        <div>
          <p style={{ ...F.display, color: C.gold, letterSpacing: '.18em', textTransform: 'uppercase', fontSize: '.74rem', margin: '0 0 .5rem' }}>{a.tipo}</p>
          <h1 style={{ ...F.display, color: C.gold, fontSize: 'clamp(1.8rem,5vw,2.6rem)', fontWeight: 700, letterSpacing: '.03em', margin: '0 0 1rem' }}>{a.nombre}</h1>
          {a.medallas.length > 0 && (
            <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {a.medallas.map((m, i) => <MedalBadge key={i}>{m}</MedalBadge>)}
            </div>
          )}
          <div style={{ ...F.body, display: 'grid', gridTemplateColumns: '1fr 1fr', fontSize: '.95rem', marginBottom: '1.5rem', gap: '.5rem 1rem' }}>
            {([['F.N.', a.fn], ['SENASA', a.senasa], ['HBA', a.hba], ['ADN', a.adn]] as [string, string][]).map(([k, val]) => (
              <p key={k} style={{ margin: 0 }}><span style={{ ...F.display, fontWeight: 700, color: C.gold }}>{k} </span>{val}</p>
            ))}
          </div>
          <div style={{ ...F.body, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.85rem', borderTop: '1px solid rgba(184,158,88,.4)', paddingTop: '1.25rem', marginBottom: '1.75rem' }}>
            {([['PAN', `${a.pan} kg`], ['FRAME', a.frame], ['PAD', `${a.pad} kg`], ['C.E.', `${a.ce} cm`], ['PAF', `${a.paf} kg`], ['Peso', `${a.peso} kg`]] as [string, string][]).map(([k, val]) => (
              <div key={k} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(184,158,88,.25)', borderRadius: '.4rem', padding: '.6rem .75rem' }}>
                <div style={{ ...F.display, fontWeight: 700, color: C.gold, fontSize: '.72rem', letterSpacing: '.08em' }}>{k}</div>
                <div style={{ fontSize: '1rem', marginTop: 2 }}>{val}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Btn variant="pill">▶ Ver Video</Btn>
            <Btn variant="outline">Ver DEPs</Btn>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 2rem' }}>
        <SectionTitle align="left" style={{ marginTop: '3rem' }}>Descripción</SectionTitle>
        <p style={{ ...F.body, margin: '0 0 1rem', fontSize: '1.08rem', lineHeight: 1.8, color: 'rgba(255,255,255,.92)', textAlign: 'justify' }}>{a.descripcion}</p>
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 2rem' }}>
        <SectionTitle align="left" style={{ marginTop: '2.5rem' }}>DEPs</SectionTitle>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', color: C.white, textAlign: 'center', width: '100%' }}>
            <thead>
              <tr>
                <th style={{ ...F.display, fontWeight: 700, color: C.gold, ...cell, textAlign: 'left' }}>Característica</th>
                {depKeys.map((k) => (
                  <th key={k} style={{ ...F.display, fontWeight: 700, color: C.gold, ...cell }}>
                    <div>{k}</div>
                    <div style={{ ...F.body, fontWeight: 400, fontSize: '.66rem', opacity: 0.7, marginTop: 2 }}>{DEP_LABELS[k]}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {([['dep', 'DEP'], ['prec', 'Precisión'], ['ranking', 'Ranking'], ['prom', 'Prom. raza']] as [keyof typeof a.deps[string], string][]).map(([row, lbl]) => (
                <tr key={row}>
                  <td style={{ ...F.display, fontWeight: 700, color: C.gold, ...cell, textAlign: 'left' }}>{lbl}</td>
                  {depKeys.map((k) => <td key={k} style={cell}>{a.deps[k][row]}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...F.body, opacity: 0.55, fontSize: '.82rem', marginTop: '.75rem' }}>Todos los datos están respaldados por la Asociación BRAFORD Argentina.</p>
      </div>

      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 2rem' }}>
        <SectionTitle align="left" style={{ marginTop: '2.5rem' }}>Árbol Genealógico</SectionTitle>
        <img src="/producto/arboles/arbol-vicky.png" alt="Árbol genealógico" style={{ display: 'block', width: '100%', maxWidth: 680, margin: '0 auto', background: 'rgba(255,255,255,.03)', borderRadius: '.5rem', padding: '1rem' }} />
      </div>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <Btn to="/nuestra-genetica" variant="outline">← Volver a Genética</Btn>
      </div>
    </div>
  );
}
