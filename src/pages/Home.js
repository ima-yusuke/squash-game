import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function Home({logUser}){
   
    let slideIdx = 0
    function imgUrl() {
        switch (slideIdx) {
            case 0:
                slideIdx++
                return "pic-01.jpg"
            case 1:
                slideIdx++
                return "pic-23.jpg"
            case 2:
                slideIdx++
                return "pic-30.jpg"
            case 3:
                slideIdx = 0
                return "pic-23.jpg";
            default:
                break
        }
      
    }

    function createSlide() {
        return (
          <SwiperSlide>
            <img className="slideImg" src={require(`../img/${imgUrl()}`)}/>
          </SwiperSlide>
        );
    }

    
    return(
        <div>
            <h1>{logUser!=null?logUser[0].fname:"Home"} page</h1>
           
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
            >
                {createSlide()}
                {createSlide()}
                {createSlide()}
                {createSlide()}
             </Swiper>
        </div>
    )
}
export default Home