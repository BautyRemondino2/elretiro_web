'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { C, F } from '../components/theme';
import { Btn, SectionTitle } from '../components/ui';
import { TOROS, VACAS, type Animal } from '../data/animales';

function AnimalTile({ a }: { a: Animal }) {
  const [h, setH] = useState(false);
  const isCampeon = a.tag.includes('Campeón') || a.tag.includes('Campeona');
  return (
    <Link
      href={`/nuestra-genetica/${a.slug}`}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'transform .25s', transform: h ? 'translateY(-4px)' : 'none' }}
    >
      <div style={{ width: '100%', borderRadius: '.5rem', overflow: 'hidden', boxShadow: h ? '0 14px 30px rgba(0,0,0,.18)' : '0 2px 8px rgba(0,0,0,.1)', transition: 'box-shadow .25s', position: 'relative' }}>
        <img src={a.imagen} alt={a.nombre} style={{ width: '100%', display: 'block', transition: 'transform .45s', transform: h ? 'scale(1.05)' : 'none' }} />
        <span style={{ position: 'absolute', top: 12, left: 12, background: isCampeon ? C.medal : 'rgba(72,26,26,.92)', color: isCampeon ? C.dark : C.white, padding: '.25rem .7rem', borderRadius: '999px', fontSize: '.72rem', fontWeight: 'bold', ...F.body }}>{a.tag}</span>
      </div>
      <h3 style={{ ...F.display, color: C.bordo, fontSize: '1.05rem', fontWeight: 700, letterSpacing: '.03em', marginTop: '1rem', marginBottom: 0 }}>{a.nombre}</h3>
      <p style={{ ...F.body, color: h ? C.gold : C.bordo, fontWeight: 600, fontSize: '.9rem', marginTop: '.4rem', transition: 'color .2s' }}>Leer más {h ? '→' : '›'}</p>
    </Link>
  );
}

export default function GeneticaPage() {
  const [tab, setTab] = useState<'toros' | 'donantes'>('toros');
  const animals = tab === 'toros' ? TOROS : VACAS;
  return (
    <div style={{ minHeight: '100vh', background: C.white, paddingBottom: '3rem' }}>
      <div style={{ background: `linear-gradient(180deg, ${C.bordo}, ${C.dark})`, padding: '3rem 1.5rem 2.5rem', textAlign: 'center' }}>
        <SectionTitle as="h1" eyebrow="El corazón de nuestro trabajo" style={{ margin: 0 }}>Nuestra Genética</SectionTitle>
        <p style={{ ...F.body, color: 'rgba(255,255,255,.88)', maxWidth: 720, margin: '1.25rem auto 0', lineHeight: 1.7 }}>
          En El Retiro, la genética es el corazón de nuestro trabajo. Nuestra pasión por la mejora genética nos impulsa a ofrecer lo mejor en cada remate, garantizando animales con características excepcionales.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0 1rem' }}>
        {([['Toros Padres', 'toros'], ['Donantes', 'donantes']] as const).map(([lbl, val]) => (
          <Btn key={val} variant="ghost" onClick={() => setTab(val)} style={tab === val ? { background: C.gold, color: '#1f1f1f' } : {}}>
            {lbl}
          </Btn>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '.5rem 1.5rem 2rem' }}>
        <img src="/divisor.png" alt="" style={{ maxWidth: 560, width: '100%', opacity: 0.85 }} />
      </div>

      <div className="gal-3 reveal-in" key={tab} style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem', padding: '0 2rem' }}>
        {animals.map((a, i) => <AnimalTile key={i} a={a} />)}
      </div>
    </div>
  );
}
