import style from "../../styles/about/Slider.module.css"
//Imports do Swiper:
import {Swiper, SwiperSlide} from "swiper/react"

export default function Slider(props) {
    return (
        <div className={style.slider}>
            <Swiper 
                slidesPerView={1}
                pagination={ {clickable: true} }
                navigation
            >
                <SwiperSlide>
                    <img src={props.img1} className={style.slideImage} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={props.img2} className={style.slideImage}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={props.img3} className={style.slideImage}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}