import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image 
      src="/images/gatoemoji.png" 
      alt="En construcción"
      width={300}
      height={300}
      />
      <h1>En renovación</h1>
      <p>Hola, en estos momentos estoy construyendo un nuevo sitio con tecnologías más nuevas. Pronto estará disponible</p>
      <p>Mientras tanto te invito a visitar</p>
      <button><a target="_blank" href="https://github.com/cardugarte/">repositorio de Github aquí</a></button>

      <h2>Contáctame</h2>
      <p>Si prefieres también puedes comunicarte a través de mi email</p>
      <button><a target="_blank" href="mailto:soycarlosdugarte@gmail.com">soycarlosdugarte@gmail.com</a></button>
    </div>
  )
}
