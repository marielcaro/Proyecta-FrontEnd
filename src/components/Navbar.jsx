import Logo from '../assets/icons/layers.png'
import "./styles.css"

const Navbar = ({ isAuthenticated = false }) => {

    const classNav = isAuthenticated ? "custom-nav-post-login" :  "custom-nav-login" // ternario
    return (
        // template string | Javascript
        <nav className={`navbar navbar-expand-lg navbar-light ${classNav} mb-3`}>
            <div className="container-fluid nav-container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <div className="nav-brand d-flex justify-content-center align-items-center">
                        <img
                            className="d-inline-block align-text-top text-white mx-2"
                            height="64"
                            src={Logo}
                            width="64"
                            alt="logo"
                        />
                        <p className="nav-title">Proyecta</p>
                    </div>
                    {/* <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">¿Quienes somos?</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link btn btn-acceder">Acceder</a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>
    )


}
export default Navbar