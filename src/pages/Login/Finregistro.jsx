import { useRef } from 'react'
import Navbar from "../../components/Navbar"
import "./style.css"
import "./style-postlogin.css"

const Finregistro = () => {
    return (
        <div className="postpostlogin">
            <Navbar isAuthenticated />
            <div className="container">
                <div className="finregistro">
                    <div className="contenido">
                        <h1 className="title2">¡Gracias!</h1>
                        <div >
                            <p className="card-text Texto" >Una vez que verifiquemos tus datos, aproximadamente en 7 días te enviaremos una notificación a tu correo electrónico para darte de alta como Líder de Proyectos.</p>
                        </div>
                        <div >
                            <p className="card-text Texto"> **Recuerda revisar tu casilla de Spam en caso de que no recibas este correo en el tiempo indicado.</p>
                        </div>
                        <div className>
                    </div>
                    <div className="col d-flex justify-content-end boton">
                            <button className="btn btn-login btn-size-login">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finregistro

