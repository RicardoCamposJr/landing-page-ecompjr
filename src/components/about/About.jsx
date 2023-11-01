import style from "../../styles/about/About.module.css"
import Title from "../commom-components/Title"
import image1 from "../../assets/insta1.jpg"
import image2 from "../../assets/insta2.jpg"
import image3 from "../../assets/insta3.jpg"

export default function About() {
    return (
        <div className={style.aboutContainer}>
            <Title text="Sobre a EcompJr..." />
            <div className={style.descriptionArea}>
                
                <div className={style.descriptionText}>

                </div>
            </div>
        </div>
    )
}