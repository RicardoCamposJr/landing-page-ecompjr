import { Link } from "react-router-dom";
import style from "../../styles/commom-components/Icon.module.css"

// Import do componente do Font Awesome:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon( props ) {
    return (
        <div className={style.flex}>
            <Link to={props.a} target={props.target}>
                <FontAwesomeIcon icon={props.icon} className={style.icon} />
            </ Link>
        </div>
    )
}