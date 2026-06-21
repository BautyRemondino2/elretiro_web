import './ui/home.css';
import { Cinzel, Open_Sans } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });
const Home = () => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Imagen de fondo */}
      <div
        className="hero-home bg-cover bg-center"
        style={{ backgroundImage: "url('/foto_home.jpeg')" }}
      >
        {/* Flyer y links */}
        <div className="flyer-section z-10 relative">
          {/* Imagen del flyer */}
          <div className="flyer-column">
            <img src="/flyer_remate.jpg" alt="Flyer Remate" className="flyer-remate"/>
          </div>

          {/* Links del remate */}
          <div className="links-column">
            <a href="https://www.youtube.com/live/3WHPPliIBCo" target="_blank" rel="noopener noreferrer" className={`${cinzel.className} link-dorado`}>🛑LIVE 🎥 STREAMING</a>
            <a href="https://app.rosgannet.com.ar/remate/1586?type=lote&remateName=22°%20Remate%20Anual%20Cabaña%20el%20Retiro%20-%20Guillermo%20Lehmann" target="_blank" rel="noopener noreferrer" className={`${cinzel.className} link-dorado`}>🎬  VIDEOS Y PRE-OFERTAS</a>
            <a href="https://app.rosgannet.com.ar/remate/1257?type=lote&remateName=21°%20Remate%20Anual%20Cabaña%20El%20Retiro" target="_blank" rel="noopener noreferrer" className={`${cinzel.className} link-dorado`}>📢❗🚨 CATÁLOGO DEL REMATE</a>
            <audio controls className="audio-descripcion">
              <source src="/audio/audio-pa.mp3" type="audio/mpeg" />
              Tu navegador no soporta el audio.
            </audio>
          </div>
          
        </div>
      </div>

      {/* Video presentacion */}
    <div className="container_video_institucional">
      <h2 className={`${cinzel.className} title-video`}>
        Presentación Oficial
      </h2>
      <div className="video_institucional">
        <iframe
            src="https://www.youtube.com/embed/NDxUupIp4KU"
            title="YouTube video"
            allowFullScreen
        ></iframe>
      </div>
    </div>
    {/* Frase del fundador */}
    <div className="background-frase-fundador">
      <img src="/abuelo.jpeg" alt="Fundador El Retiro" className="foto-fundador" />
      <h3 className={`${cinzel.className} nombre-fundador`}>Ricardo Mario Remondino</h3>
      <p className={`${openSans.className} texto-frase`}>
        "30 años de historia nos acompañan, una vida de lucha y pasión"
      </p>
      <a href="/nuestra-historia" className="boton-historia">
        𓂃🖊Conocer Nuestra Historia
      </a>
    </div>
    {/* 3 links */}
    <div className="galeria-columnas">
      <div className="bloque-img">
        <div className="img-wrapper">
          <img src="/remates.jpg" alt="Historial Remates" />
        </div>
        <h4 className={`${cinzel.className}`}>Historial Remates</h4>
        <a href="/historial-remates" className="boton-galeria">Ver más</a>
      </div>
      <div className="bloque-img">
        <div className="img-wrapper">
          <img src="/genetica.jpg" alt="Nuestra Genética" />
        </div>
        <h4 className={`${cinzel.className}`}>Nuestra Genética</h4>
        <a href="/nuestra-genetica" className="boton-galeria">Ver más</a>
      </div>
      <div className="bloque-img">
        <div className="img-wrapper">
          <img src="/prensa2.jpeg" alt="Prensa" />
        </div>
        <h4 className={`${cinzel.className}`}>Prensa</h4>
        <a href="/prensa" className="boton-galeria">Ver más</a>
      </div>
    </div>

    </div>
  );
};

export default Home;
