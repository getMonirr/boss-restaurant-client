import { NavLink } from "react-router-dom";
import "./DashboardSidebar.css";

import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaStar,
  FaUsers,
  FaWallet,
  FaCalendarCheck,
} from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import { AiFillHome, AiTwotoneShopping } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import useAdmin from "../../Hooks/useAdmin";

const DashboardSidebar = () => {
  // const isAdmin = false;

  const { isAdmin } = useAdmin();

  return (
    <ul className="menu py-12 pl-9 pr-3 w-80 bg-[#D1A054] text-base-content max-w-[280px] mx-auto uppercase">
      <div className="text-start text-xl uppercase font-cinzel mb-16">
        <h1 className=" text-2xl lg:text-[24px] leading-none font-black">
          bistro boss
        </h1>
        <p className="lg:text-lg tracking-[0.25em] lg:tracking-[0.25em] font-bold">
          restaurant
        </p>
      </div>
      {/* <!-- Sidebar content here --> */}

      {isAdmin ? (
        <>
          <li>
            <NavLink to="/dashboard">
              <AiFillHome className="h-[24px] w-[24px]" /> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-items">
              <ImSpoonKnife className="h-[24px] w-[24px]" /> Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-items">
              <TfiMenuAlt className="h-[24px] w-[24px]" /> Mange Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-bookings">
              <FaBook className="h-[24px] w-[24px]" /> Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/all-users">
              <FaUsers className="h-[24px] w-[24px]" /> All Users
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/dashboard/user">
              <AiFillHome className="h-[24px] w-[24px]" /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendarAlt className="h-[24px] w-[24px]" /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment-history">
              <FaWallet className="h-[24px] w-[24px]" /> Payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-cart">
              <FaShoppingCart className="h-[24px] w-[24px]" /> My cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-review">
              <FaStar className="h-[24px] w-[24px]" /> add review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-booking">
              <FaCalendarCheck className="h-[24px] w-[24px]" /> My booking
            </NavLink>
          </li>
        </>
      )}
      <div className="divider before:bg-white after:bg-white"></div>
      <li>
        <NavLink to="/">
          <FaHome className="h-[24px] w-[24px]" /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-menu">
          <FiMenu className="h-[24px] w-[24px]" /> Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-shop">
          <AiTwotoneShopping className="h-[24px] w-[24px]" /> Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">
          <MdEmail className="h-[24px] w-[24px]" /> Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default DashboardSidebar;
