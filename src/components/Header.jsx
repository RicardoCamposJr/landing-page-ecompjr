import style from "../styles/Header.module.css"
import nameLogo from "../assets/name-logo.png"
import fullLogo from "../assets/full-logo.png"

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.icon}>
                <a href="#">insta</a>
            </div>
            <div className="header-logo">
                <img src= {nameLogo} alt="Logo da EcompJr" />
            </div>
            <div className="nav">
                
            </div>
        </div>
    )
}