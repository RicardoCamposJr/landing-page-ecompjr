import fullLogo from "../../assets/full-logo.png"
import style from "../../styles/HeaderFullLogo.module.css"
import TextDescription from "./TextDescription"

export default function HeaderFullLogo() {
    return (
        <div className={style.containerFullLogo}>
            <div className={style.logo}>
                <img src={fullLogo} alt="Logo completa da EcompJr" />
            </div>
            <div className={style.description}>
                <TextDescription 
                    text="Empresa Júnior" 
                    p="de" 
                >
                    <hr />
                </TextDescription>
                <TextDescription 
                    text="Engenharia da Computação" 
                    p="da" 
                />
                <div id={style.descriptionUnivName}>
                    <p>Universidade Estadual de Feira de Santana</p>
                </div>
            </div>
        </div>
    )
}