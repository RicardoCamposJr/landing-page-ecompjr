import style from "../../styles/contact/Contact.module.css"
import InputText from "../commom-components/InputText"
import Title from "../commom-components/Title"
import fullLogo from "../../assets/full-logo.png"

export default function Contact () {
    return (
        <div className={style.contactContainer} id="contactId">
            <Title text="Contate-nos!"/>
            <div className={style.contactArea}>
                <div className={style.contact}>
                    <form action="" 
                        method="post" 
                        className={style.formContact}
                        >
                        <InputText 
                            type="text"
                            label="Nome:"
                            background="Informe seu nome:"
                            htmlFor="name"
                        />
                        <InputText 
                            label="E-mail:"
                            background="Informe seu email:"
                            htmlFor="email"
                        />
                        <div className={style.descriptionArea}>
                            <label htmlFor="description">Descrição do serviço:</label>
                            <textarea id="description" name="description" rows="4" cols="50" placeholder="Descreva seu serviço aqui:" className={style.description}></textarea>
                        </div>
                        <input type="submit" value="Enviar" id={style.submit} />
                    </form>
                    <div className={style.imageLogo}>
                        <img src={fullLogo} />
                    </div>
                </div>
            </div>
        </div>
    )
}
