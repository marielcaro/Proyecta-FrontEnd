import "./style.css"

import Office from '../../assets/icons/office.svg'

const Login = () => {
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
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Usuario</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Contraseña</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="text-center"><button type="submit" className="btn btn-login rounded-pill btn-size-login  ">Ingresar</button>
                                    </div>
                                    <div className="text-center"><button type="submit" className="btn btn-login rounded-pill btn-size-login  ">Ingresar2</button>
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