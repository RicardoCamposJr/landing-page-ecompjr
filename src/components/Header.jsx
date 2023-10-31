import style from "../styles/Header.module.css"
import nameLogo from "../assets/name-logo.png"
// Import do componente do Font Awesome:
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// Import do ícone de instagram do Font Awesome:
import {faInstagram} from "@fortawesome/free-brands-svg-icons"

export default function Header() {
    return (
        <div className={style.header}>
            {/* ícone do Font Awesome */}
            <a href="https://www.instagram.com/ecompjr/">
                <FontAwesomeIcon icon={faInstagram} className={style.icon} />
            </a>
            <div className={style.headerLogo}>
                <img src= {nameLogo} alt="Logo da EcompJr" />
            </div>
            <div className="nav">
                <a href= {style.header}>Início</a>
                <a href="#">Sobre</a>
                <a href="#">Serviços</a>
                <a href="#">Contato</a>
            </div>
        </div>
    )
}