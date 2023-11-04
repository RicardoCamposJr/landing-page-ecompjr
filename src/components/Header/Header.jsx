import style from "../../styles/header/Header.module.css";
import nameLogo from "../../assets/name-logo.png";
// Import do ícone de instagram do Font Awesome:
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Icon from "../commom-components/Icon";

export default function Header() {
  return (
    <div className={style.header}>
      {/* ícone do Font Awesome */}
      <Icon icon={faInstagram} a="https://www.instagram.com/ecompjr/" />
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
