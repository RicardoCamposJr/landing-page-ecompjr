import style from "../../styles/messages/Message.module.css"

export default function Message( props ) {
    return (
        <div id={style.message}>
            <div id={style.name}>
                <span>
                    Nome: {props.message.name}
                </span>
            </div>
            <div id={style.email}>
                <span>
                    Email: {props.message.email}
                </span>
            </div>
            <div id={style.description}>
                <span>
                    Descrição: {props.message.description}
                </span>
            </div>
            <div id={style.btn}>
                <button>Excluir</button>
            </div>
        </div>
    )
}