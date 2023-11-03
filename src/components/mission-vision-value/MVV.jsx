import style from "../../styles/mission-vision-value/MVV.module.css"
import Cards from "./Cards"

export default function MVV() {
    return (
        <div className={style.mvv}>
            <div className={style.description}>
                
            </div>
            <div className={style.cards}>
                <Cards />
            </div>
        </div>
    )
}