import '../ui/header-footer.css';
import { Cinzel, Open_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export default function Header() {
  return (
    <header className="background-header">
      <div className="max-w-6xl mx-auto grid grid-cols-3 items-center">
        {/* Izquierda */}
        <nav className="flex gap-6 justify-start">
          <Link
            href="/historial-remates"
          >
            <h3 className={`${cinzel.className} link-header`}>Historial de Remates</h3>
          </Link>
          <Link
            href="/nuestra-historia"
          >
            <h3 className={`${cinzel.className} link-header`}>Nuestra Historia</h3>
          </Link>
        </nav>

        {/* Logo como imagen */}
        <Link href="/" className="flex justify-center">
          <Image src="/logo.png" alt="El Retiro" width={150} height={10} />
        </Link>

        {/* Derecha */}
        <nav className="flex gap-6 justify-end">
           <Link
            href="/nuestra-genetica"
          >
            <h3 className={`${cinzel.className} link-header`}>Nuestra Genética</h3>
          </Link>
          <Link
            href="/prensa"
          >
            <h3 className={`${cinzel.className} link-header`}>Prensa</h3>
          </Link>
          <Link
            href="/contacto"
          >
            <h3 className={`${cinzel.className} link-header`}>Contacto</h3>
          </Link>
        </nav>
      </div>
    </header>
  );
}