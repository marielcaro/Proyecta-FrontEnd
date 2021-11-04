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
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
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