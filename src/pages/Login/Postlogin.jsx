import { useRef } from 'react'
import Navbar from "../../components/Navbar"
import "./style.css"
import "./style-postlogin.css"

import LeftLogin from '../../assets/imgs/left-login.svg'
import RepeatIcon from '../../assets/icons/repeat.svg'
import EmailIcon from '../../assets/icons/email.svg'
import UserLogin from '../../assets/icons/user.svg'
import KeyLogin from '../../assets/icons/key.svg'
import CalendarIcon from '../../assets/icons/calendar.svg'
import medicoVector from '../../assets/icons/medicoVector.svg'
import MonumentIcon from '../../assets/icons/monument.svg'
import NameIcon from '../../assets/icons/name.svg'
import ScientificIcon from '../../assets/icons/scientific 1.svg'

const Postlogin = () => {

    const repeatPassword = useRef()
    const password = useRef()
    const email = useRef()
    const user = useRef()

    return (
        <div className="login">
            <Navbar isAuthenticated />
            <div className="container">
                <div className="card postlogin">
                    <div className="row text-center">
                        <h1 className="title">¡Bienvenid@!</h1>
                        <p className="subtitle">¡Qué bueno tenerte abordo!</p>
                        <p className="subtitle2">Quisiéramos saber un poco más sobre vos</p>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4">
                            <p>Subí tu foto de perfil </p>
                            <div className="Fotop"> </div>
                            <p>Arrastrar y soltar </p>
                            <div>
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class ="form-check-label" for="flexCheckDefault">
                                    Acepto terminos y condiciones
                                    </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="Formulario">
                                <form>
                                    <div className="my-4 d-flex">
                                        <img src={NameIcon} alt="user" className="img-fluid" />
                                        <input
                                            placeholder="Nombre Completo"
                                            ref={user} type="text"
                                            className="form-control border-top-0 border-start-0 border-end-0"
                                        />
                                    </div>
                                    <div className="my-4 d-flex">
                                        <img src={CalendarIcon} alt="key" className="img-fluid" />
                                        <input
                                            type="date"
                                            value="Fecha de nacimiento"
                                            className="form-control border-top-0 border-start-0 border-end-0"
                                        />
                                    </div>
                                    <div className="my-4 d-flex">
                                        <img src={medicoVector} alt="profesion" className="img-fluid" />
                                        <input
                                            placeholder="Profesion"
                                            ref={user} type="text"
                                            className="form-control border-top-0 border-start-0 border-end-0"
                                        />
                                    </div>
                                    <div className="my-4 d-flex">
                                        <img src={RepeatIcon} alt="repeat" className="img-fluid" />
                                        <input
                                            placeholder="Grado de Formacion"
                                            ref={user} type="text"
                                            className="form-control border-top-0 border-start-0 border-end-0"
                                        />
                                    </div>
                                    <div className="my-4 d-flex">
                                        <img src={MonumentIcon} alt="monument" className="img-fluid" />
                                        <input
                                            placeholder="Universidad"
                                            ref={user} type="text"
                                            className="form-control border-top-0 border-start-0 border-end-0"
                                        />
                                    </div>
                                    <div className="my-4 d-flex">
                                        <img src={ScientificIcon} alt="scientific" className="img-fluid" />
                                        <input
                                            placeholder="Áreas de interes científico"
                                            ref={user} type="text"
                                            className="form-control border-top-0 border-start-0 border-end-0"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col d-flex justify-content-end">
                            <button className="btn btn-login btn-size-login">Siguiente</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Postlogin