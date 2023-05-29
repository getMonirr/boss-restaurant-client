import { Link, NavLink } from "react-router-dom";
// import order from "../../../assets/icon/order.png";
import "./Navbar.css";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const [small, setSmall] = useState(false);
  const { user, logOutUser } = useAuth();

  // use tanStack query
  const { cart } = useCart();

  // for shrink header
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  const handleSignOut = () => {
    logOutUser()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  // navItems
  const navItems = (
    <>
      <li>
        <NavLink
          className="hover:bg-transparent font-extrabold hover:text-boss-yellow"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-transparent font-extrabold hover:text-boss-yellow"
          to="/our-menu"
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-transparent font-extrabold hover:text-boss-yellow"
          to="our-shop/salad"
        >
          Our Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-transparent font-extrabold hover:text-boss-yellow"
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-transparent font-extrabold hover:text-boss-yellow"
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-transparent font-extrabold hover:text-boss-yellow"
          to="/order"
        >
          {/* <img className="h-10" src={order} alt="order" /> */}
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">
              {cart?.length || 0}
            </span>
          </div>
        </NavLink>
      </li>
      <li>
        {user ? (
          <button className="btn btn-primary" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn">Log in</button>
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div
      className={`lg:px-14 fixed z-50 w-full text-white backdrop-blur-sm transition-all ${
        small ? "py-1 lg:py-0" : "py-3 lg:py-4"
      }`}
      style={{ background: "rgba(21, 21, 21, 0.5)" }}
    >
      <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-dark-01 rounded-box w-52 uppercase"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl hover:bg-transparent uppercase font-cinzel"
          >
            <div className="text-start">
              <h1 className=" text-2xl lg:text-[32px] tracking-widest">
                bistro boss
              </h1>
              <p className="lg:text-2xl tracking-[0.25em] lg:tracking-[0.38em] font-normal">
                restaurant
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden lg:block">
          <ul className="menu menu-horizontal px-1 uppercase items-center">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
