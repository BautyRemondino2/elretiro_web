'use client';

import React from 'react';
import Link from 'next/link';
import { C, F } from './components/theme';
import { Btn, SectionTitle } from './components/ui';

const STATS: [string, string][] = [
  ['+30', 'Años de historia'],
  ['1989', 'Año de fundación'],
  ['23°', 'Remate anual'],
  ['Pioneros', 'De las primeras cabañas Braford del país'],
];

/* Panel translúcido sobre fondo oscuro (mismo patrón que la ficha del animal) */
const panel: React.CSSProperties = {
  background: 'rgba(255,255,255,.04)',
  border: '1px solid rgba(184,158,88,.28)',
  borderRadius: '.6rem',
};

/** Preofertas del 23° Remate en Rosgan Net (allí es el remate 1996). */
const URL_PREOFERTAS =
  'https://app.rosgannet.com.ar/remate/1996?remateName=23%C2%B0%20Remate%20Anual%20Caba%C3%B1a%20el%20Retiro&location=Sociedad%20Rural%20de%20San%20Justo&type=lote';

/* Datos del 23° Remate Anual (folleto 2026) */
const OFERTA: [string, string][] = [
  ['30', 'Toros Braford'],
  ['10', 'Toros Brangus'],
  ['60', 'Vientres Braford/Brangus de generaciones avanzadas'],
];

/* Solo lo que el hero no dice (fecha y lugar ya están arriba) */
const REMATE = [
  { icon: '📡', label: 'Modalidad', value: 'Remate presencial y vía streaming' },
  { icon: '🤝', label: 'Plazo', value: '90 días machos / 60 días hembras' },
];

const ORGANIZAN = [
  { casa: 'Cabaña «El Retiro»', persona: 'Ricardo Remondino', tel: '3404 631877' },
  { casa: 'Guillermo Lehmann', persona: 'Gabriel Defina', tel: '3483 451147' },
];

const INVITADAS = [
  { casa: 'Doña Teresa', persona: 'Mario Dura', tel: '3401 43-5474' },
  { casa: 'La Morocha', persona: 'Ricardo Marinelli', tel: '3584 02-6810' },
];

const GALLERY = [
  { img: '/remates.jpg', title: 'Historial de Remates', desc: 'Catálogos originales de cada año, desde 2010.', href: '/historial-remates' },
  { img: '/genetica.jpg', title: 'Nuestra Genética', desc: 'Toros padres y donantes con DEPs de elite.', href: '/nuestra-genetica' },
  { img: '/prensa.jpg', title: 'Prensa', desc: 'Entrevistas y notas en medios del agro.', href: '/prensa' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative', minHeight: 620, backgroundImage: `linear-gradient(180deg, rgba(45,17,16,.55) 0%, rgba(45,17,16,.35) 45%, rgba(45,17,16,.78) 100%), url('/foto_home.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-row" style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '2.5rem', alignItems: 'center', minHeight: 620 }}>
          <div className="reveal" style={{ flex: 1, animationDelay: '.05s' }}>
            <img src="/flyer_remate.jpg" alt="Flyer Remate" style={{ width: '100%', borderRadius: '.6rem', boxShadow: '0 12px 36px rgba(0,0,0,.5)', border: '1px solid rgba(184,158,88,.4)' }} />
          </div>
          <div className="reveal" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.1rem', animationDelay: '.18s' }}>
            <p style={{ ...F.display, color: '#e8cf7e', fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', fontSize: '.92rem', margin: 0, textShadow: '0 2px 8px rgba(0,0,0,.85), 0 0 2px rgba(0,0,0,.9)' }}>23° Remate Anual</p>
            <h1 style={{ ...F.display, color: C.white, fontWeight: 700, fontSize: 'clamp(1.8rem,5vw,2.8rem)', lineHeight: 1.15, margin: 0, textShadow: '0 2px 16px rgba(0,0,0,.5)' }}>El poder de la genética Braford</h1>
            <div style={{ borderLeft: `3px solid ${C.gold}`, paddingLeft: '.9rem' }}>
              <p style={{ ...F.display, color: C.white, fontWeight: 700, fontSize: 'clamp(1.05rem,3.2vw,1.3rem)', margin: 0, letterSpacing: '.03em', textShadow: '0 2px 10px rgba(0,0,0,.6)' }}>Viernes 4 de septiembre de 2026</p>
              <p style={{ ...F.body, color: 'rgba(255,255,255,.9)', fontSize: '.92rem', margin: '.3rem 0 0', textShadow: '0 2px 8px rgba(0,0,0,.7)' }}>Sociedad Rural San Justo · Rut. Nac. 11 km 565,5</p>
            </div>
            <p style={{ ...F.body, color: 'rgba(255,255,255,.9)', fontSize: '1rem', lineHeight: 1.6, margin: '0 0 .5rem', maxWidth: 420 }}>Seguí el remate en vivo, mirá los videos y accedé al catálogo completo de nuestros ejemplares.</p>
            <Btn href="https://www.youtube.com/live/3WHPPliIBCo" size="lg" style={{ alignSelf: 'flex-start' }}>🔴 Ver Streaming en Vivo</Btn>
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
              <Btn to="/videos-del-remate" variant="outline">🎬 Ver videos de los ejemplares</Btn>
              <Btn href="/catalogos/CATALOGO%202026.pdf" variant="outline">📄 Catálogo del Remate</Btn>
              <Btn href={URL_PREOFERTAS} variant="outline">📢 Ver PREOFERTAS</Btn>
            </div>
          </div>
        </div>
        <div className="hero-logos" style={{ position: 'absolute', right: '1.75rem', bottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.1rem', zIndex: 3 }}>
          <img src="/logos/asociacion-braford.png" alt="Asociación Braford Argentina" title="Asociación Braford Argentina" style={{ height: 86, width: 'auto', filter: 'drop-shadow(0 2px 10px rgba(0,0,0,.6))' }} />
          <img src="/logos/sociedad-rural-argentina.png" alt="Sociedad Rural Argentina" title="Sociedad Rural Argentina" style={{ height: 86, width: 'auto', filter: 'drop-shadow(0 2px 10px rgba(0,0,0,.6))' }} />
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: C.dark, padding: '1.75rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'space-around', gap: '1.5rem', flexWrap: 'wrap', textAlign: 'center' }}>
          {STATS.map(([n, l]) => (
            <div key={l}>
              <div style={{ ...F.display, color: C.gold, fontWeight: 700, fontSize: '1.9rem', lineHeight: 1 }}>{n}</div>
              <div style={{ ...F.body, color: 'rgba(255,255,255,.75)', fontSize: '.78rem', marginTop: 6, letterSpacing: '.03em' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Detalles del remate — continúa el bloque oscuro del stats strip */}
      <div style={{ padding: '3.5rem 2rem 4rem', background: `linear-gradient(180deg, ${C.dark} 0%, ${C.bordo} 100%)` }}>
        <SectionTitle eyebrow="23° Remate Anual">Detalles del Remate</SectionTitle>

        {/* Oferta */}
        <div style={{ ...panel, padding: '2rem 1.5rem', maxWidth: 1100, margin: '0 auto 1.25rem', display: 'flex', justifyContent: 'space-around', gap: '1.75rem', flexWrap: 'wrap', textAlign: 'center' }}>
          {OFERTA.map(([n, l]) => (
            <div key={l} style={{ maxWidth: 230 }}>
              <div style={{ ...F.display, color: C.gold, fontWeight: 700, fontSize: '2.6rem', lineHeight: 1 }}>{n}</div>
              <div style={{ ...F.body, color: 'rgba(255,255,255,.82)', fontSize: '.82rem', marginTop: 8, lineHeight: 1.45, letterSpacing: '.03em' }}>{l}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.25rem', maxWidth: 1100, margin: '0 auto 1.25rem' }}>
          {REMATE.map(({ icon, label, value }) => (
            <div key={label} style={{ ...panel, padding: '1.35rem 1.35rem' }}>
              <div style={{ fontSize: '1.4rem', lineHeight: 1, marginBottom: '.6rem' }}>{icon}</div>
              <div style={{ ...F.display, color: C.gold, fontWeight: 700, fontSize: '.72rem', letterSpacing: '.14em', textTransform: 'uppercase' }}>{label}</div>
              <div style={{ ...F.body, color: 'rgba(255,255,255,.9)', fontSize: '.95rem', marginTop: '.45rem', lineHeight: 1.55 }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Organizan / invitadas */}
        <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', maxWidth: 1100, margin: '0 auto' }}>
          {([['Organizan', ORGANIZAN], ['Cabañas invitadas', INVITADAS]] as const).map(([titulo, lista]) => (
            <div key={titulo} style={{ ...panel, padding: '1.5rem 1.35rem' }}>
              <p style={{ ...F.display, color: C.gold, fontWeight: 700, fontSize: '.72rem', letterSpacing: '.16em', textTransform: 'uppercase', margin: '0 0 1rem' }}>{titulo}</p>
              {lista.map(({ casa, persona, tel }) => (
                <div key={casa} style={{ marginBottom: '.9rem' }}>
                  <p style={{ ...F.display, color: C.white, fontWeight: 700, fontSize: '1rem', margin: 0 }}>{casa}</p>
                  <p style={{ ...F.body, color: 'rgba(255,255,255,.8)', fontSize: '.86rem', margin: '.15rem 0 0' }}>
                    {persona} · <a href={`https://wa.me/54${tel.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: C.gold, textDecoration: 'none' }}>{tel}</a>
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Video */}
      <div style={{ padding: '4rem 2rem', background: C.white, textAlign: 'center' }}>
        <SectionTitle eyebrow="Conocé la cabaña">Presentación Oficial</SectionTitle>
        <div style={{ maxWidth: 900, margin: '0 auto', borderRadius: '.6rem', overflow: 'hidden', aspectRatio: '16/9', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,.18)' }}>
          <iframe src="https://www.youtube.com/embed/NDxUupIp4KU" title="El Retiro" style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', inset: 0 }} allowFullScreen />
        </div>
      </div>

      {/* Frase del fundador */}
      <div style={{ background: `linear-gradient(180deg, ${C.bordo} 0%, ${C.dark} 100%)`, padding: '3.5rem 1.5rem', textAlign: 'center', color: C.white }}>
        <img src="/abuelo.jpeg" alt="Fundador" style={{ width: 160, height: 160, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.25rem', display: 'block', boxShadow: '0 0 0 4px rgba(184,158,88,.5), 0 8px 24px rgba(0,0,0,.4)' }} />
        <div style={{ ...F.display, color: C.gold, fontSize: '2.5rem', lineHeight: 0.5, height: '1rem' }}>“</div>
        <p style={{ ...F.display, maxWidth: 680, margin: '0 auto 1.25rem', fontSize: '1.4rem', lineHeight: 1.5, fontStyle: 'italic', fontWeight: 400 }}>
          30 años de historia nos acompañan, una vida de lucha y pasión
        </p>
        <p style={{ ...F.body, color: C.gold, letterSpacing: '.05em', margin: '0 0 2rem', fontSize: '.9rem' }}>— Ricardo Mario Remondino, fundador</p>
        <Btn to="/nuestra-historia">Conocer Nuestra Historia →</Btn>
      </div>

      {/* Galería */}
      <div style={{ padding: '4rem 2rem', background: C.white }}>
        <SectionTitle eyebrow="Recorré el sitio">Explorá El Retiro</SectionTitle>
        <div className="gal-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.75rem', maxWidth: 1100, margin: '0 auto' }}>
          {GALLERY.map(({ img, title, desc, href }) => (
            <Link
              key={href}
              href={href}
              style={{ textDecoration: 'none', cursor: 'pointer', borderRadius: '.6rem', overflow: 'hidden', background: C.white, boxShadow: '0 2px 10px rgba(0,0,0,.1)', transition: 'transform .25s, box-shadow .25s', display: 'block' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 14px 30px rgba(0,0,0,.18)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,.1)'; }}
            >
              <div style={{ overflow: 'hidden', height: 230 }}>
                <img src={img} alt={title} style={{ width: '100%', height: 230, objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h4 style={{ ...F.display, color: C.bordo, margin: '0 0 .4rem', fontSize: '1.25rem', fontWeight: 700 }}>{title}</h4>
                <p style={{ ...F.body, color: '#666', margin: '0 0 .9rem', fontSize: '.88rem', lineHeight: 1.55 }}>{desc}</p>
                <span style={{ ...F.display, color: C.gold, fontWeight: 600, fontSize: '.85rem', letterSpacing: '.05em' }}>Ver más →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
