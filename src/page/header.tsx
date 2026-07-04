import { useState } from "react";
import "../style/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const [abierto, setAbierto] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <header className="header">

            <div className="logo">
                <img height="65" src="/logo.png" alt="Logo" />
            </div>

            <button
                className="menu-btn"
                onClick={() => setMenuAbierto(!menuAbierto)}
            >
                ☰
            </button>

            <ul className={`header-ul ${menuAbierto ? "activo" : ""}`}>

                <li
                    className="list"
                    onClick={() => {
                        navigate("/");
                        setMenuAbierto(false);
                    }}
                >
                    <a href="#Hogar">Hogar</a>
                </li>

                <li className="list">
                    <a href="#Nosotros">Sobre Nosotros</a>
                </li>

                <li
                    className="ministerios"
                    onClick={() => setAbierto(!abierto)}
                >
                    Ministerios

                    {abierto && (
                        <ul className="mins">

                            <li onClick={() => navigate("/Damas")}>Damas</li>
                            <hr />
                            <li onClick={() => navigate("/Caballeros")}>Caballeros</li>
                            <hr />
                            <li onClick={() => navigate("/Jovenes")}>Jóvenes</li>
                            <hr />
                            <li onClick={() => navigate("/Niños")}>Niños</li>
                            <hr />
                            <li onClick={() => navigate("/Alabanza")}>Alabanza</li>
                            <hr />
                            <li onClick={() => navigate("/Consolidación")}>Consolidación</li>
                            <hr />
                            <li onClick={() => navigate("/Servidores")}>Servidores</li>
                            <hr />
                            <li onClick={() => navigate("/Oración")}>Oración</li>
                            <hr />
                            <li onClick={() => navigate("/Protocolo")}>Protocolo</li>
                            <hr />
                            <li onClick={() => navigate("/Familias")}>Familias</li>
                            <hr />
                            <li onClick={() => navigate("/Parejas")}>Parejas</li>
                            <hr />
                            <li onClick={() => navigate("/Danza")}>Danza</li>
                            <hr />
                            <li onClick={() => navigate("/Casas_de_Oración")}>Casas de Oración</li>

                        </ul>
                    )}

                </li>

                <li
                    className="list"
                    onClick={() => {
                        navigate("/Contacto");
                        setMenuAbierto(false);
                    }}
                >
                    <a href="#Contacto">Contacto</a>
                </li>

            </ul>

        </header>
    );
};

export default Header;