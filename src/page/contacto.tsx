import '../style/contacto.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contacto = () => {

    const form = useRef<HTMLFormElement>(null);

    const enviarCorreo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                'service_rn5fso9',
                'template_iidtqsq',
                form.current,
                'QcQaMNN7SLgbd0QJf'
            )
            .then(() => {
                alert('Mensaje enviado correctamente.');
                form.current?.reset();
            })
            .catch((error) => {
                console.log(error);
                alert('Ocurrió un error al enviar el mensaje.');
            });
    };

    return (
        <main className='contacto'>
            <h1>~ Contacto ~</h1>

            <p>¿Estas solicitando oración?</p>

            <p>
                Queremos saber de ti ponte en contacto con nosotros
                <br />
                <span>O acercate a nuestro lugar de Reunión</span>
            </p>

            <div className='contenedor-contacto'>

                <form ref={form} onSubmit={enviarCorreo}>

                    <label htmlFor="nombre">
                        Nombre:
                        <br />
                        <input
                            type="text"
                            id="nombre"
                            name="name"
                            placeholder="Escribe tu Nombre"
                            required
                        />
                    </label>

                    <label htmlFor="correo">
                        Correo:
                        <br />
                        <input
                            type="email"
                            id="correo"
                            name="email"
                            placeholder="Tu correo"
                            required
                        />
                    </label>
                    <label htmlFor="fecha">
                        Fecha:
                        <br />
                        <input type="date" />
                    </label>

                    <label htmlFor="peticion">
                        Dejanos saber tu petición
                        <br />
                        <textarea
                            id="peticion"
                            name="message"
                            placeholder="Escribe tu motivo"
                            required
                        ></textarea>
                    </label>

                    <button type="submit">
                        Enviar
                    </button>

                </form>

                <div className='redes'>
                    <h2>Redes</h2>

                    <ul>
                        <a href="https://wa.me/573006708861" target="_blank" rel="noopener noreferrer">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp" />
                        </a>

                        <a href="https://www.facebook.com/share/1EjyXABkr7/" target="_blank" rel="noopener noreferrer">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook" />
                        </a>

                        <a href="https://www.instagram.com/casadeadoracionrocafirme_?igsh=ZDRlNWJ4bjkxeDNq" target="_blank" rel="noopener noreferrer">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram" />
                        </a>
                    </ul>

                    <h2>Donaciones</h2>

                    <p>
                        Tu aporte es una semilla que nos permite seguir expandiendo el Reino de Dios. Cada donación, sin importar su tamaño, contribuye al crecimiento del ministerio y al cumplimiento de la misión que Dios nos ha encomendado.
                        <br />
                        <hr />
                        <i>
                            <span>
                                "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre."
                                <br />
                                <strong>2 Corintios 9:7</strong>
                            </span>
                        </i>
                    </p>

                </div>

            </div>

        </main>
    )
}

export default Contacto;