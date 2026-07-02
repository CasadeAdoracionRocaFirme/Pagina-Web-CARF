import { useState } from 'react'
import '../style/header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const [abierto, setAbierto] = useState(false)
    return (
        <>
        <header className='header'>
            <div className='logo'>
                <img height={'65px'} src="/logo.png" alt="" />
            </div>

            <ul className='header-ul'>
                <li className='list'>Hogar</li>
                <li className='list'>Sobre Nosotros</li>
                <li className='ministerios'
                    onClick={() => setAbierto(!abierto)}
                    onMouseEnter={() => setAbierto(true)}
                    onMouseLeave={() => setAbierto(false)}>Ministerios
                    {abierto && (
                    <>
                    <ul className='mins'>
                        <li onClick={() => navigate('/Damas')} className='list'>Damas</li>
                        <li onClick={() => navigate('/Caballeros')} className='list'>Caballeros</li>
                        <li onClick={() => navigate('/Jovenes')} className='list'>Jovenes</li>
                        <li onClick={() => navigate('/Niños')} className='list'>Niños</li>
                        <li onClick={() => navigate('/Alabanza')} className='list'>Alabanza</li>
                        <li onClick={() => navigate('/Consolidación')} className='list'>Consolidación</li>
                        <li onClick={() => navigate('/Servidores')} className='list'>Servidores</li>
                        <li onClick={() => navigate('/Oración')} className='list'>Oración</li>
                        <li onClick={() => navigate('/Protocolo')} className='list'>Protocolo</li>
                        <li onClick={() => navigate('/Familias')} className='list'>Familias</li>
                        <li onClick={() => navigate('/Parejas')} className='list'>Parejas</li>
                        <li onClick={() => navigate('/Danza')} className='list'>Danza</li>
                        <li onClick={() => navigate('/Casas_de_Oración')} className='list'>Casas_de_Oración</li>
                    </ul>
                    </>
                )}
                </li>
                <li className='list' onClick={() => navigate('/Contacto')}>Contacto</li>
            </ul>



        </header>
        </>
    )
}

export default Header