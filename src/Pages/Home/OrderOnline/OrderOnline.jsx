import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./OrderOnline.css";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";

const OrderOnline = () => {
  return (
    <div className="container mx-auto lg:my-32 px-3 lg:px-0">
      <SectionHeading
        title={"From 11:00am to 10:00pm"}
        heading={"order online"}
      />
      <>
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="mx-auto" src={slider1} alt="slider1" />
            <p className=" uppercase bottom-16 left-[40%] absolute font-cinzel text-4xl text-white drop-shadow-[0_1px_1px_rgb(0,0,0)]">
              salad
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={slider2} alt="slider2" />
            <p className=" uppercase bottom-16 left-[40%] absolute font-cinzel text-4xl text-white drop-shadow-[0_1px_1px_rgb(0,0,0)]">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={slider3} alt="slider3" />
            <p className=" uppercase bottom-16 left-[40%] absolute font-cinzel text-4xl text-white drop-shadow-[0_1px_1px_rgb(0,0,0)]">
              Pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={slider4} alt="slider4" />
            <p className=" uppercase bottom-16 left-[40%] absolute font-cinzel text-4xl text-white drop-shadow-[0_1px_1px_rgb(0,0,0)]">
              Deserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src={slider5} alt="slider5" />
            <p className=" uppercase bottom-16 left-[40%] absolute font-cinzel text-4xl text-white drop-shadow-[0_1px_1px_rgb(0,0,0)]">
              salad
            </p>
          </SwiperSlide>
          <div className="flex justify-center items-center my-8 gap-3"></div>
        </Swiper>
      </>
    </div>
  );
};

export default OrderOnline;
