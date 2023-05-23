import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import { useEffect, useState } from "react";
import SingleTest from "./SingleTest";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="container mx-auto">
      <SectionHeading title={"What Our Clients Says"} heading={"testimonial"} />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {testimonials.map((test) => (
          <SwiperSlide key={test._id}>
            <SingleTest testimonial={test} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
