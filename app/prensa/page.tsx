'use client';

import React, { useState } from 'react';
import { C, F } from '../components/theme';
import { SectionTitle } from '../components/ui';

const VIDEOS: { t: string; y: number; id: string }[] = [
  { t: 'Solo Campo: Nota padre e hijo Remondino', y: 2024, id: 'rZ3u2gmSDYE' },
  { t: 'Remate aniversario 20 años, nota Med. Vet. Ricardo Remondino', y: 2023, id: '4dvfjWO63l0' },
  { t: 'Canal San Justo', y: 2022, id: 'OqVmnHI4AMk' },
  { t: 'Canal San Justo — Entrevista a Ricardo', y: 2022, id: '6a4bqz3oXVE' },
  { t: 'Solo Campo: Experiencia Cabaña El Retiro', y: 2022, id: 'P8IDG8bOci0' },
  { t: 'Canal San Justo — Entrevista a Esc. Ricardo Mario Remondino', y: 2022, id: 'p0wMjd9z5ao' },
  { t: 'Solo Campo: Remate 18', y: 2021, id: 'HY0ItpORXSY' },
  { t: 'Solo Campo: Esc. Ricardo Mario Remondino', y: 2021, id: '2JRKAvzgMbg' },
  { t: 'Cabaña El Retiro — Remate 2020 video promocional', y: 2020, id: 'HzutC5-dSSE' },
  { t: 'Entrevista Med. Vet. Ricardo Remondino', y: 2020, id: 'iVSnY-JyRog' },
  { t: 'Solo Campo: Entrevista Med. Vet. Ricardo Remondino', y: 2020, id: 'bJl2z5TplhI' },
  { t: 'Solo Campo: Preparando remate 2020', y: 2020, id: 'zqihKE8txAI' },
  { t: 'Entrevista a Med. Vet. Ricardo Remondino', y: 2019, id: 'QEDsQ3sLUBI' },
  { t: 'Entrevista a Med. Vet. Ricardo Remondino', y: 2019, id: 'mrnu7Q1ZH34' },
  { t: 'Solo Campo: en la cabaña', y: 2019, id: 'CV9dJsG1ars' },
  { t: 'Remate en AFA', y: 2019, id: '4vV2w4Qmc5k' },
  { t: 'Del Sel en el Remate de Cabaña El Retiro', y: 2015, id: 'MDSpsYz8z_s' },
  { t: 'Ricardo Remondino Remate Feria en Gálvez', y: 2014, id: 'dAzBsUktBJ0' },
  { t: 'Remate aniversario 10 años, Gálvez', y: 2013, id: 'AuLUFJmFAK0' },
];

function VideoTile({ v }: { v: { t: string; y: number; id: string } }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={`https://youtu.be/${v.id}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{ textDecoration: 'none', background: C.bordo, borderRadius: '.5rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: h ? '0 12px 26px rgba(0,0,0,.25)' : '0 2px 8px rgba(0,0,0,.12)', transition: 'transform .25s, box-shadow .25s', transform: h ? 'translateY(-4px)' : 'none' }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.t} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block', transition: 'transform .4s', transform: h ? 'scale(1.06)' : 'none' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: h ? 'rgba(45,17,16,.25)' : 'rgba(45,17,16,.1)', transition: 'background .25s' }}>
          <div style={{ background: h ? C.gold : 'rgba(0,0,0,.6)', borderRadius: '50%', width: 46, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .25s' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill={h ? '#2d1110' : 'white'}><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>
      </div>
      <div style={{ padding: '1rem' }}>
        <p style={{ ...F.display, color: C.gold, fontWeight: 700, margin: '0 0 .35rem', fontSize: '.9rem' }}>{v.y}</p>
        <p style={{ ...F.body, color: C.white, margin: 0, fontSize: '.88rem', lineHeight: 1.5 }}>{v.t}</p>
      </div>
    </a>
  );
}

export default function PrensaPage() {
  return (
    <div style={{ minHeight: '100vh', background: C.white, paddingBottom: '3rem' }}>
      <div style={{ position: 'relative', minHeight: 320, backgroundImage: `linear-gradient(180deg, rgba(45,17,16,.5), rgba(45,17,16,.82)), url('/estudio_string_agro.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ padding: '2rem' }}>
          <SectionTitle as="h1" eyebrow="El Retiro en los medios" style={{ margin: 0 }}>Prensa</SectionTitle>
          <p style={{ ...F.body, color: 'rgba(255,255,255,.9)', maxWidth: 640, margin: '1.25rem auto 0', lineHeight: 1.7 }}>
            A lo largo de los años, Cabaña El Retiro ha participado de distintos espacios radiales y entrevistas en medios del agro.
          </p>
        </div>
      </div>
      <div style={{ padding: '3rem 2rem 0' }}>
        <SectionTitle eyebrow="Mirá las notas">Entrevistas en medios</SectionTitle>
        <div className="vid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', maxWidth: 1000, margin: '0 auto' }}>
          {VIDEOS.map((v) => <VideoTile key={v.id} v={v} />)}
        </div>
      </div>
    </div>
  );
}
