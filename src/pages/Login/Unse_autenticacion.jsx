import { useRef, useState } from "react"
import "./style.css"
import "./style-postlogin.css"
import Navbar from "../../components/Navbar"

import CalendarIcon from '../../assets/icons/calendar.svg'
import NameIcon from '../../assets/icons/name.svg'




const Unse_autenticacion = () => {

    const user = useRef()

    return (
        <div className="postpostlogin">
            <Navbar isAuthenticated />
            <div className="container">
                <div className="card postlogin">
                    <div className="d-flex row justify-content-center align-items-center py-4">
                        <div className="col text-center justify-content-center">
                            <h1 className="title-aut">¿Tienes un proyecto de Investigación en Mente?</h1>
                            <p className="texto-aut">IMPORTANTE: Necesitas tener un título de grado y formar parte del grupo de Investigadores de la Universidad Nacional de Santiago del Estero. Para formar parte del grupo de Investigadores de la UNSE, puedes dirigirte a la página oficial www.unse.edu.ar para obtener más información,</p>
                        </div>
                    </div>
                    <div className="grid-3 d-flex justify-content-center">
                        <div className="Formulario">
                            <form>
                                <div className="my-3 d-flex">
                                    <img src={NameIcon} alt="user" className="img-fluid" />
                                    <input
                                        placeholder="DNI"
                                        ref={user} type="text"
                                        className="form-control border-top-0 border-start-0 border-end-0"
                                    />
                                </div>
                                <div className="my-3 d-flex">
                                    <img src={NameIcon} alt="user" className="img-fluid" />
                                    <input
                                        placeholder="Legajo"
                                        ref={user} type="text"
                                        className="form-control border-top-0 border-start-0 border-end-0"
                                    />
                                </div>
                                <div className="my-3 d-flex">
                                    <img src={CalendarIcon} alt="calendar" className="img-fluid" />
                                    <input
                                        type="date"
                                        value="Fecha de Graduacion"
                                        className="form-control border-top-0 border-start-0 border-end-0"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row justify-text-center">
                        <ul className="text-aut">
                            <li>*Recordá que tus datos deben coincidir con la Base de Datos de Investigadores de la UNSE.
                            </li>
                            <li>*Cuando se apruebe tu solicitud de Líder te enviaremos una notificación al correo electrónico indicado
                            </li>
                        </ul>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Unse_autenticacion