import LoginNav from "../components/commom-components/LoginNav"
import Message from "../components/commom-components/Message"
import style from "../styles/messages/Messages.module.css"

const messages = [{
    name: "aaa",
    email: "aaa",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaa lo     a asdf asdfasdf asdfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa"
},{
    name: "bbb",
    email: "bbb",
    description: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
}]

export default function Messages() {
    return (
        <div className={style.container}>
            <LoginNav />
            <div className={style.content}>
                <div id={style.nameUser}>
                    <h1>Olá name_user</h1>
                    <h3>As mensagens recebidas são:</h3>
                </div><hr />
                <div className={style.messages}>
                    {/* Mapeando o array de objetos contendo as mensagens
                        e transformando eles em componentes renderizáveis
                        pelo React, nesse caso, o componente 'Message'.*/}
                    {messages.map((message) => {
                        return (
                            <div key={message.id}>
                                <Message message={message} />
                                <hr/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}