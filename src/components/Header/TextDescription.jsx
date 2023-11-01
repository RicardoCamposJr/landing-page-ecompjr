import style from "../../styles/Header/HeaderFullLogo.module.css"

export default function TextDescription (props) {
    return (
        <div className={style.descriptionConfiguration}>
            <div>
                <h1>{props.text}</h1>
                {props.children}
            </div>
            <div className={style.descriptionP}><p>{props.p}</p></div>
        </div>
    )
}