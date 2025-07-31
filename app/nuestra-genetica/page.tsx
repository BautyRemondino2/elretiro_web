'use client';
import '../ui/nuestra-genetica.css';
import { Cinzel, Open_Sans } from 'next/font/google';
import { useState } from 'react';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

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
      <img src="divisor.png" alt="" className="text-center h-8 w-auto mx-auto my-6" />

      {selected === 'toros' && (
        <div className="text-center text-lg">
          {/* Aquí renderizarás una lista de toros padres */}
          <p>Lista de toros padres...</p>
        </div>
      )}
      {selected === 'vacas' && (
        <div className="text-center text-lg">
          {/* Aquí renderizarás una lista de vacas donantes */}
          <p>Lista de vacas donantes...</p>
        </div>
      )}
    </div>
  );
}