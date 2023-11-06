import style from "../../styles/header/Navbar.module.css";
import nameLogo from "../../assets/name-logo.png";
// Import do ícone de instagram do Font Awesome:
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Icon from "../commom-components/Icon";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className={style.header} id="homeId">
        {/* ícone do Font Awesome */}
        <Icon icon={faInstagram} a="https://www.instagram.com/ecompjr/" target="_blank" />
        <div className={style.headerLogo}>
          <img src={nameLogo} alt="Logo da EcompJr" />
        </div>
        <div className={style.nav}>
          <div>
            <a href="#">Início</a>
          </div>
          <div>
            <a href="#aboutId">Sobre</a>
          </div>
          <div>
            <a href="#serviceId">Serviços</a>
          </div>
          <div>
            <a href="#contactId">Contato</a>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
