import { useSelector, shallowEqual } from "react-redux";
import Logo from "../../../../assets/icons/layers.png";
import Bell from "../../../../assets/icons/bell 1.svg";
import Raton from "../../../../assets/icons/email.svg";
import Menu from "../../../../assets/icons/ToggleMenu.svg";
import "./navbar.css";

export const Navbar = () => {
  const isAuth = useSelector(state => state.auth.isAuth, shallowEqual)
  const classNav = isAuth ? "custom-nav-login" : "custom-nav-post-login"
  return (
    <div
      className={`row justify-content-between align-items-center ${classNav} nav-container`}
    >

      <div className="col d-flex justify-content-start align-items-center">
        {isAuth && <img className="mx-4" src={Menu} />}
        <img
          className="d-inline-block align-text-top text-white mx-2 proyecta-icon"
          height="64"
          src={Logo}
          width="64"
          alt="logo"
        />
        <p className={isAuth ? "nav-title-admin" : "nav-title-public"}>Proyecta</p>
      </div>
      {
        isAuth && <div className="col d-flex justify-content-end align-items-center">
          <button
            type="submit"
            className="btn btn-login rounded-pill btn-size-login  "
          >
            Quiero ser Líder de Proyecto
          </button>

          <img className="mx-4" src={Bell} height="32" width="32" />

          <img className="img-fluid rounded-circle me-3" src={Raton} height="64" width="64" />
        </div>
      }
    </div>
  );
};

export default Navbar;


