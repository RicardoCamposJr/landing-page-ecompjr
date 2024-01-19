/* eslint-disable react/prop-types */
import style from "../../styles/header/HeaderFullLogo.module.css"

export default function TextDescription (props) {
    return (
        <div className={style.descriptionConfiguration}>
            <div>
                <h1>
                    <a href={props.a} target="_blank">
                    {props.text}
                    </a>
                </h1>
                {props.children}
            </div>
            <div className={style.descriptionP}><p>{props.p}</p></div>
        </div>
    )
}