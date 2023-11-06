import ImputText from "../components/commom-components/InputText"
import LoginNav from "../components/commom-components/LoginNav"
import style from "../styles/login/Login.module.css"
import "../styles/login/LoginGlobal.css"

export default function Login() {
    return (
        <>
            <LoginNav />
            <div className={style.container}>
                <h1>Área do administrador!</h1>
                <div className={style.box}>
                    <div className={style.inputs}>
                        <h2>Login</h2>
                        <form action="" method="post" id={style.form}>
                            <ImputText 
                                type="text"
                                label="Usuário: " 
                                htmlFor="user"
                                background="Nome de usuário:"
                            />
                            <ImputText 
                                type="password"
                                label="Senha: " 
                                htmlFor="user"
                                background="Senha:"
                            />
                            <div id={style.btn}>
                                <input type="submit" value="Entrar" id={style.submit} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
        
    )
}