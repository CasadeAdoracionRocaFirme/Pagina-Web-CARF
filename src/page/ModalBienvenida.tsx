import { useEffect, useState } from "react";
import "../style/ModalBienvenida.css";

export default function ModalBienvenida() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const visto = sessionStorage.getItem("modalBienvenida");

    if (!visto) {
      setAbierto(true);
      sessionStorage.setItem("modalBienvenida", "true");
    }
  }, []);

  if (!abierto) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">

        <button
          className="modal-cerrar"
          onClick={() => setAbierto(false)}
        >
          ✕
        </button>

        <h2>¡Bienvenido!</h2>

        <p>
          Gracias por visitar nuestra iglesia.
        </p>

        <img src="img/bienvenida.jpg" alt="bienvenida" />

        <button
          className="modal-boton"
          onClick={() => setAbierto(false)}
        >
          Entrar
        </button>

      </div>
    </div>
  );
}