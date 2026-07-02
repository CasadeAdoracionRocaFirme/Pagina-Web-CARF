import '../style/footer.css'

const Footer = () => {
    return (
        <footer >
            <div className="footer">
                            <ul>
                <h2>Navegacion</h2>
                <ul>
                    <li><a href="#Inicio">Inicio</a></li>
                    <li><a href="#SobreNosotros">Sobre Nosotros</a></li>
                    <li><a href="#Ministerios">Ministerios</a></li>
                    <li><a href="#Lideres">Lideres</a></li>
                    <li><a href="#Contacto">Contacto</a></li>
                </ul>
            </ul>
            <ul>
                <h2>Informacion</h2>
                <li><p>Correo: </p>
                <span>carfsanluis@gmail.com</span>
                </li>
                <li>
                    <p>Direccion</p>
                    <span>Cra-3b #94-51 San Luis Barranquilla</span>
                </li>
            </ul>
            <div>
                <h2>¿¿ Como Llegar ??</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!4v1782500157649!6m8!1m7!1saaXhQMMe6FrHT9RONOQ5uQ!2m2!1d10.93953330236442!2d-74.8273063486773!3f164.58556091003624!4f-21.802246303724942!5f0.7820865974627469" width="400" height="250"  loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            </div>
            <p className='copy'>&copy; {new Date().getFullYear()} Casa de Adoración Roca Firme. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer