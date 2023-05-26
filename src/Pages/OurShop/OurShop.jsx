import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./OurShop.css";

import CoverPage from "../Shared/CoverPage/CoverPage";
import shopBg from "../../assets/shop/banner2.jpg";
import { useEffect, useState } from "react";
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
  const [paginatedMenu, setPaginatedMenu] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const filteredCategory = menus.filter(
      (m) => m.category === tabsMenu[tabIndex]
    );
    setCategoryMenu(filteredCategory);
    setPaginatedMenu(filteredCategory.slice(0, perPage)); // Initialize paginated menu with the first page
    setCurrentPage(1); // Set current page to 1 initially
  }, [menus, tabIndex]);

  // pagination
  const totalMenu = categoryMenu.length;
  const perPage = 4;
  const totalPage = Math.ceil(totalMenu / perPage);
  // const totalPaginationBtn = [...Array(totalPage).keys()];
  console.log(totalMenu, totalPage);

  // handle pagination
  const handlePagination = (action) => {
    let newPage;
    if (action === "prev") {
      newPage = currentPage - 1;
    } else if (action === "next") {
      newPage = currentPage + 1;
    }

    if (newPage >= 1 && newPage <= totalPage) {
      const startIndex = (newPage - 1) * perPage;
      const endIndex = startIndex + perPage;
      const paginatedItems = categoryMenu.slice(startIndex, endIndex);
      setPaginatedMenu(paginatedItems);
      setCurrentPage(newPage);
      console.log(startIndex, endIndex, newPage);
    }
  };

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
                {paginatedMenu.map((catMenu) => (
                  <MenuCard key={catMenu._id} recommend={catMenu} />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
        <div className="my-8 space-x-4">
          <button
            onClick={() => handlePagination("prev")}
            className="btn btn-primary rounded-full px-[18px] text-black bg-boss-cart-btn border-1 border-black"
            disabled={currentPage === 1} // Disable previous button on the first page
          >
            &lt;
          </button>
          <span>{`${currentPage}/${totalPage}`}</span>{" "}
          {/* Display current page and total pages */}
          <button
            onClick={() => handlePagination("next")}
            className="btn btn-primary rounded-full px-[18px] bg-boss-cart-btn border-1 border-black text-black"
            disabled={currentPage === totalPage} // Disable next button on the last page
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
