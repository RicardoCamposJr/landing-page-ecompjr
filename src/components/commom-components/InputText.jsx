import style from "../../styles/commom-components/InputText.module.css"

export default function InputText( props ) {
    return (
        <div className={style.input}>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input type="text" id={props.htmlFor} name={props.htmlFor}/>
        </div>
    )
}