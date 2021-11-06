import { useRef, useState } from "react"
import "./style.css"

import LeftLogin from '../../assets/imgs/left-login.svg'
import RepeatIcon from '../../assets/icons/repeat.svg'
import EmailIcon from '../../assets/icons/email.svg'
import UserLogin from '../../assets/icons/user.svg'
import KeyLogin from '../../assets/icons/key.svg'

import { iniciarSesion, crearCuenta } from "../../services/strapi-cms"
import ProyectosActivos from "../../components/ProyectosActivos"
import Navbar from "../../components/Navbar"
import InstruccionesAcceso from "../../components/InstruccionesAcceso"

const Login = () => {

    const [isLogin, setLogin] = useState(true)
    const repeatPassword = useRef()
    const password = useRef()
    const email = useRef()
    const user = useRef()

    const limpiarValores = () => {
        repeatPassword.current.value = ""
        password.current.value = ""
        email.current.value = ""
        user.current.value = ""
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (isLogin) {
            iniciarSesion(user.current.value, password.current.value)
            return
        }

        // TODO: Use formik!
        if (password.current.value !== repeatPassword.current.value) {
            alert("Las contraseñas son distintas")
            return
        }

        crearCuenta(user.current.value, email.current.value, password.current.value)

        setLogin(!isLogin)
        limpiarValores()
    }

    return (
        <div className="login">
            <Navbar />
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center py-4">
                    <div className="col-12 col-md-5">
                        <div className="row text-white left-title">
                            <h1>Investigaci&oacute;n Colaborativa</h1>
                            <h1>Universidad Nacional de Santiago del Estero</h1>
                        </div>
                        <div className="row justify-content-center align-items-center">
                            <img src={LeftLogin} alt="Office" className="img-fluid login-img" />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                        <div className="form-login__container login-shadow">
                            <div className="form-login__content">
                                <h1 className="form-login__title">
                                    {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
                                </h1>
                    
                                <form onSubmit={handleSubmit}>
                                    {
                                        isLogin
                                            ? <><div className="my-4 d-flex">
                                                <img src={UserLogin} alt="user" className="img-fluid" />
                                                <input
                                                    placeholder="Usuario"
                                                    ref={user} type="text"
                                                    className="form-control border-top-0 border-start-0 border-end-0"
                                                />
                                            </div>
                                                <div className="my-4 d-flex">
                                                    <img src={KeyLogin} alt="key" className="img-fluid" />
                                                    <input
                                                        ref={password}
                                                        type="password"
                                                        placeholder="Contraseña"
                                                        className="form-control border-top-0 border-start-0 border-end-0"
                                                    />
                                                </div>
                                                <p className="form-login__forgot">¿Olvidaste tu Contraseña?</p>
                                            </> : <> <div className="my-4 d-flex">
                                                <img src={UserLogin} alt="user" className="img-fluid" />
                                                <input
                                                    placeholder="Usuario"
                                                    ref={user} type="text"
                                                    className="form-control border-top-0 border-start-0 border-end-0"
                                                />
                                            </div>
                                                <div className="my-4 d-flex">
                                                    <img src={EmailIcon} alt="user" className="img-fluid" />
                                                    <input
                                                        ref={email} type="email"
                                                        placeholder="Correo Electronico"
                                                        className="form-control border-top-0 border-start-0 border-end-0"
                                                    />
                                                </div>
                                                <div className="my-4 d-flex">
                                                    <img src={KeyLogin} alt="key" className="img-fluid" />
                                                    <input
                                                        ref={password}
                                                        type="password"
                                                        placeholder="Contraseña"
                                                        className="form-control border-top-0 border-start-0 border-end-0"
                                                    />
                                                </div>
                                                <div className="my-4 d-flex">
                                                    <img src={RepeatIcon} alt="key" className="img-fluid" />
                                                    <input
                                                        type="password"
                                                        ref={repeatPassword}
                                                        placeholder="Repetir Contraseña"
                                                        className="form-control border-top-0 border-start-0 border-end-0"
                                                    />
                                                </div>
                                            </>}
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-login rounded-pill btn-size-login  ">
                                            {isLogin ? "Ingresar" : "Crear"}
                                        </button>
                                    </div>
                                </form>
                                <div className={`form-inicio__footer ${isLogin ? "form-inicio__footer-login" : "form-inicio__footer-signup"}`}>
                                    <p>{isLogin ? "¿Aún no tienes una cuenta?" : "¿Ya tienes una cuenta?"}</p>
                                    <p className="form-incio__enlace" onClick={() => setLogin(!isLogin)}>
                                        {isLogin ? "Crear Una Cuenta" : "Iniciar Sesión"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProyectosActivos />
                <InstruccionesAcceso/>
            </div>
        </div>
    )
}

export default Login