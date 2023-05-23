import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Hero.css";

// slider img
import slider1 from "../../assets/home/01.jpg";
import slider2 from "../../assets/home/02.jpg";
import slider3 from "../../assets/home/03.png";

const Hero = () => {
  return (
    <div className="">
      <Carousel showArrows={false} showStatus={false}>
        <div>
          <img className="  h-[400px] lg:h-[804px] object-cover object-center" src={slider1} />
        </div>
        <div>
          <img className="  h-[400px] lg:h-[804px] object-cover object-center" src={slider2} />
        </div>
        <div>
          <img className="  h-[400px] lg:h-[804px] object-cover object-center" src={slider3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
