import CoverPage from "../../Shared/CoverPage/CoverPage";
import useMenus from "../../../Hooks/useMenu";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import SingleMenu from "../../Shared/SingleMenu/SingleMenu";
import BossBtn from "../../../components/BossBtn";
// bg image
import BannerImg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
  const { menus } = useMenus();
  const offers = menus.filter((m) => m.category === "offered");
  const desserts = menus.filter((m) => m.category === "dessert");
  const pizzas = menus.filter((m) => m.category === "pizza");
  const salads = menus.filter((m) => m.category === "salad");
  const soups = menus.filter((m) => m.category === "soup");
  return (
    <>
      <CoverPage
        bgImg={BannerImg}
        title="Our Menu"
        subTitle="Would you like to try a dish"
      />
      <div className="container mx-auto px-3 lg:px-0">
        <SectionHeading title={"Don't miss"} heading={"Todays offer"} />
        {/* offered menus */}

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 divide-y-2 lg:divide-y-0">
            {offers.map((m) => (
              <SingleMenu key={m._id} menu={m} />
            ))}
          </div>
          <div className="mb-16">
            <BossBtn>View Full Menu</BossBtn>
          </div>
        </div>
      </div>

      {/* dessert menus */}
      <div>
        <CoverPage
          title={"Deserts"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bgImg={dessertBg}
          titleStyle={"lg:text-5xl"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 divide-y-2 lg:divide-y-0 container mx-auto px-3 lg:px-0">
          {desserts.map((m) => (
            <SingleMenu key={m._id} menu={m} />
          ))}
        </div>
        <div className="mb-16">
          <BossBtn>View Full Menu</BossBtn>
        </div>
      </div>

      {/* pizza menus */}
      <div>
        <CoverPage
          title={"Pizzas"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bgImg={pizzaBg}
          titleStyle={"lg:text-5xl"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 divide-y-2 lg:divide-y-0 container mx-auto px-3 lg:px-0">
          {pizzas.map((m) => (
            <SingleMenu key={m._id} menu={m} />
          ))}
        </div>
        <div className="mb-16">
          <BossBtn>View Full Menu</BossBtn>
        </div>
      </div>

      {/* salad menus */}
      <div>
        <CoverPage
          title={"salads"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bgImg={saladBg}
          titleStyle={"lg:text-5xl"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 divide-y-2 lg:divide-y-0 container mx-auto px-3 lg:px-0">
          {salads.map((m) => (
            <SingleMenu key={m._id} menu={m} />
          ))}
        </div>
        <div className="mb-16">
          <BossBtn>View Full Menu</BossBtn>
        </div>
      </div>

      {/* soup menus */}
      <div>
        <CoverPage
          title={"soups"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          bgImg={soupBg}
          titleStyle={"lg:text-5xl"}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 divide-y-2 lg:divide-y-0 container mx-auto px-3 lg:px-0">
          {soups.map((m) => (
            <SingleMenu key={m._id} menu={m} />
          ))}
        </div>
        <div className="mb-16">
          <BossBtn>View Full Menu</BossBtn>
        </div>
      </div>
    </>
  );
};

export default OurMenu;
