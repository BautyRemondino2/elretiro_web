import '../ui/nuestra-historia.css';
import { Cinzel, Open_Sans } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export default function NuestraHistoria() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      <div className="historia-section">
        <div className="historia-img">
          <img src="/abue_papa.jpg" alt="Historia El Retiro" className="historia-img-content" />
        </div>
        <div className="historia-texto">
          <h3 className={`${cinzel.className} nombre-fundador`}>Nuestra historia</h3>
          <p>
            Mi nombre es Ricardo J. Remondino y junto a mi padre fundamos “CAMPOS Y CABAÑA EL RETIRO S.A.” y desde hace 30 años nos dedicamos a criar y producir Genética BRAFORD de la más alta calidad para nuestro propio REMATE ANUAL y seguir participando en las más importantes exposiciones ganaderas, entre las que se cuenta la EXPOSICIÓN INTERNACIONAL DE PALERMO......
          </p>
        </div>
      </div>
    </div>
  );
}