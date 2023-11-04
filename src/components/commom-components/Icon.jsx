import style from "../../styles/commom-components/Icon.module.css"

// Import do componente do Font Awesome:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon( props ) {
    return (
        <div className={style.flex}>
            <a href={props.a} target="_blank">
                <FontAwesomeIcon icon={props.icon} className={style.icon} />
            </a>
        </div>
    )
}