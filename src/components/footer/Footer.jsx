import style from "../../styles/footer/Footer.module.css"
import Icon from "../commom-components/Icon"
import fullLogo from "../../assets/full-logo.png"

// Import do ícone de instagram do Font Awesome:
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className={style.footer}>
            <Icon icon={faInstagram} a="https://www.instagram.com/ecompjr/"/>
            <div className={style.logoFooter}>
                <img src={fullLogo} />
            </div>
            <div className={style.copyright}>
                <p>Copyright©️ 2023 | EcompJr - Todos os direitos reservados.</p>
            </div>
        </div>
    )
}