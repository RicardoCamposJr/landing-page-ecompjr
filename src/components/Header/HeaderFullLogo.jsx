import fullLogo from "../../assets/full-logo.png"
import style from "../../styles/header/HeaderFullLogo.module.css"
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
                    a="https://sebrae.com.br/sites/PortalSebrae/ufs/ap/artigos/empresa-junior-o-que-e-e-como-funciona,e3a048ae422fe510VgnVCM1000004c00210aRCRD"
                >
                    <hr />
                </TextDescription>
                <TextDescription 
                    text="Engenharia da Computação" 
                    p="da" 
                    a="https://www2.ecomp.uefs.br/"
                />
                <div id={style.descriptionUnivName}>
                    <p>Universidade Estadual de Feira de Santana</p>
                </div>
            </div>
        </div>
    )
}