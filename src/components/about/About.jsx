import style from "../../styles/about/About.module.css"
import Title from "../commom-components/Title"
import image1 from "../../assets/timeecomp.jpeg"
import image2 from "../../assets/insta2.jpg"
import image3 from "../../assets/insta3.jpg"
import Slider from "./Slider"

export default function About() {
    return (
        <div className={style.aboutContainer} id="aboutId">
            <Title text="Sobre a EcompJr..." />
            <div className={style.descriptionArea}>
                <Slider 
                    img1={image1}
                    img2={image2}
                    img3={image3}
                />
                
                <div className={style.descriptionText}>
                    <p>Empresa Júnior de Engenharia de Computação, composta por alunos do curso da Universidade Estadual de Feira de Santana, que promove impactos positivos em micro e pequenas empresas por meio de soluções tecnológicas. Fundada em 2007, a EcompJr atualmente participa ativamente do propósito que envolve ser Movimento Empresa Júnior. A empresa promove uma vivência empresarial estratégica para estudantes interessados em liderar a mudança no atual cenário brasileiro.</p>
                </div>
            </div>
        </div>
    )
}