import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import SingleMenu from "../../Shared/SingleMenu/SingleMenu";
import BossBtn from "../../../components/BossBtn";
import useMenus from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const Menus = () => {
  const { menus } = useMenus();
  const popular = menus.filter((m) => m.category === "popular");

  return (
    <div className="container mx-auto px-3">
      <SectionHeading title={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 divide-y-2 lg:divide-y-0">
        {popular.map((menu) => (
          <SingleMenu key={menu._id} menu={menu} />
        ))}
      </div>
      <Link to="/our-menu">
        <BossBtn>View Full Menu</BossBtn>
      </Link>
    </div>
  );
};

export default Menus;
