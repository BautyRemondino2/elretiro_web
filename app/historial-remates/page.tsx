import '../ui/historial_remates.css';
import { Cinzel, Open_Sans } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export default function NuestraHistoria() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
    <h1 className={`${cinzel.className} titulo-historial`}>
        Historial de Remates
    </h1>
    <p className={`${openSans.className} text-justify text-center max-w-4xl mx-auto`}>
        Te invitamos a recorrer la historia de nuestros remates a través de los catálogos originales de cada año. 
        Aquí podrás explorar, cada edición desde nuestros inicios: un testimonio de trabajo, pasión y tradición que nos enorgullece compartir contigo.
    </p>
    <div className="galeria-catalogos">
        {[
          { year: 2024, file: 'CATALOGO 2024_comprimido.pdf', preview: `/catalogos/catalogo_previews/CATALOGO_2024.jpg` },
          { year: 2023, file: 'CATALOGO 2023-comprimido.pdf', preview: `/catalogos/catalogo_previews/CATALOGO_2023.jpg` },
          { year: 2022, file: 'CATALOGO 2022_compressed.pdf', preview: `/catalogos/catalogo_previews/CATALOGO_2022.jpg` },
          { year: 2021, file: 'CATALOGO 2021.pdf', preview: `/catalogos/catalogo_previews/CATALOGO_2021.jpg` },
          { year: 2020, file: 'CATALOGO 2020.pdf', preview: `/catalogos/catalogo_previews/CATALOGO_2020.jpg` },
          { year: 2019, file: 'CATALOGO 2019_compressed.pdf', preview: `/catalogos/catalogo_previews/CATALOGO_2019.jpg` },
          { year: 2016, file: 'CATALOGO 2016.pdf', preview: `/catalogos/catalogo_previews/CATALOGO_2016.jpg` },
          { year: 2012, file: 'CATALOGO 2012.pdf', preview: `/catalogos/catalogo_previews/CATALOGO_2012.jpg` },
          { year: 2011, file: 'CATALOGO 2011.pdf', preview: `/catalogos/catalogo_previews/CATALOGO_2011.jpg` },
          { year: 2010, file: 'CATALOGO 2010.pdf', preview: `/catalogos/catalogo_previews/CATALOGO_2010.jpg` }
        ].map(({ year, file, preview }) => (
          <a
            key={year}
            href={`/catalogos/${file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="catalogo-item"
          >
            {preview && (
                <img src={preview} alt={`Preview ${year}`} className="catalogo-preview" />
            )}
            <span className="mt-3 block">Catálogo {year}</span>
          </a>
        ))}
    </div>
    </div>
  );
}