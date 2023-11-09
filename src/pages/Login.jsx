import { Link } from "react-router-dom"
import ImputText from "../components/commom-components/InputText"
import LoginNav from "../components/commom-components/LoginNav"
import style from "../styles/login/Login.module.css"
import "../styles/login/LoginGlobal.css"
import { useState } from "react"

export default function Login() {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <LoginNav />
            <div className={style.container}>
                <h1>Área do administrador!</h1>
                <div className={style.box}>
                    <div className={style.inputs}>
                        <h2>Login</h2>
                        <form 
                            action="" 
                            method="post" 
                            id={style.form} 
                            >
                            <ImputText 
                                type="text"
                                label="Usuário: " 
                                htmlFor="user"
                                user={user}
                                setUser={setUser}
                            />
                            <ImputText 
                                type="password"
                                label="Senha: " 
                                htmlFor="password"
                                password={password}
                                setPassword={setPassword}
                            />
                            <div id={style.btn}>
                                <input 
                                    type="submit" 
                                    value="Entrar" 
                                    id={style.submit} 
                                />
                            </div>
                            <div id={style.signUp}>
                                <span>Cadastre-se</span>
                                <Link to="/signUp">aqui!</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
        
    )
}