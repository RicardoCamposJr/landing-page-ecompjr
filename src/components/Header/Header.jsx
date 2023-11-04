import style from "../../styles/header/Header.module.css";
import nameLogo from "../../assets/name-logo.png";
// Import do componente do Font Awesome:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import do ícone de instagram do Font Awesome:
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className={style.header}>
      {/* ícone do Font Awesome */}
      <div className={style.flex}>
        <a href="https://www.instagram.com/ecompjr/">
          <FontAwesomeIcon icon={faInstagram} className={style.icon} />
        </a>
      </div>
      <div className={style.headerLogo}>
        <img src={nameLogo} alt="Logo da EcompJr" />
      </div>
      <div className={style.nav}>
        <div>
          <a href={style.header}>Início</a>
        </div>
        <div>
          <a href="#">Sobre</a>
        </div>
        <div>
          <a href="#">Serviços</a>
        </div>
        <div>
          <a href="#">Contato</a>
        </div>
        <div>
          <a href="#">Login</a>
        </div>
      </div>
    </div>
  );
}
