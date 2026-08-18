import '../style/footer.css'

const Footer = () => {
    return (
        <footer >
            <div className="footer">
            <div>
            <h2 className='footname'><span>CASA DE ADORACIÓN</span> 
            <br />
            ROCA FIRME</h2>
            <p>Una iglesia comprometida con la verdad de la Palabra de Dios
                <br />
            en Barranquilla, Colombia.</p>
            </div>
            <ul className='navegacion'>
                <h2>Navegación</h2>
                    <li><a href="#Inicio">Inicio</a></li>
                    <li><a href="#SobreNosotros">Sobre Nosotros</a></li>
                    <li><a href="#Ministerios">Ministerios</a></li>
                    <li><a href="#Lideres">Líderes</a></li>
                    <li><a href="#Contacto">Contacto</a></li>
            </ul>
            <ul>
                <h2>Información</h2>
                <li>
                    <p>Correo: <span>carfsanluis@gmail.com</span></p>
                </li>
                <li>
                    <p>Dirección: <span>Cra-3b #94-51 San Luis Barranquilla</span></p>
                </li>
                <li>
                    <p 
                    className='llegar'
                    onClick={() => window.open('https://www.google.com/maps/embed?pb=!4v1782500157649!6m8!1m7!1saaXhQMMe6FrHT9RONOQ5uQ!2m2!1d10.93953330236442!2d-74.8273063486773!3f164.58556091003624!4f-21.802246303724942!5f0.7820865974627469')}>
                        ¿Cómo llegar? ➡
                    </p>
                </li>
            </ul>
            </div>
            <hr />
            <p className='copy'>&copy; {new Date().getFullYear()} Casa de Adoración Roca Firme. Todos los derechos reservados.</p>
            <br />
        </footer>
    )
}

export default Footer