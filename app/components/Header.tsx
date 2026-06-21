'use client';

import '../ui/header-footer.css';
import { Cinzel } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });

const navLinks = [
  { href: '/historial-remates', label: 'Historial de Remates' },
  { href: '/nuestra-historia', label: 'Nuestra Historia' },
  { href: '/nuestra-genetica', label: 'Nuestra Genética' },
  { href: '/prensa', label: 'Prensa' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="background-header">
      <div className="header-inner">
        {/* Lado izquierdo: hamburguesa (móvil) + links (escritorio) */}
        <div className="header-side header-left">
          <button
            type="button"
            className={`menu-toggle ${open ? 'open' : ''}`}
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className="nav-desktop">
            <Link href="/historial-remates" className={`${cinzel.className} link-header`}>
              Historial de Remates
            </Link>
            <Link href="/nuestra-historia" className={`${cinzel.className} link-header`}>
              Nuestra Historia
            </Link>
          </nav>
        </div>

        {/* Logo */}
        <Link href="/" className="logo-link" onClick={close}>
          <Image src="/logo.png" alt="El Retiro" width={150} height={60} priority />
        </Link>

        {/* Lado derecho: links (escritorio) */}
        <div className="header-side header-right">
          <nav className="nav-desktop">
            <Link href="/nuestra-genetica" className={`${cinzel.className} link-header`}>
              Nuestra Genética
            </Link>
            <Link href="/prensa" className={`${cinzel.className} link-header`}>
              Prensa
            </Link>
            <Link href="/contacto" className={`${cinzel.className} link-header`}>
              Contacto
            </Link>
          </nav>
        </div>
      </div>

      {/* Menú desplegable (móvil) */}
      <nav className={`nav-mobile ${open ? 'open' : ''}`}>
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`${cinzel.className} link-header mobile-link`}
            onClick={close}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
