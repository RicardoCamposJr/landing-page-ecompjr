import style from "../../styles/services/Carousel.module.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';


export default function Carousel( props ) {
    return (
        <div className={style.carousel}>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode, Pagination]}
            >
                <SwiperSlide className={style.carouselSlide}>
                    <img src={props.img1} className={style.carouselImage} />
                </SwiperSlide>
                <SwiperSlide className={style.carouselSlide}>
                    <img src={props.img2} className={style.carouselImage} />
                </SwiperSlide>
                <SwiperSlide className={style.carouselSlide}>
                    <img src={props.img3} className={style.carouselImage} />
                </SwiperSlide>
                <SwiperSlide className={style.carouselSlide}>
                    <img src={props.img4} className={style.carouselImage} />
                </SwiperSlide>
                <SwiperSlide className={style.carouselSlide}>
                    <img src={props.img5} className={style.carouselImage} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}