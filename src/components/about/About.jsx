import style from "../../styles/about/About.module.css"
import Title from "../commom-components/Title"

export default function About() {
    return (
        <div className={style.aboutContainer}>
            <Title text="Sobre a EcompJr..." />
        </div>
    )
}