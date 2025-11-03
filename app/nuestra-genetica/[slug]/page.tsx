import '../../ui/animal-page.css';
import { notFound } from 'next/navigation';
import { animales } from '../../data/animales/animales';
import { Cinzel, Open_Sans } from 'next/font/google';

// Fuentes
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

// ✅ Tipado explícito correcto
type AnimalPageProps = {
  params: { slug: string };
};

// ✅ Componente corregido
export default async function AnimalPage({ params }: AnimalPageProps) {
  const animal = animales.find((a) => a.slug === params.slug);

  if (!animal) {
    notFound();
  }

  return (
    <div className="animal-page">
      <div className="animal-grid">
        <img
          src={animal.imagen}
          alt={animal.nombre}
          className="animal-image"
        />
        <div>
          <h1 className={`${cinzel.className} animal-name`}>{animal.nombre}</h1>

          {animal.medallas?.length > 0 && (
            <div className="animal-medals">
              {animal.medallas.map((medalla, i) => (
                <span key={i} className="medal-badge">
                  {medalla}
                </span>
              ))}
            </div>
          )}

          <div className="animal-info-group">
            <div>
              <p><span className={`${cinzel.className} font-bold`}>F.N.</span> {animal.fn}</p>
              <p><span className={`${cinzel.className} font-bold`}>HBA</span> {animal.hba}</p>
            </div>
            <div>
              <p><span className={`${cinzel.className} font-bold`}>SENASA</span> {animal.senasa}</p>
              <p><span className={`${cinzel.className} font-bold`}>ADN</span> {animal.adn}</p>
            </div>
          </div>

          <div className="animal-characteristics">
            <p><span className={`${cinzel.className} font-bold`}>PAN</span> {animal.pan} kg</p>
            <p><span className={`${cinzel.className} font-bold`}>FRAME</span> {animal.frame}</p>
            <p><span className={`${cinzel.className} font-bold`}>PAD</span> {animal.pad} kg</p>
            <p><span className={`${cinzel.className} font-bold`}>C.E.</span> {animal.ce} cm</p>
            <p><span className={`${cinzel.className} font-bold`}>PAF</span> {animal.paf} kg</p>
            <p><span className={`${cinzel.className} font-bold`}>Peso</span> {animal.peso} kg</p>
          </div>

          <div className="animal-actions">
            <button className="btn primary">VER VIDEO</button>
            <a href="#tabla-deps" className="btn secondary">VER DEPS</a>
          </div>
        </div>
      </div>

      <h2 id="tabla-deps" className={`${cinzel.className} subtitulo`}>Descripción</h2>
      <p className={`${openSans.className} descripcion-text`}>{animal.descripcion}</p>

      <h2 className={`${cinzel.className} subtitulo`}>Deps</h2>
      {animal.deps && typeof animal.deps === 'object' && (
        <table className="tabla-deps">
          <thead>
            <tr>
              <th>Genética</th>
              {Object.keys(animal.deps).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {['dep', 'prec', 'ranking', 'promedio'].map((row) => (
              <tr key={row}>
                <td>{row.toUpperCase()}</td>
                {Object.entries(animal.deps ?? {}).map(([key, value]) => {
                  const val = value as Record<string, number | string>;
                  return (
                    <td key={key}>
                      {typeof val === 'object' && val !== null && row in val ? val[row] : '-'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h2 className={`${cinzel.className} subtitulo`}>Árbol Genealógico</h2>
      <img
        src="/producto/arboles/arbol-vicky.png"
        className="arbol"
        alt="Árbol genealógico"
      />

      <p>Todos los datos están respaldados por la BRAFORD</p>
    </div>
  );
}