import style from "../../styles/commom-components/InputText.module.css"

export default function InputText( props ) {
    return (
        <div className={style.input}>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input 
                type={props.type} 
                id={props.htmlFor} 
                name={props.htmlFor} 
                placeholder={props.background} 
                onChange={e => {
                    if (props.htmlFor === "user") {
                        props.setUser(e.target.value)
                    } else if (props.htmlFor === "password"){
                        props.setPassword(e.target.value)
                    }
            }}
            />
        </div>
    )
}