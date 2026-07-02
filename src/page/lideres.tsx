import '../style/lideres.css'

const Lideres = () => {
    const lideres = [
        {
            nombre: 'Jose',
            cargo: 'Caballeros',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cbTQhT-TmZzQhEmI_d1quSa17wxhBhBdAg&s'
        },
        {
            nombre: 'Anibal',
            cargo: 'Diaconos',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cbTQhT-TmZzQhEmI_d1quSa17wxhBhBdAg&s'
        },
        {
            nombre: 'Claudia',
            cargo: 'Damas',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cbTQhT-TmZzQhEmI_d1quSa17wxhBhBdAg&s'
        },
        {
            nombre: 'Josefina',
            cargo: 'Niños',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cbTQhT-TmZzQhEmI_d1quSa17wxhBhBdAg&s'
        },
        {
            nombre: 'Maria',
            cargo: 'Ancianos',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cbTQhT-TmZzQhEmI_d1quSa17wxhBhBdAg&s'
        },
        {
            nombre: 'Estefani',
            cargo: 'Evangelismo',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cbTQhT-TmZzQhEmI_d1quSa17wxhBhBdAg&s'
        },
        {
            nombre: 'Camilo',
            cargo: 'Musica',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cbTQhT-TmZzQhEmI_d1quSa17wxhBhBdAg&s'
        },
        {
            nombre: 'Jorge',
            cargo: 'Audiovisuales',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cbTQhT-TmZzQhEmI_d1quSa17wxhBhBdAg&s'
        },
        {
            nombre: 'edinson',
            cargo: 'Jovenes',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cbTQhT-TmZzQhEmI_d1quSa17wxhBhBdAg&s'
        }
    ]
    return (
        <main className='lideres'>
            
            <div className="contenedor-principal">
                <h2 >Pastores</h2>
                <div className="pastores">
                    <img src="/img/pastores.jpeg" alt="pastores CARF" />
                    <p>El Pastor <strong>Luis Jimenez</strong> Y La Pastora <strong>Dina Orozco</strong> líderes de la Casa de Adoración Roca Firme, 
                        llamados por Dios para servir con amor, dedicación y fidelidad a Su obra. Su ministerio está fundamentado en la enseñanza de 
                        la Palabra de Dios, la dirección del Espíritu Santo y el compromiso de formar discípulos que reflejen el carácter de Cristo. 
                        Con una visión enfocada en la restauración de las familias, el crecimiento espiritual y la expansión del Reino de Dios, 
                        trabajan incansablemente para guiar a la congregación hacia una relación más profunda con Jesucristo. Su deseo es que cada 
                        persona que llegue a la iglesia encuentre esperanza, propósito, restauración y un lugar donde crecer en la fe. A través de su liderazgo, 
                        procuran edificar una iglesia sólida, comprometida con el cumplimiento de la Gran Comisión: anunciar el Evangelio, hacer discípulos 
                        y manifestar el amor de Cristo con hechos y palabras.</p>
                </div>
            </div>
        </main>
    )
}

export default Lideres