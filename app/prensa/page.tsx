import '../ui/prensa.css';
import { Cinzel, Open_Sans } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

const videos = [
    {
        title: "Solo Campo: Nota padre e hijo Remondino",
        year: 2024,
        url: "https://youtu.be/rZ3u2gmSDYE"
    },
    {
        title: "Remate aniversario 20 años, nota Med. Vet. Ricardo Remondino",
        year: 2023,
        url: "https://youtu.be/4dvfjWO63l0"
    },
    {
        title: "Canal San Justo",
        year: 2022,
        url: "https://youtu.be/OqVmnHI4AMk"
    },
    {
        title: "Canal San Justo - Entrevista a Ricardo",
        year: 2022,
        url: "https://youtu.be/6a4bqz3oXVE"
    },
    {
        title: "Solo Campo: Experiencia Cabaña El Retiro",
        year: 2022,
        url: "https://youtu.be/P8IDG8bOci0"
    },
    {
        title: "Canal San Justo - Entrevista a Esc. Ricardo Mario Remondino",
        year: 2022,
        url: "https://youtu.be/p0wMjd9z5ao"
    },
    {
        title: "Solo Campo: Remate 18",
        year: 2021,
        url: "https://youtu.be/HY0ItpORXSY"
    },
    {
        title: "Solo Campo: Esc. Ricardo Mario Remondino",
        year: 2021,
        url: "https://youtu.be/2JRKAvzgMbg"
    },
    {
        title: "Cabaña El Retiro - Remate 2020 video promocional",
        year: 2020,
        url: "https://youtu.be/HzutC5-dSSE"
    },
    {
        title: "Entrevista Med. Vet. Ricardo Remondino",
        year: 2020,
        url: "https://youtu.be/iVSnY-JyRog"
    },
    {
        title: "Solo Campo: Entrevista Med. Vet. Ricardo Remondino",
        year: 2020,
        url: "https://youtu.be/bJl2z5TplhI"
    },
    {
        title: "Solo Campo: Preparando remate 2020",
        year: 2020,
        url: "https://youtu.be/zqihKE8txAI"
    },
    {
        title: "Entrevista a Med. Vet. Ricardo Remondino",
        year: 2019,
        url: "https://youtu.be/QEDsQ3sLUBI"
    },
    {
        title: "Entrevista a Med. Vet. Ricardo Remondino",
        year: 2019,
        url: "https://youtu.be/mrnu7Q1ZH34"
    },
    {
        title: "Solo Campo: en la cabaña",
        year: 2019,
        url: "https://youtu.be/CV9dJsG1ars"
    },
    {
        title: "Remate en AFA",
        year: 2019,
        url: "https://youtu.be/4vV2w4Qmc5k"
    },
    {
        title: "Del Sel en el Remate de Cabaña El Retiro",
        year: 2015,
        url: "https://youtu.be/MDSpsYz8z_s"
    },
    {
        title: "Ricardo Remondino Remate Feria en Gálvez",
        year: 2014,
        url: "https://www.youtube.com/watch?v=dAzBsUktBJ0"
    },
    {
        title: "Remate aniversario 10 años, Galvez",
        year: 2013,
        url: "https://youtu.be/AuLUFJmFAK0"
    }
];


function getYouTubeEmbedUrl(url: string) {
  const match = url.match(/[?&]v=([^&#]*)|youtu\.be\/([^&#]*)/);
  const videoId = match?.[1] || match?.[2];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
}

export default function Prensa() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden pb-16">
      <h1 className={`${cinzel.className} titulo-prensa`}>Prensa</h1>
      <p className={`${openSans.className} justify-center max-w-3xl mx-auto mb-12`}>
        A lo largo de los años, Cabaña El Retiro ha participado de distintos espacios radiales y entrevistas en medios. A continuación, compartimos un momento especial en la radio y una recopilación de entrevistas disponibles en YouTube.
      </p>

      {/* Imagen del momento radial */}
      <div className="flex justify-center mb-10">
        <img src="/estudio_string_agro.jpeg" alt="Momento radial de la cabaña" className="prensa_foto rounded shadow-lg" />
      </div>

      {/* Sección de entrevistas de YouTube */}
      <div className="max-w-5xl mx-auto">
        <h2 className={`${cinzel.className} subtitulo-prensa`}>Entrevistas en medios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map(({ title, year, url }, i) => (
            <div key={i} className="card-prensa p-4 rounded shadow flex flex-col justify-between h-full">
              <div className="mb-2">
                <p className={`${cinzel.className} año`}>{year}</p>
                <p className={`${openSans.className} subtitulo-video`}>{title}</p>
              </div>
              <a href={url} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition flex-grow relative">
                <img
                  src={`https://img.youtube.com/vi/${getYouTubeEmbedUrl(url).split('/embed/')[1]}/hqdefault.jpg`}
                  alt={`Miniatura de ${title}`}
                  className="w-full aspect-video object-cover rounded shadow mb-2"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white opacity-80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}