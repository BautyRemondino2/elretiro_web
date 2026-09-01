'use client';

import React from 'react';
import { C, F } from '../components/theme';
import { Btn, SectionTitle } from '../components/ui';

const PEOPLE = [
  { img: '/ricardo_javier.jpg', name: 'Ricardo Javier Remondino', role: 'Médico Veterinario', phone: '+54 9 3404 631877', email: 'rjremondino@gmail.com' },
  { img: '/ricky.jpg', name: 'Ricardo Manuel Remondino', role: 'Cabaña El Retiro', phone: '+54 9 3404 516059', email: 'rmremondino@gmail.com' },
];

function SocialLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...F.display, color: C.bordo, fontSize: '.95rem', fontWeight: 600, textDecoration: 'none', transition: 'color .2s', display: 'inline-flex', alignItems: 'center', minHeight: 44, padding: '0 .5rem' }}
      onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
      onMouseLeave={(e) => (e.currentTarget.style.color = C.bordo)}
    >
      {children}
    </a>
  );
}

export default function ContactoPage() {
  return (
    <div style={{ minHeight: '100vh', background: C.white }}>
      <div style={{ background: `linear-gradient(180deg, ${C.bordo}, ${C.dark})`, padding: '3rem 1.5rem 2.5rem', textAlign: 'center' }}>
        <SectionTitle as="h1" eyebrow="Estamos para ayudarte" style={{ margin: 0 }}>Contacto</SectionTitle>
        <p style={{ ...F.body, color: 'rgba(255,255,255,.88)', maxWidth: 600, margin: '1.25rem auto 0', lineHeight: 1.7 }}>
          No dudes en escribirnos o venir a visitarnos a la Cabaña.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem', maxWidth: 640, margin: '-1.5rem auto 0', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
        {PEOPLE.map((p) => (
          <div key={p.name} style={{ background: C.white, borderRadius: '.6rem', boxShadow: '0 8px 24px rgba(0,0,0,.12)', padding: '1.75rem 1.5rem', textAlign: 'center', border: '1px solid rgba(184,158,88,.2)' }}>
            <img src={p.img} alt={p.name} style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 0 0 3px rgba(184,158,88,.5)', marginBottom: '1rem' }} />
            <p style={{ ...F.display, fontWeight: 700, margin: '0 0 .25rem', fontSize: '1rem', color: C.bordo }}>{p.name}</p>
            <p style={{ ...F.body, color: C.gold, fontWeight: 600, margin: '0 0 .9rem', fontSize: '.8rem', letterSpacing: '.04em' }}>{p.role}</p>
            {/* tel: y mailto: para que desde el celular se llame o se escriba de
                un toque, en vez de tener que copiar el numero a mano. El padding
                es para que el area tactil llegue a ~44px de alto. */}
            <a href={`tel:${p.phone.replace(/[^0-9+]/g, '')}`} style={{ ...F.body, display: 'block', margin: 0, padding: '.5rem 0', fontSize: '.88rem', color: '#444', textDecoration: 'none' }}>📞 {p.phone}</a>
            <a href={`mailto:${p.email}`} style={{ ...F.body, display: 'block', margin: '0 0 .8rem', padding: '.5rem 0', fontSize: '.88rem', color: '#444', textDecoration: 'none', overflowWrap: 'anywhere' }}>✉️ {p.email}</a>
            <Btn href={`https://wa.me/${p.phone.replace(/[^0-9]/g, '')}`}>Escribir por WhatsApp</Btn>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2.5rem 0' }}>
        <SocialLink href="https://www.instagram.com/elretirocabana">📸 Instagram</SocialLink>
        <SocialLink href="https://www.facebook.com/CabanaELRETIRO">📘 Facebook</SocialLink>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto 3rem', padding: '0 2rem' }}>
        <div style={{ borderRadius: '.6rem', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,.15)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.7323705987396!2d-61.0773557!3d-32.5376612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b60f96cc1140a9%3A0x2a325ddf093fa0fd!2sCaba%C3%B1a%20El%20Retiro!5e1!3m2!1ses-419!2sar!4v1722278423184!5m2!1ses-419!2sar"
            width="100%"
            height="340"
            style={{ border: 'none', display: 'block' }}
            loading="lazy"
            allowFullScreen
            title="Mapa Cabaña El Retiro"
          />
        </div>
      </div>
    </div>
  );
}
