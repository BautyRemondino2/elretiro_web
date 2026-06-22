'use client';

import React from 'react';
import { C, F } from '../components/theme';
import { Btn, SectionTitle } from '../components/ui';

export default function HistoriaPage() {
  return (
    <div style={{ minHeight: '100vh', background: C.white }}>
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem', alignItems: 'center' }}>
        <div className="reveal" style={{ position: 'relative' }}>
          <img src="/abuelo.jpeg" alt="Historia" style={{ width: '100%', borderRadius: '.6rem', boxShadow: '0 12px 30px rgba(0,0,0,.2)' }} />
          <div style={{ position: 'absolute', bottom: -18, right: -12, background: C.gold, color: C.dark, ...F.display, fontWeight: 700, padding: '.75rem 1.1rem', borderRadius: '.5rem', boxShadow: '0 6px 16px rgba(0,0,0,.25)', fontSize: '.9rem' }}>+30 años de historia</div>
        </div>
        <div className="reveal" style={{ animationDelay: '.12s' }}>
          <SectionTitle align="left" as="h1" eyebrow="Campos y Cabaña El Retiro S.A.">Nuestra Historia</SectionTitle>
          <p style={{ ...F.body, color: '#333', lineHeight: 1.8, textAlign: 'justify', marginTop: 0 }}>
            Mi nombre es Ricardo J. Remondino y junto a mi padre fundamos <strong style={{ color: C.bordo }}>&quot;CAMPOS Y CABAÑA EL RETIRO S.A.&quot;</strong> y desde hace 30 años nos dedicamos a criar y producir Genética BRAFORD de la más alta calidad para nuestro propio REMATE ANUAL y seguir participando en las más importantes exposiciones ganaderas, entre las que se cuentan la <strong style={{ color: C.bordo }}>Exposición Internacional de Palermo</strong>, la <strong style={{ color: C.bordo }}>ExpoBraford Corrientes</strong> y la <strong style={{ color: C.bordo }}>Rural de Palermo</strong>.
          </p>
          <p style={{ ...F.body, color: '#333', lineHeight: 1.8, textAlign: 'justify' }}>
            Nuestra cabaña se encuentra en Carrizales, Est. Clarke, Santa Fe — en el corazón de la región pampeana argentina. Cada año ofrecemos en nuestro remate anual los mejores ejemplares de genética Braford, avalados por los índices DEP más destacados de la raza.
          </p>
          <Btn to="/nuestra-genetica" style={{ marginTop: '.5rem' }}>Ver Nuestra Genética →</Btn>
        </div>
      </div>
    </div>
  );
}
