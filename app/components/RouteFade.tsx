'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

/* Re-dispara la animación de entrada en cada cambio de ruta */
export default function RouteFade({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="reveal-in">
      {children}
    </div>
  );
}
