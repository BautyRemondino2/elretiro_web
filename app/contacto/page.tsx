import '../ui/contacto.css';
import { Cinzel, Open_Sans } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

export default function Contacto() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden p-6 text-center">
      <h1 className={`${cinzel.className} titulo-contacto text-center mb-10`}>Contacto</h1>
      <p className={`${openSans.className} text-justify text-center max-w-2xl mx-auto mb-10`}>
      Estamos para ayudarte. No dudes en escribirnos o venir a visitarnos a la Cabaña.
      </p>
      <div className="flex flex-col md:flex-row gap-16 items-start justify-center w-11/12 mx-auto mb-16">
        {/* Mapa */}
        <div className="w-full md:w-1/2 max-w-xl mb-6 md:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.7323705987396!2d-61.0773557!3d-32.5376612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b60f96cc1140a9%3A0x2a325ddf093fa0fd!2sCaba%C3%B1a%20El%20Retiro!5e1!3m2!1ses-419!2sar!4v1722278423184!5m2!1ses-419!2sar"
            width="100%"
            height="400"
            className="rounded-md shadow-md"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Contactos y redes */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-10">
          <div className="flex gap-10 justify-center flex-wrap">
            <div className="flex-1 max-w-xs text-center">
              <img src="/ricardo_javier.jpg" alt="Contacto 1" className="rounded-full w-40 h-40 object-cover mx-auto mb-3 shadow" />
              <p className={`${cinzel.className} font-semibold mt-4`}>Ricardo Javier Remondino</p>
              <p className="mt-2">📞 +54 9 3404 631877</p>
              <p className="mt-1">📧 rjremondino@gmail.com</p>
            </div>
            <div className="flex-1 max-w-xs text-center">
              <img src="/ricky.jpg" alt="Contacto 2" className="rounded-full w-40 h-40 object-cover mx-auto mb-3 shadow" />
              <p className={`${cinzel.className} font-semibold mt-4`}>Ricardo Manuel Remondino</p>
              <p className="mt-2">📞 +54 9 3404 516059</p>
              <p className="mt-1">📧 rmremondino@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-center gap-50 text-xl mt-8">
            <a href="https://www.instagram.com/elretirocabana" target="_blank" rel="noopener noreferrer" className="link-footer hover:text-black">
              📸 Instagram
            </a>
            <a href="https://www.facebook.com/CabanaELRETIRO" target="_blank" rel="noopener noreferrer" className="link-footer hover:text-black">
              📘 Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Redes sociales */}
      
    </div>
  );
}