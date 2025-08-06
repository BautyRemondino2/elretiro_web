import { Cinzel, Open_Sans } from 'next/font/google';
import { useState } from 'react';
import '../ui/animal-card.css';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

interface AnimalCardProps {
  name: string;
  image: string;
  slug: string; // para construir el link a la página individual
}

export default function AnimalCard({ name, image, slug }: AnimalCardProps) {
  return (
        <a className='animal-card' href={`/nuestra-genetica/${slug}`}>
            <img src={image} alt={name} className="img-animal" />
            <div className="animal-info">
                <h3 className="name-animal">{name}</h3>
                <p className="link-leer-mas">Leer más</p>
            </div>
        </a>
  );
}