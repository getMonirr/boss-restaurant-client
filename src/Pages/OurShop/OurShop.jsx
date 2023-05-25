import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./OurShop.css"

import CoverPage from "../Shared/CoverPage/CoverPage";
import shopBg from "../../assets/shop/banner2.jpg";
import { useEffect, useMemo, useState } from "react";
import useMenus from "../../Hooks/useMenu";
import MenuCard from "../Shared/Card/MenuCard";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const { category } = useParams();
  const tabsMenu = ["salad", "pizza", "soup", "dessert", "drinks"];

  const initialTabIndex = tabsMenu.indexOf(category);
  const [tabIndex, setTabIndex] = useState(
    initialTabIndex >= 0 ? initialTabIndex : 0
  );

  const { menus } = useMenus();
  const [categoryMenu, setCategoryMenu] = useState([]);

  useEffect(() => {
    const filteredCategory = menus.filter(
      (m) => m.category === tabsMenu[tabIndex]
    );
    setCategoryMenu(filteredCategory);
  }, [menus, tabIndex]);

  // use memo
  const filteredCategory = useMemo(() => {
    return menus.filter((m) => m.category === tabsMenu[tabIndex]);
  }, [menus, tabIndex]);

  useEffect(() => {
    setCategoryMenu(filteredCategory);
  }, [filteredCategory]);

  return (
    <div>
      <CoverPage
        bgImg={shopBg}
        title="Our Shop"
        subTitle="Would you like to try a dish?"
      />
      <div className="container mx-auto px-3 lg:px-0 my-16">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            {tabsMenu.map((m, index) => (
              <Tab key={index}>{m}</Tab>
            ))}
          </TabList>
          {tabsMenu.map((m, index) => (
            <TabPanel key={index}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 lg:gap-6 px-3 lg:px-0">
                {categoryMenu.map((catMenu) => (
                  <MenuCard key={catMenu._id} recommend={catMenu} />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
