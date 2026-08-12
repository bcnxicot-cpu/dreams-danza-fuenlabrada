import Image from "next/image";

const whatsapp = "https://wa.me/34641219125?text=Hola%2C%20me%20gustar%C3%ADa%20probar%20una%20clase%20en%20Dreams.%20%C2%BFMe%20pod%C3%A9is%20contar%20qu%C3%A9%20grupos%20ten%C3%A9is%3F";
const gmail = "https://mail.google.com/mail/?view=cm&fs=1&to=dreamsestudiodedanza%40gmail.com&su=Prueba%20de%20clase%20en%20Dreams&body=Hola%2C%20me%20gustar%C3%ADa%20probar%20una%20clase.%20%C2%BFPod%C3%A9is%20contarme%20qu%C3%A9%20grupos%20ten%C3%A9is%3F";
const maps = "https://www.google.com/maps/search/?api=1&query=Dreams+Estudio+de+Danza+y+Teatro+Musical,+Avenida+de+Europa+2,+Fuenlabrada";

const paths = [
  { no: "01", title: "Danza", text: "Entrenar, ganar confianza y encontrar una forma propia de moverse." },
  { no: "02", title: "Teatro musical", text: "Interpretación, música y coreografía dentro de una misma historia." },
  { no: "03", title: "Escenario", text: "Galas y producciones donde lo ensayado encuentra público, luz y aplausos." },
];

const season = [
  { title: "Grease", date: "27 · 06 · 26", image: "/images/grease.jpg" },
  { title: "Gala Dreams", date: "07 · 06 · 26", image: "/images/gala-dreams.jpg" },
  { title: "Y Julieta", date: "18 · 04 · 26", image: "/images/julieta.jpg" },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Dreams, inicio">DREAMS<span>·</span></a>
        <nav aria-label="Navegación principal">
          <a href="#probar">Qué puedes hacer</a>
          <a href="#escena">En escena</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="top-cta" href={whatsapp} target="_blank" rel="noreferrer">Probar una clase <ArrowIcon /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Danza + teatro musical · Fuenlabrada</p>
          <h1>
            <span className="hero-line">MUÉVETE.</span>
            <span className="hero-line">INTERPRETA.</span>
            <span className="hero-line hero-accent">EN ESCENA.</span>
          </h1>
          <div className="hero-bottom">
            <p>Un lugar para entrenar, interpretar y descubrir lo que pasa cuando se abre el telón.</p>
            <a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Quiero probar <ArrowIcon /></a>
          </div>
        </div>
        <div className="hero-media">
          <Image
            src="/images/grease.jpg"
            alt="Intérpretes de Dreams durante la producción de Grease"
            fill priority sizes="(max-width: 800px) 100vw, 46vw"
          />
          <div className="hero-stamp"><strong>4,9</strong><span>50+ reseñas</span></div>
          <p className="photo-credit">Grease · Dreams, 2026 <span>Foto: Mario Cubo</span></p>
        </div>
      </section>

      <section className="marquee" aria-label="Mensaje destacado">
        <div>SAL DEL ENSAYO · ENTRA EN ESCENA · SAL DEL ENSAYO · ENTRA EN ESCENA ·</div>
      </section>

      <section className="paths" id="probar">
        <div className="section-kicker"><span>01</span> Por dónde empezar</div>
        <div className="paths-intro">
          <h2>ELIGE CÓMO<br /><em>QUIERES EMPEZAR.</em></h2>
          <p>No necesitas experiencia ni tenerlo decidido. Cuéntales qué te apetece probar y te orientarán hacia el grupo que mejor encaje contigo.</p>
        </div>
        <div className="path-list">
          {paths.map((item) => (
            <article className="path" key={item.no}>
              <span>{item.no}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stage-break">
        <Image src="/images/pasion.jpg" alt="Bailarina de Dreams sobre el escenario" fill sizes="100vw" />
        <p>CLASE. ENSAYO.<br /><span>ESCENARIO.</span></p>
        <small>Pasión por la danza · 2026 · Foto: Mario Cubo</small>
      </section>

      <section className="season" id="escena">
        <div className="season-heading">
          <div className="section-kicker light"><span>02</span> Temporada 2026</div>
          <h2>LO QUE PASA<br />CUANDO EL AULA<br /><em>SE CONVIERTE<br />EN ESCENARIO.</em></h2>
        </div>
        <div className="season-grid">
          {season.map((item, index) => (
            <article className={`show show-${index + 1}`} key={item.title}>
              <div className="show-image"><Image src={item.image} alt={`Producción ${item.title} de Dreams`} fill sizes="(max-width: 720px) 100vw, 33vw" /></div>
              <div className="show-meta"><h3>{item.title}</h3><p>{item.date}</p></div>
            </article>
          ))}
        </div>
        <p className="season-note">No es solo aprender pasos o texto. Es construir algo juntos y llevarlo hasta el escenario.</p>
      </section>

      <section className="proof">
        <div className="proof-score"><strong>4,9</strong><span>sobre 5</span></div>
        <div className="proof-copy">
          <p className="section-kicker"><span>03</span> La gente lo cuenta</p>
          <h2>UN SITIO AL QUE<br /><em>QUIERES VOLVER.</em></h2>
          <p>Más de 50 valoraciones respaldan el trabajo de la escuela y la experiencia de quienes ya forman parte de Dreams.</p>
          <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Dreams+Estudio+de+Danza+y+Teatro+Musical+Fuenlabrada+rese%C3%B1as" target="_blank" rel="noreferrer">Leer reseñas en Google <ArrowIcon /></a>
        </div>
      </section>

      <section className="founder">
        <div className="founder-copy">
          <p className="section-kicker light"><span>04</span> Una escuela que se mueve</p>
          <h2>DREAMS NACIÓ<br />PARA HACER<br /><em>QUE PASEN COSAS.</em></h2>
          <p>Alba Durán ha convertido una idea emprendedora en una escuela presente en galas, certámenes y producciones de Fuenlabrada.</p>
        </div>
        <div className="founder-image">
          <Image src="/images/fin-curso.jpg" alt="Gala de fin de curso de Dreams" fill sizes="(max-width: 760px) 100vw, 48vw" />
          <span>Gala fin de curso · 2026 · Foto: Mario Cubo</span>
        </div>
      </section>

      <section className="contact" id="contacto">
        <p className="section-kicker"><span>05</span> Tu primer paso</p>
        <h2>EL ESCENARIO<br />PUEDE EMPEZAR<br /><em>HOY.</em></h2>
        <p className="contact-lead">Pregunta por los grupos actuales y encuentra tu sitio en Dreams.</p>
        <div className="contact-actions">
          <a className="button button-dark" href={whatsapp} target="_blank" rel="noreferrer">Escribir por WhatsApp <ArrowIcon /></a>
          <a className="button button-outline" href={gmail} target="_blank" rel="noreferrer">Enviar un email <ArrowIcon /></a>
        </div>
        <div className="contact-grid">
          <a href={maps} target="_blank" rel="noreferrer"><span>Ven a Dreams</span><strong>Av. de Europa, 2<br />Fuenlabrada</strong><ArrowIcon /></a>
          <a href="tel:+34641219125"><span>Llama</span><strong>641 21 91 25</strong><ArrowIcon /></a>
          <div><span>Horario habitual</span><strong>L–J · 16:00–21:30<br />V · 16:00–21:00<br />S · 10:00–14:00</strong></div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">DREAMS<span>·</span></a>
        <p>Danza y teatro musical en Fuenlabrada.</p>
        <div><a href={maps} target="_blank" rel="noreferrer">Cómo llegar</a><a href={gmail} target="_blank" rel="noreferrer">Email</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
      </footer>
    </main>
  );
}
