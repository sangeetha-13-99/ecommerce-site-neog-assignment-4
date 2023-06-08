
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import ReactPlayer from 'react-player';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { heroBannerVideos } from './videos';

// // export const HeroBanner=() => {
//     const [isPlaying, setIsPlaying] = useState(null);
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, A11y]}
//       spaceBetween={50}
//       slidesPerView={1}
//       Autoplay 
//     //   EffectFade 
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//     //   onSwiper={(swiper) => console.log(swiper)}
//     //   onSlideChange={() => console.log('slide change')}
//     >
//         {
//             heroBannerVideos.map((video,index)=>{
//                 return (
//                 <SwiperSlide key={index}>
//                     <div>
//                     <ReactPlayer url={video} playing muted width="100%" height="100%" playbackRate={3}/>
//                     </div>
//                 </SwiperSlide>)
//             })
//         }
//       {/* <SwiperSlide>
//         <div>

//         </div>
//     </SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide> */}
//     </Swiper>
//   );
// };