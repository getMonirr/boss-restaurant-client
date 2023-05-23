import Hero from "../../Hero/Hero";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallToAction from "../CallToAction/CallToAction";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import Menus from "../Menus/Menus";
import OrderOnline from "../OrderOnline/OrderOnline";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <OrderOnline />
      <BistroBoss />
      <Menus />
      <CallToAction />
      <ChefRecommends />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
