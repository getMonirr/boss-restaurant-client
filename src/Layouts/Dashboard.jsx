import { Outlet } from "react-router-dom";
import BossContainer from "../components/BossContainer";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";

const Dashboard = () => {
  return (
    <BossContainer>
      <div className="drawer drawer-mobile relative">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Page content here --> */}
          <div className="px-36 pb-12">
            <Outlet />
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden "
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <DashboardSidebar />
        </div>
      </div>
    </BossContainer>
  );
};

export default Dashboard;
