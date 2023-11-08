import style from "../../styles/header/Navbar.module.css";
import nameLogo from "../../assets/name-logo.png";
// Import do ícone de instagram do Font Awesome:
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Icon from "../commom-components/Icon";
import { Link } from "react-router-dom";

export default function LoginNav() {
    return (
        <div className={style.header} id="homeId">
            {/* ícone do Font Awesome */}
            <Icon icon={faArrowLeft} a="/"/>
            <div className={style.headerLogoAlt}>
                <img src={nameLogo} alt="Logo da EcompJr" />
            </div>
        </div>
    )
}