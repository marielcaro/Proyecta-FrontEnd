import { useRef } from "react"
import "./style.css"

import Office from '../../assets/icons/office.svg'
import { iniciarSesion } from "../../services/strapi-cms"

const Login = () => {

    const email = useRef()
    const password = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        iniciarSesion(email.current.value, password.current.value)
    }

    return (
        <div className="login">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-5">
                        <div className="row text-white text-center">
                            <h2>Investigación Colaborativa</h2>
                            <h2>Universidad Nacional de Santiago del Estero</h2>
                        </div>
                        <div className="row">

                            <img src={Office} alt="Office" className="img-fluid" />

                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="card">
                            <h1 className="card-title text-center my-4">
                                Iniciar Sesion
                            </h1>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input ref={email} type="email" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Contraseña</label>
                                        <input ref={password} type="password" className="form-control" />
                                    </div>
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