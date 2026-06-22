'use client';

import React, { useState } from 'react';
import type { CSSProperties, ReactNode, ElementType } from 'react';
import Link from 'next/link';
import { C, F } from './theme';

/* ── Botón ──────────────────────────────────────────────────── */
type BtnProps = {
  children: ReactNode;
  variant?: 'primary' | 'pill' | 'outline' | 'ghost';
  href?: string; // enlace externo (nueva pestaña)
  to?: string; // enlace interno (Next Link)
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
};

export function Btn({ children, variant = 'primary', href, to, onClick, size = 'md', style: sx = {} }: BtnProps) {
  const [h, setH] = useState(false);
  const sizes: Record<string, CSSProperties> = {
    sm: { padding: '.5rem 1rem', fontSize: '.8rem' },
    md: { padding: '.75rem 1.5rem', fontSize: '.95rem' },
    lg: { padding: '.95rem 2rem', fontSize: '1.02rem' },
  };
  const base: CSSProperties = {
    ...F.display,
    fontWeight: 600,
    letterSpacing: '.06em',
    textDecoration: 'none',
    textAlign: 'center',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem',
    cursor: 'pointer',
    border: 'none',
    lineHeight: 1.3,
    transition: 'background-color .3s ease, color .2s ease, transform .15s ease, box-shadow .2s ease',
    transform: h ? 'translateY(-1px)' : 'none',
    ...sizes[size],
  };
  const v: Record<string, CSSProperties> = {
    primary: { background: h ? C.goldL : C.gold, color: '#1f1f1f', borderRadius: '.5rem', boxShadow: h ? '0 6px 16px rgba(72,26,26,.18)' : '0 2px 6px rgba(0,0,0,.12)' },
    pill: { background: h ? C.goldL : C.gold, color: '#1f1f1f', borderRadius: '999px', boxShadow: h ? '0 6px 16px rgba(72,26,26,.18)' : '0 2px 6px rgba(0,0,0,.12)' },
    outline: { background: h ? C.gold : 'transparent', color: h ? '#1f1f1f' : C.white, borderRadius: '999px', border: `2px solid ${C.gold}` },
    ghost: { background: h ? C.gold : C.bordo, color: h ? '#1f1f1f' : C.white, borderRadius: '999px' },
  };
  const style: CSSProperties = { ...base, ...(v[variant] || v.primary), ...sx };
  const hp = { onMouseEnter: () => setH(true), onMouseLeave: () => setH(false) };
  if (to) return <Link href={to} style={style} {...hp}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" style={style} {...hp}>{children}</a>;
  return <button type="button" onClick={onClick} style={style} {...hp}>{children}</button>;
}

/* ── Medalla ────────────────────────────────────────────────── */
export function MedalBadge({ children }: { children: ReactNode }) {
  return (
    <span style={{ background: C.medal, color: C.dark, padding: '.3rem .8rem', borderRadius: '999px', fontSize: '.8rem', fontWeight: 'bold', letterSpacing: '.02em', display: 'inline-flex', alignItems: 'center', gap: '.35rem', ...F.body }}>
      <span style={{ fontSize: '.85rem' }}>🏅</span>
      {children}
    </span>
  );
}

/* ── Título de sección ──────────────────────────────────────── */
type SectionTitleProps = {
  children: ReactNode;
  eyebrow?: string;
  align?: 'left' | 'center' | 'right';
  color?: string;
  rule?: boolean;
  as?: ElementType;
  style?: CSSProperties;
};

export function SectionTitle({ children, eyebrow, align = 'center', color = C.gold, rule = true, as: Tag = 'h2', style: sx = {} }: SectionTitleProps) {
  const ruleM = align === 'center' ? '0.9rem auto 0' : align === 'right' ? '0.9rem 0 0 auto' : '0.9rem 0 0';
  return (
    <div style={{ textAlign: align, margin: '0 0 1.9rem', ...sx }}>
      {eyebrow && <p style={{ ...F.display, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', fontSize: '.72rem', color: C.gold, opacity: 0.85, margin: '0 0 .6rem' }}>{eyebrow}</p>}
      <Tag style={{ ...F.display, fontWeight: 700, letterSpacing: '.035em', color, fontSize: 'clamp(1.5rem,5vw,2rem)', lineHeight: 1.2, margin: 0 }}>{children}</Tag>
      {rule && <hr style={{ width: 56, height: 2, background: C.gold, border: 'none', opacity: 0.85, margin: ruleM }} />}
    </div>
  );
}
