import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>En renovación</h1>
      <p>Hola, en estos momentos estoy construyendo un nuevo sitio con tecnologías más nuevas. Pronto estará disponible</p>
        <article>
        <Image 
      src="/images/gatoemoji.png" 
      alt="En construcción"
      width={350}
      height={350}
      />
        </article>
        <article className="buttons">
        <button><a target="_blank" href="mailto:soycarlosdugarte@gmail.com">soycarlosdugarte@gmail.com</a></button>
        <a target="_blank" href="https://github.com/cardugarte/"><button>repositorio de Github</button></a>
        </article>
    </div>
  )
}
