import Logo from '../assets/icons/layers.png'
import "./styles.css"

const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-light custom-nav mb-3">
        <div class="container-fluid nav-container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                <div class="nav-brand d-flex justify-content-center">
                    <img
                        class="d-inline-block align-text-top text-white mx-2"
                        height="64"
                        src={Logo}
                        width="64"
                        alt="logo"
                    />
                    <p className="nav-title">Proyecta</p>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Proyectos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">¿Quienes somos?</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-acceder">Acceder</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
)

export default Navbar