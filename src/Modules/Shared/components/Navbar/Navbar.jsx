import Logo from "../../../../assets/icons/layers.png";
import Bell from "../../../../assets/icons/bell 1.svg";
import Raton from "../../../../assets/icons/email.svg";
import Menu from "../../../../assets/icons/ToggleMenu.svg";
import "./navbar.css";

export const Navbar = ({ isAuthenticated = false }) => {
  const classNav = isAuthenticated
    ? "custom-nav-post-login"
    : "custom-nav-login"; // ternario
  return (
    <div
      className={`row justify-content-between align-items-center ${classNav} nav-container`}
    >
        
      <div className="col d-flex justify-content-start align-items-center">
        <img className="mx-4"src={Menu}/>
        <img
          className="d-inline-block align-text-top text-white mx-2 proyecta-icon"
          height="64"
          src={Logo}
          width="64"
          alt="logo"
        />
        <p className="nav-title">Proyecta</p>
      </div>

      <div className="col d-flex justify-content-end align-items-center">
        <button
          type="submit"
          className="btn btn-login rounded-pill btn-size-login  "
        >
          Quiero ser Líder de Proyecto
        </button>

        <img className="mx-4" src={Bell} height="32" width="32" />

        <img className="img-fluid rounded-circle me-3" src={Raton} height="64" width="64" />
      </div>
    </div>
  );
};

export default Navbar;


