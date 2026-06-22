'use client';

import React from 'react';
import { C } from './theme';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493404631877"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      style={{ position: 'fixed', bottom: 22, right: 22, zIndex: 50, background: C.green, width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(37,211,102,.45)', overflow: 'hidden', transition: 'transform .2s' }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img src="/icons/whatsapp.jpg" alt="WhatsApp" style={{ width: 56, height: 56, objectFit: 'cover' }} />
    </a>
  );
}
