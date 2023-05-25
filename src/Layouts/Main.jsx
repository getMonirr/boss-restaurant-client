import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const { pathname } = useLocation();

  const isHeaderFooter = pathname == "/login" || pathname == "/sign-up";

  return (
    <>
      {!isHeaderFooter && <Navbar />}
      <Outlet />
      {!isHeaderFooter && <Footer />}
    </>
  );
};

export default Main;
