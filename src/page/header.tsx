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
                    Hogar
                </li>

                <li className="list">
                    Sobre Nosotros
                </li>

                <li
                    className="ministerios"
                    onClick={() => setAbierto(!abierto)}
                >
                    Ministerios

                    {abierto && (
                        <ul className="mins">

                            <li onClick={() => navigate("/Damas")}>Damas</li>
                            <li onClick={() => navigate("/Caballeros")}>Caballeros</li>
                            <li onClick={() => navigate("/Jovenes")}>Jóvenes</li>
                            <li onClick={() => navigate("/Niños")}>Niños</li>
                            <li onClick={() => navigate("/Alabanza")}>Alabanza</li>
                            <li onClick={() => navigate("/Consolidación")}>Consolidación</li>
                            <li onClick={() => navigate("/Servidores")}>Servidores</li>
                            <li onClick={() => navigate("/Oración")}>Oración</li>
                            <li onClick={() => navigate("/Protocolo")}>Protocolo</li>
                            <li onClick={() => navigate("/Familias")}>Familias</li>
                            <li onClick={() => navigate("/Parejas")}>Parejas</li>
                            <li onClick={() => navigate("/Danza")}>Danza</li>
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
                    Contacto
                </li>

            </ul>

        </header>
    );
};

export default Header;