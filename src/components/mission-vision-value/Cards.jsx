import style from "../../styles/mission-vision-value/Cards.module.css"

//Imports do Swiper:
import {Swiper, SwiperSlide} from "swiper/react"
import { EffectCards } from 'swiper/modules';

export default function Cards( props ) {
    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className={style.swiperCards}
            onSlideChange={(swiper) => {
                if (swiper.activeIndex === 0) {
                    props.setDescription("Missão")
                } else if (swiper.activeIndex === 1) {
                    props.setDescription("Visão")
                } else {
                    props.setDescription("Valores")
                }
            }}
        >
            <SwiperSlide className={style.cardContainer}>
                <div className={style.cardImage}>
                    <p>{props.text1}</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.cardImage}>
                    <p>{props.text2}</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.cardImage}>
                    <p>{props.text3}</p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}