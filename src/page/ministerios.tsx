import { useRef } from "react";
import "../style/ministerios.css";
import { useNavigate } from "react-router-dom";

const Ministerios = () => {
    const navigate = useNavigate();

    const sliderRef = useRef<HTMLDivElement | null>(null);

    const ministerios = [
        { ministerio: "Damas", imagen: "/img/damas.jpg" },
        { ministerio: "Caballeros", imagen: "/img/caballeros.jpeg" },
        { ministerio: "Jovenes", imagen: "/img/jovenes.jpg" },
        { ministerio: "Niños", imagen: "/img/niños.jpg" },
        { ministerio: "Alabanza", imagen: "/img/alabanza.jpg" },
        { ministerio: "Consolidación", imagen: "/img/consolidacion.jpg" },
        { ministerio: "Servidores", imagen: "/img/servidores.jpg" },
        { ministerio: "Oración", imagen: "/img/oracion.jpg" },
        { ministerio: "Protocolo", imagen: "/img/protocolos.jpg" },
        { ministerio: "Familias", imagen: "/img/familias.jpg" },
        { ministerio: "Parejas", imagen: "/img/parejas.jpg" },
        { ministerio: "Danza", imagen: "/img/danza.jpg" },
        { ministerio: "Casas_de_Oración", imagen: "/img/casas de oracion.jpg" },
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
            <h1>~ Ministerios ~</h1>

            <p>
                Nuestros ministerios son espacios de servicio, crecimiento y
                formación espiritual, donde cada persona puede desarrollar los
                dones y talentos que Dios le ha entregado para la edificación
                de la iglesia y la expansión de Su Reino. Creemos que cada
                miembro del cuerpo de Cristo tiene un propósito y un llamado
                específico, por lo que fomentamos un servicio guiado por el
                Espíritu Santo, realizado con amor, excelencia y compromiso.
                A través de cada ministerio buscamos impactar vidas,
                fortalecer la fe, servir a nuestra comunidad y cumplir la
                misión de anunciar el Evangelio de Jesucristo.
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
                            key={ministerio.ministerio}
                            className="mins-contenedor"
                            onClick={() =>
                                navigate(`/${ministerio.ministerio}`)
                            }
                        >
                            <img
                                src={ministerio.imagen}
                                alt={ministerio.ministerio}
                            />

                            <div className="mins-info">
                                <h3>{ministerio.ministerio}</h3>
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