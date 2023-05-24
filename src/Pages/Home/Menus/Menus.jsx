import { useEffect, useState } from "react";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import SingleMenu from "./SingleMenu";
import BossBtn from "../../../components/BossBtn";

const Menus = () => {
  const [menus, setMenus] = useState([]);

  // load menu
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return (
    <div className="container mx-auto px-3">
      <SectionHeading title={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16 divide-y-2 lg:divide-y-0">
        {menus
          .filter((m) => m.category === "popular")
          .map((menu) => (
            <SingleMenu key={menu._id} menu={menu} />
          ))}
      </div>
      <BossBtn>View Full Menu</BossBtn>
    </div>
  );
};

export default Menus;
