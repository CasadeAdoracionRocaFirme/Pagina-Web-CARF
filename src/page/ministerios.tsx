import { useRef } from "react";
import "../style/ministerios.css";
import { useNavigate } from "react-router-dom";

const Ministerios = () => {
    const navigate = useNavigate();

    const sliderRef = useRef<HTMLDivElement | null>(null);

    const ministerios = [
        { nombre: "Damas", slug: "Damas", imagen: "/img/damas.jpg" },
        { nombre: "Caballeros", slug: "Caballeros", imagen: "/img/caballeros.jpeg" },
        { nombre: "Jóvenes", slug: "Jovenes", imagen: "/img/jovenes.jpg" },
        { nombre: "Niños", slug: "Niños", imagen: "/img/niños.jpg" },
        { nombre: "Alabanza", slug: "Alabanza", imagen: "/img/alabanza.jpg" },
        { nombre: "Consolidación", slug: "Consolidación", imagen: "/img/consolidacion.jpg" },
        { nombre: "Servidores", slug: "Servidores", imagen: "/img/servidores.jpg" },
        { nombre: "Oración", slug: "Oración", imagen: "/img/oracion.jpg" },
        { nombre: "Protocolo", slug: "Protocolo", imagen: "/img/protocolos.jpg" },
        { nombre: "Familias", slug: "Familias", imagen: "/img/familias.jpg" },
        { nombre: "Parejas", slug: "Parejas", imagen: "/img/parejas.jpg" },
        { nombre: "Danza", slug: "Danza", imagen: "/img/danza.jpg" },
        { nombre: "Casas de Oración", slug: "Casas_de_Oración", imagen: "/img/casas de oracion.jpg" },
    ];

    const siguiente = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: 350,
                behavior: "smooth",
            });
        }
    };

    const anterior = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: -350,
                behavior: "smooth",
            });
        }
    };

    return (
        <main className="ministerios-mins">
            <h1>Espacios de Servicio y Crecimiento</h1>

            <p>
                Donde cada persona puede desarrollar los
                dones y talentos que Dios le ha entregado para la edificación
                de la iglesia y la expansión de Su Reino.
            </p>

            <div className="slider-wrapper">

                <button
                    type="button"
                    className="btn-slider izquierda"
                    onClick={anterior}
                >
                    ❮
                </button>



                <div className="content" ref={sliderRef}>
                    {ministerios.map((ministerio) => (
                        <div
                            key={ministerio.slug}
                            className="mins-contenedor"
                            onClick={() =>
                                navigate(`/${ministerio.slug}`)
                            }
                        >
                            <img
                                src={ministerio.imagen}
                                alt={ministerio.nombre}
                            />

                            <div className="mins-info">
                                <h3>{ministerio.nombre}</h3>
                                <p>Conoce más</p>
                            </div>

                            <div className="mins-overlay">
                                <button type="button">
                                    Ver Ministerio
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                                <button
                    type="button"
                    className="btn-slider derecha"
                    onClick={siguiente}
                >
                    ❯
                </button>

            </div>
        </main>
    );
};

export default Ministerios;