'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { C, F } from './theme';

const LEFT: [string, string][] = [
  ['Historial de Remates', '/historial-remates'],
  ['Nuestra Historia', '/nuestra-historia'],
];
const RIGHT: [string, string][] = [
  ['Nuestra Genética', '/nuestra-genetica'],
  ['Prensa', '/prensa'],
  ['Contacto', '/contacto'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href === '/nuestra-genetica' && pathname.startsWith('/nuestra-genetica'));

  const NavLink = ({ label, href }: { label: string; href: string }) => {
    const active = isActive(href);
    return (
      <Link
        href={href}
        onClick={() => setOpen(false)}
        style={{ ...F.display, fontWeight: 600, fontSize: '.86rem', color: active ? C.white : C.gold, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color .2s', paddingBottom: 4, borderBottom: `2px solid ${active ? C.gold : 'transparent'}` }}
        onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
        onMouseLeave={(e) => (e.currentTarget.style.color = active ? C.white : C.gold)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header style={{ background: C.bordo, position: 'sticky', top: 0, zIndex: 40, boxShadow: '0 2px 12px rgba(0,0,0,.25)' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '1rem', padding: '.5rem 1.5rem' }}>
        <div className="nav-desktop" style={{ flex: '1 1 0', display: 'flex', gap: '1.6rem', alignItems: 'center' }}>
          {LEFT.map(([l, h]) => <NavLink key={h} label={l} href={h} />)}
        </div>

        <button
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          aria-expanded={open}
          style={{ display: 'none', flexDirection: 'column', gap: 5, width: 42, height: 42, padding: '9px 8px', background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: 'block', height: 2, background: C.gold, borderRadius: 2, width: '100%' }} />
          ))}
        </button>

        <Link href="/" onClick={() => setOpen(false)} style={{ flexShrink: 0, display: 'flex', transition: 'transform .25s' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}>
          <img src="/logo.png" alt="Cabaña El Retiro" style={{ height: 58, width: 'auto' }} />
        </Link>

        <div className="nav-desktop" style={{ flex: '1 1 0', display: 'flex', gap: '1.6rem', alignItems: 'center', justifyContent: 'flex-end' }}>
          {RIGHT.map(([l, h]) => <NavLink key={h} label={l} href={h} />)}
        </div>
      </div>

      {open && (
        <nav className="reveal-in" style={{ background: C.nav, display: 'flex', flexDirection: 'column' }}>
          {[...LEFT, ...RIGHT].map(([l, h]) => (
            <Link
              key={h}
              href={h}
              onClick={() => setOpen(false)}
              style={{ ...F.display, fontWeight: 600, color: isActive(h) ? C.white : C.gold, padding: '.9rem 1.25rem', borderTop: '1px solid rgba(184,158,88,.2)', textDecoration: 'none', fontSize: '1rem' }}
            >
              {l}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
