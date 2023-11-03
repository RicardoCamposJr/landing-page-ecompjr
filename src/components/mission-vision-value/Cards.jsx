import style from "../../styles/mission-vision-value/Cards.module.css"

//Imports do Swiper:
import {Swiper, SwiperSlide} from "swiper/react"
import { EffectCards } from 'swiper/modules';

export default function Cards() {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className={style.swiperCards}
        >
            <SwiperSlide className={style.cardContainer}>
                <div className={style.cardImage}>
                    <p>
                        Através da vivência empresarial e trabalho em equipe, 
                        formar profissionais inovadores, comprometidos e capazes de 
                        vencer desafios futuros.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.cardImage}>
                    <p>
                        Ser uma empresa que realiza projetos de alto impacto 
                        mais conectada ao movimento empresa júnior e com grande 
                        reconhecimento dentro e fora da universidade.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.cardImage}>
                    <p>
                        Os valores de uma empresa guiam a conduta da mesma, portanto 
                        a Ecompjr baseia-se nos seguintes valores. Protagonismo, 
                        Cooperatividade Assiduidade, Resiliência, Constância em 
                        resultados, Evolução com os erros, Conexão com o movimento, 
                        Foco na qualidade, Ética e Empatia.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}