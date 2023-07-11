
import { Navigation, Pagination, A11y, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player';
// Import Swiper styles

import { heroBannerVideos } from './videos';
import { useState } from 'react';
import { HeroBannerDiv } from '../styles/HomePageCss';
import { HeroBannerContent } from './HeroBannerContent';
import { useProductsContext } from '../../../store/productsContext';
import { Link } from 'react-router-dom';

export const HeroBanner=() => {
    const {data:{categories}}=useProductsContext();
    const [isPlaying, setIsPlaying] = useState(null);
    const {categorySortHandler}=useProductsContext();

  return (
    <HeroBannerDiv>
        <Swiper
        modules={[Navigation, Pagination, A11y,Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 10000,
            disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {setIsPlaying(swiper.activeIndex)}}
        onSlideChange={(swiper) => {
            setIsPlaying(swiper.realIndex);
        }}
        >
            {
                heroBannerVideos.map((video,index)=>{
                    return (
                        <SwiperSlide key={index} >
                                <Link to="/product" onClick={()=>categorySortHandler(categories[index]._id)}>
                                    <HeroBannerContent category={categories[index]}/>
                                    <ReactPlayer className='react-player' url={video} loop muted playing={isPlaying===index} playbackRate={1}/>
                        </Link>
                            </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </HeroBannerDiv>
  );
 }
