import { useRef } from "react"
import "./style.css"

import Office from '../../assets/icons/office.svg'
import { iniciarSesion } from "../../services/strapi-cms"
import Navbar from "../../components/Navbar"

const Login = () => {

    const email = useRef()
    const password = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        iniciarSesion(email.current.value, password.current.value)
    }

    return (
        <div className="login">
            <Navbar />
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-5">
                        <div className="row text-white left-title">
                            <h1>Investigaci&oacute;n Colaborativa</h1>
                            <h1>Universidad Nacional de Santiago del Estero</h1>
                        </div>
                        <div className="row justify-content-center align-items-center">
                            <img src={Office} alt="Office" className="img-fluid login-img" />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                        <div className="form-login__container">
                            <div className="form-login__content">
                                <h1 className="form-login__title">
                                    Iniciar Sesi&oacute;n
                                </h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input ref={email} type="email" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Contraseña</label>
                                        <input ref={password} type="password" className="form-control" />
                                    </div>
                                    <p className="form-login__forgot">¿Olvidaste tu Contraseña?</p>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-login rounded-pill btn-size-login  ">Ingresar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login