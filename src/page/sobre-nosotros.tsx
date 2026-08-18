import '../style/sobre-nosotros.css'

const Nosotros  = () => {
    return (
        <>
        <main className="nosotros">
            <div className='d-flex'>
            <section className='derecha'>
            <h1>Fundamentados en 
                <br />
                la Verdad de Dios
                </h1>
            <p>
                Casa De Adoración Roca Firme, es una iglesia comprometida con la enseñanza fiel de la Palabra de Dios, la cual reconocemos como nuestra máxima autoridad en doctrina, fe y conducta. Creemos en el poder transformador del Espíritu Santo y en la formación del carácter de Cristo en cada creyente, promoviendo una vida de obediencia, santidad y servicio. 
                Permanecemos firmes en la sana doctrina, rechazando toda enseñanza que se aparte de las Escrituras. Nuestra misión es cumplir la Gran Comisión dada por Jesucristo: evangelizar y hacer discípulos.
            </p>
            
            <p className='cita'><i>"Por tanto, id, y haced discípulos a todas las naciones..."</i>
            <br />
                <span>Mateo 28:19-20; Marcos 16:15-16; Lucas 24:47</span>
            </p>
            </section>
            <section className='izquierda'>
                <img src="/img/iglesia.png" alt="foto de la congregacion" />
            </section>
            </div>
            <div className='mision-vision'>
                <div className='mision'>
                <h2>Nuestra Misión</h2>
                <h3>Establecer el Reino de Cristo</h3>
                <p>
                    Proclamando el Evangelio y llevando las buenas nuevas de salvación. 
                    <br />
                    Cumplimos el mandato de Jesús de hacer discípulos, reflejando su amor con hechos y palabras, 
                    mediante un servicio de excelencia, guiados por el Espíritu Santo y utilizando los dones y 
                    herramientas que Dios nos ha dado.

                </p>
            </div>
            <div className='vision'>
                <h2>Nuestra Visión</h2>
                <h3>Una obra completa y duradera</h3>
                <p>
                    <br />
                    Ser una casa de restauración donde las familias sean guiadas, fortalecidas y fundamentadas sobre la 
                    roca que es Cristo. Asimismo, ser una iglesia que honra a Dios, ama a su comunidad 
                    y trabaja con compromiso por su bienestar.
                </p>
            </div>
            </div>

            
            <section className='nuestra-historia'>
                <h4>Nuestra Historia</h4>
                <h1>De Generación en Generación</h1>
                
                <div className='historia'>
                    <p>
                        La Iglesia Cristiana ~Casa de Adoración Roca Firme~ nació en el corazón de Dios 
                        y fue tomando forma poco a poco, a través de la fe, la oración y la disposición 
                        de muchas personas que creyeron que Dios tenía un propósito con este lugar.</p>
                    <div className='image'>
                        <img src="/img/2020.jpg" alt="iglesia en 2020" />
                    </div>
                    <div>
                        <p>
                            Todo comenzó en enero de 2015, cuando iniciamos como una casa de amor (célula) en 
                            el hogar de la familia del hermano "Andrés Sánchez". 
                            <br />
                            <br />
                            Era un espacio sencillo, pero lleno de entusiasmo y del deseo de compartir la Palabra de Dios con otras personas. 
                            Allí comenzaron nuestras primeras reuniones, donde orábamos, adorábamos, estudiábamos 
                            la Biblia y, sobre todo, buscábamos que más personas pudieran conocer a Cristo.
                            <br />
                            <br />
                            Con el paso del tiempo, otros hermanos y simpatizantes también abrieron las puertas 
                            de sus hogares. Así comenzó una etapa muy especial para nosotros: la iglesia se fue 
                            moviendo de casa en casa.
                            Así comenzó una etapa muy especial para nosotros: la iglesia se fue moviendo de casa 
                            en casa. 
                            <br />
                            <br />
                            Cada hogar se convirtió en un lugar de encuentro, de oración y de enseñanza.
                            No teníamos un templo, pero teníamos algo mucho más importante: el deseo de seguir 
                            adelante y la certeza de que Dios estaba guiando cada paso.
                        </p>
                    </div>
                    <div>
                        <p>
                            Al principio nos reuníamos un día a la semana. Después, a medida que el grupo fue 
                            creciendo y el deseo de buscar más de Dios aumentaba, pasamos a reunirnos dos días, 
                            luego tres días a la semana, incluyendo un día especial de ayuno y oración.
                            <br />
                            <br />
                            Fueron años de aprendizaje, esfuerzo y crecimiento. También hubo momentos difíciles y 
                            muchas cosas que resolver, pero cada dificultad nos enseñó a depender más de Dios. 
                            Mirando atrás, podemos ver cómo Él fue preparando el camino aun cuando nosotros no 
                            sabíamos exactamente hacia dónde nos estaba llevando.
                            <br />
                            <br />
                            Después de aproximadamente dos años y medio reuniéndonos en diferentes casas, llegó 
                            uno de los momentos más importantes de nuestra historia: alquilar un lugar para poder 
                            congregarnos de manera permanente.
                            <br />
                            <br />
                            No era un lugar grande ni perfecto, pero para nosotros representaba mucho. Era fruto 
                            de la oración, del trabajo y de la perseverancia de todos aquellos que habían creído 
                            en este proyecto desde el principio. Con el tiempo, ese lugar también comenzó a 
                            quedarse pequeño, y poco a poco hemos ido haciendo mejoras y ampliaciones para recibir
                             a más personas y continuar desarrollando la obra que Dios nos ha encomendado.
                        </p>
                    </div>
                    <div className='image'>
                        <img src="/img/2020-2.jpeg" alt="iglesia actual" />
                    </div>
                        <p>
                            Hoy todavía no contamos con un templo propio, pero seguimos creyendo que llegará 
                            ese día. Oramos, trabajamos y confiamos en Dios, sabiendo que cada etapa tiene su 
                            propósito y que todo sucede en su tiempo.
                            <br />
                            <br />
                            Seguimos caminando con la misma esperanza con la que comenzamos: alcanzar almas para 
                            Cristo, enseñar la Palabra de Dios, formar familias en la fe y ser una iglesia que 
                            refleje el amor de Jesús.
                        </p>
                    </div>
            </section>
        </main>
        </>
    )
}

export default Nosotros