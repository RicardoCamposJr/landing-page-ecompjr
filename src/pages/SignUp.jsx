import { Link } from "react-router-dom"
import ImputText from "../components/commom-components/InputText"
import LoginNav from "../components/commom-components/LoginNav"
import style from "../styles/login/Login.module.css"
import "../styles/login/LoginGlobal.css"

export default function Login() {
    return (
        <>
            <LoginNav />
            <div className={style.container}>
                <h1>Bem vindo!</h1>
                <div className={style.boxSignUp}>
                    <div className={style.inputs}>
                        <h2>Cadastro</h2>
                        <form action="" method="post" id={style.form}>
                            <ImputText 
                                type="text"
                                label="Nome: "
                                htmlFor="userName"
                                
                            />
                            <ImputText 
                                type="text"
                                label="Sobrenome: " 
                                htmlFor="userLastName"
                                
                            />
                            <ImputText 
                                type="password"
                                label="Senha: " 
                                htmlFor="user"
                            />
                            <div id={style.btn}>
                                <input type="submit" value="Entrar" id={style.submit} />
                            </div>
                            <div id={style.signUp}>
                                <span>Já possui cadastro? Clique</span>
                                <Link to="/login">aqui!</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
        
    )
}