import { Cinzel, Open_Sans } from 'next/font/google';
import '../ui/header-footer.css';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* Redes Sociales */}
        <div>
          <h3 className={`${cinzel.className} footer-title`}>Redes Sociales</h3>
          <ul className="space-y-1">
            <li>
              <a href="https://www.instagram.com/elretirocabana" target="_blank" rel="noopener noreferrer" className="link-footer hover:text-black">
                🔗Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/CabanaELRETIRO" target="_blank" rel="noopener noreferrer" className="link-footer hover:text-black">
                🔗Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Ubicación */}
        <div>
        <h3 className={`${cinzel.className} footer-title`}>Ubicación</h3>
        <p> Carrizales Est. Clarke, Santa Fe, Argentina 2218
            <a
            href="https://www.google.com/maps/place/Cabaña+El+Retiro/@-32.5376612,-61.0773557,825m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95b60f96cc1140a9:0x2a325ddf093fa0fd!8m2!3d-32.5376612!4d-61.0773557!16s%2Fg%2F11fj4b7xsg?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="link-footer hover:text-black underline"
            >
            <br />
            📌Ver en Google Maps
            </a>
        </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className={`${cinzel.className} footer-title`}>Contacto</h3>
          <p> Medico Vet. Ricardo Javier Remondino<br />📞 +54 9 3404 631877<br />✉️ rjremondino@gmail.com</p>
          <p className="mt-2">Ricardo Manuel Remondino<br />📞 +54 9 3404 516059<br />✉️ rmremondino@gmail.com</p>
        </div>
      </div>
      <div className="mt-10 text-center text-xs fff px-6">
        <p className="font-medium">Todos los derechos reservados | CABAÑA EL RETIRO</p>
        <p className="uppercase tracking-wide mt-1">EL PODER DE LA GENÉTICA</p>
        <p className="mt-1">Más de 30 años de producción y creando la más alta calidad de genética.</p>
      </div>
    </footer>
  );
}
