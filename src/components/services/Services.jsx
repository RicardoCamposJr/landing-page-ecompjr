import style from "../../styles/services/Services.module.css"
import Title from "../commom-components/Title"
import Carousel from "./Carousel"

import image1 from "../../assets/im1alt.jpg"
import image2 from "../../assets/img2.jpg"
import image3 from "../../assets/img4.jpg"
import image4 from "../../assets/img5.jpg"
import image5 from "../../assets/img7.jpg"

export default function Services() {
    return (
        <div className={style.services} id="serviceId">
            <Title text="Conheça nossos serviços!" />
            <Carousel 
                img1={image1}
                img2={image2}
                img3={image3}
                img4={image4}
                img5={image5}
            />
        </div>
    )
}