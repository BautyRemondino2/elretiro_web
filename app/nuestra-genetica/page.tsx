'use client';
import '../ui/nuestra-genetica.css';
import { Cinzel, Open_Sans } from 'next/font/google';
import { useState } from 'react';
import AnimalCard from '../components/AnimalCard';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

const toros = [
  { name: 'MARCAERRE GAUCHO', image: '/producto/toros_padres/gaucho.jpg', slug: 'gaucho' },
  { name: 'MARCAERRE GAUCHO', image: '/producto/toros_padres/gaucho.jpg', slug: 'gaucho' },
  { name: 'MARCAERRE GAUCHO', image: '/producto/toros_padres/gaucho.jpg', slug: 'gaucho' },
];

const donantes = [
  { name: 'MARCAERRE VICKY', image: '/producto/donantes/vicky.jpg', slug: 'vicky' },
  { name: 'MARCAERRE BONITA', image: '/producto/donantes/vicky.jpg', slug: 'vicky' },
  { name: 'MARCAERRE BRAVA', image: '/producto/donantes/vicky.jpg', slug: 'vicky' },
];

export default function NuestraGenetica() {
  const [selected, setSelected] = useState<'toros' | 'vacas' | null>(null);

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
        <h1 className={`${cinzel.className} titulo-genetica`}>
            Nuestra Genética
        </h1>
        <p className={`${openSans.className} text-justify text-center max-w-4xl mx-auto`}>
        En El Retiro, la genética es el corazón de nuestro trabajo.
        Nuestra pasión por la mejora genética nos impulsa a ofrecer lo mejor en cada remate, garantizando animales con características excepcionales y un rendimiento superior.
        Te invitamos a conocer más sobre nuestra genética y cómo contribuimos a la mejora del ganado en la región.
        </p>

      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-2 gap-16">
            <button
            className="genetica-button"
            onClick={() => setSelected('toros')}
            >
            Toros Padres
            </button>
            <button
            className="genetica-button"
            onClick={() => setSelected('vacas')}
            >
            Donantes
            </button>
        </div>
      </div>
      <div className="divisor-container">
        <div className="line" />
        <img src="./divisor.png" alt="Divisor" />
        <div className="line" />
      </div>

      {(selected === 'toros' || selected === null) && (
        <div className="text-center text-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {toros.map((toro, index) => (
                  <AnimalCard key={index} name={toro.name} image={toro.image} slug={toro.slug} />
                ))}
            </div>
        </div>
      )}
      {selected === 'vacas' && (
        <div className="text-center text-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {donantes.map((vaca, index) => (
                  <AnimalCard key={index} name={vaca.name} image={vaca.image} slug={vaca.slug} />
                ))}
            </div>
        </div>
      )}
    </div>
  );
}