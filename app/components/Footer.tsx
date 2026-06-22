'use client';

import React from 'react';
import Link from 'next/link';
import { C, F } from './theme';

function ExtLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...F.body, color: C.gold, display: 'block', marginBottom: 6, textDecoration: 'none', fontSize: '.9rem', transition: 'color .2s, padding-left .2s' }}
      onMouseEnter={(e) => { e.currentTarget.style.color = C.white; e.currentTarget.style.paddingLeft = '4px'; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = C.gold; e.currentTarget.style.paddingLeft = '0'; }}
    >
      {children}
    </a>
  );
}

function IntLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      style={{ ...F.body, color: C.gold, display: 'block', marginBottom: 6, textDecoration: 'none', fontSize: '.9rem', transition: 'color .2s, padding-left .2s' }}
      onMouseEnter={(e) => { e.currentTarget.style.color = C.white; e.currentTarget.style.paddingLeft = '4px'; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = C.gold; e.currentTarget.style.paddingLeft = '0'; }}
    >
      {children}
    </Link>
  );
}

const h3 = { ...F.display, color: C.gold, fontWeight: 600, margin: '0 0 .75rem', letterSpacing: '.05em' } as React.CSSProperties;

export default function Footer() {
  return (
    <footer style={{ background: C.bordo, color: C.white }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '2rem', padding: '2.5rem 2rem 0' }}>
        <div>
          <h3 style={h3}>Redes Sociales</h3>
          <ExtLink href="https://www.instagram.com/elretirocabana">↗  Instagram</ExtLink>
          <ExtLink href="https://www.facebook.com/CabanaELRETIRO">↗  Facebook</ExtLink>
        </div>
        <div>
          <h3 style={h3}>Ubicación</h3>
          <p style={{ ...F.body, margin: 0, fontSize: '.875rem', lineHeight: 1.7 }}>Carrizales, Est. Clarke<br />Santa Fe, Argentina 2218</p>
        </div>
        <div>
          <h3 style={h3}>Contacto</h3>
          <p style={{ ...F.body, margin: 0, fontSize: '.875rem', lineHeight: 1.8 }}>Ricardo Javier Remondino<br />+54 9 3404 631877<br />rjremondino@gmail.com</p>
        </div>
        <div>
          <h3 style={h3}>Explorar</h3>
          <IntLink href="/nuestra-genetica">Nuestra Genética</IntLink>
          <IntLink href="/historial-remates">Historial de Remates</IntLink>
          <IntLink href="/contacto">Contacto</IntLink>
        </div>
      </div>
      <div style={{ ...F.body, textAlign: 'center', marginTop: '2.5rem', padding: '1.5rem 1rem', borderTop: '1px solid rgba(184,158,88,.18)', fontSize: '.75rem' }}>
        <p style={{ ...F.display, margin: '0 0 6px', letterSpacing: '.22em', color: C.gold, fontSize: '.85rem' }}>EL PODER DE LA GENÉTICA</p>
        <p style={{ margin: '0 0 4px', opacity: 0.85 }}>Más de 30 años de producción y creando la más alta calidad de genética.</p>
        <p style={{ margin: 0, opacity: 0.6, letterSpacing: '.05em' }}>Todos los derechos reservados | CABAÑA EL RETIRO</p>
      </div>
    </footer>
  );
}
