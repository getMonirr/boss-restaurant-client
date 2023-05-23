import { useEffect, useState } from "react";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import SingleMenu from "./SingleMenu";

const Menus = () => {
  const [menus, setMenus] = useState([]);

  // load menu
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  return (
    <div className="container mx-auto">
      <SectionHeading title={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
        {menus
          .filter((m) => m.category === "popular")
          .map((menu) => (
            <SingleMenu key={menu._id} menu={menu} />
          ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-[3px] px-8 transition-all border-b-boss-btn-color">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default Menus;
