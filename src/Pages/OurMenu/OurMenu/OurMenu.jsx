import CoverPage from "../../Shared/CoverPage/CoverPage";
import BannerImg from "../../../assets/menu/banner3.jpg";
import useMenus from "../../../Hooks/useMenu";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import SingleMenu from "../../Home/Menus/SingleMenu";

const OurMenu = () => {
  const { menus } = useMenus();
  const offers = menus.filter((m) => m.category === "offered");
  return (
    <>
      <CoverPage
        bgImg={BannerImg}
        title="Our Menu"
        subTitle="Would you like to try a dish"
      />
      <div className="container mx-auto ">
        <SectionHeading title={"Don't miss"} heading={"Todays offer"} />
        {/* offered menus */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 divide-y-2 lg:divide-y-0">
          {offers.map((m) => (
            <SingleMenu key={m._id} menu={m} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurMenu;
