import "../style/inicio.css";

const Inicio = () => {
  return (
    <>
    <main className="contenido">
      <video autoPlay muted loop playsInline className="video-bg">
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="overlay">
        <h2>~ Bienvenidos ~</h2>
        <h1><strong>C</strong>ASA DE ADORACION <br /> <span>ROCA FIRME</span></h1>
        <p>Una iglesia comprometida con la verdad de la palabra</p>

         <div className="botones">
            <button><a href="#Contacto">Contacto</a></button>
            <button><a href="#Ministerios">Ministerios</a></button>
         </div>
      </div>
    </main>
        <section>
        <ul className="horarios">
          <li>Domingos 
            <p>Escuela Dominical</p>
            <p>08:30 A:M</p>
          </li>
          <span>|</span>
          <li>Martes
            <p>Enseñanza de Discipulado</p> 
            <p>Consolidación</p>
            <p>Liderazgo</p>
            <p>07:00 P.M</p>
          </li>
          <span>|</span>
          <li>Jueves  
            <p>Jueves de Gloria</p>
            <p>07:00 P.M</p>
          </li>
          <span>|</span>
          <li>Sábado 
            <p>Ayunos</p>
            <p>09:30 A.M</p>
            <p>Reunión Juvenil</p>
            <p>06:30 P.M</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Inicio;