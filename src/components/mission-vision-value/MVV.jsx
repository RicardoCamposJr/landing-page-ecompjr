import { useState } from "react"
import style from "../../styles/mission-vision-value/MVV.module.css"
import Cards from "./Cards"

export default function MVV() {

    const [description, setDescription] = useState("Missão")

    setDescription

    return (
        <div className={style.mvv}>
            <div className={style.cards}>
                <Cards 
                    text1="Através da vivência empresarial e trabalho em equipe, 
                    formar profissionais inovadores, comprometidos e capazes de 
                    vencer desafios futuros."
                    text2="Ser uma empresa que realiza projetos de alto impacto 
                    mais conectada ao movimento empresa júnior e com grande 
                    reconhecimento dentro e fora da universidade."
                    text3="Os valores de uma empresa guiam a conduta da mesma, portanto 
                    a Ecompjr baseia-se nos seguintes valores. Protagonismo, 
                    Cooperatividade Assiduidade, Resiliência, Constância em 
                    resultados, Evolução com os erros, Conexão com o movimento, 
                    Foco na qualidade, Ética e Empatia."
                    setDescription={setDescription}
                />
            </div>
            <div className={style.description}>
                <h1>{description}</h1>
            </div>
        </div>
    )
}