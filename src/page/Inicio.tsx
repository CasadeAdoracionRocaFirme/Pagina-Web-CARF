import "../style/inicio.css";

const Inicio = () => {
  return (
    <>
    <main className="contenido">
      <video autoPlay muted loop playsInline className="video-bg">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="overlay">
        <p>~ BIENVENIDOS ~</p>
        <h1>Casa de Adoración <br /> <span>Roca Firme ᨒ</span></h1>
        <p>──────────── ✧ ────────────</p>
        <i>Una iglesia comprometida con la verdad de la Palabra de Dios</i>

         <div className="botones">
            <a href="#Contacto">CONTACTO</a>
            <a href="#Ministerios">MINISTERIOS</a>
         </div>
      </div>
    </main>
        <section className="horarios">
        <ul className="horario">
          <li>DOMINGOS 
            <p className="name">Escuela Dominical</p>
            <p>08:30 a. m.</p>
          </li>
          <li>MARTES
            <p className="name">Enseñanza de discipulado</p> 
            <p className="name">Consolidación</p>
            <p className="name">Liderazgo</p>
            <p>07:00 p. m.</p>
          </li>
          <li>JUEVES  
            <p className="name">Jueves de Gloria</p>
            <p>07:00 p. m.</p>
          </li>
          <li>SÁBADO
            <p className="name">Ayunos</p>
            <p>09:30 a. m.</p>
            <p className="name">Reunión juvenil</p>
            <p>06:30 p. m.</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Inicio;