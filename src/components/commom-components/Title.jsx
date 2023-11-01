import style from "../../styles/Title.module.css"

export default function Title(props) {
    return (
        <div className={style.title}>
            <h1>{props.text}</h1>
        </div>
    )
}