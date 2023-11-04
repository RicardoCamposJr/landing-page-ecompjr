import style from "../../styles/contact/Contact.module.css"
import Input from "../commom-components/InputText"
import Title from "../commom-components/Title"
import fullLogo from "../../assets/full-logo.png"

export default function Contact () {
    return (
        <div className={style.contactContainer} id="contactId">
            <Title text="Contate-nos!"/>
            <div className={style.contactArea}>
                <div className={style.contact}>
                    <form action="" method="post" className={style.formContact}>
                        <Input 
                            label="Nome:"
                            background="Informe seu nome:"
                            htmlFor="name"
                        />
                        <Input 
                            label="E-mail:"
                            background="Informe seu email:"
                            htmlFor="email"
                        />
                        <div className={style.descriptionArea}>
                            <label htmlFor="description">Descrição do serviço:</label>
                            <textarea id="descricao" name="descricao" rows="4" cols="50" className={style.description}></textarea>
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
