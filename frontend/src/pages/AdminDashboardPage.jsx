import { Nav } from "../sections";
import SideBar from "../components/SideBar";
import AdminDashboardMain from "./AdminDashboardMain";
const AdminDashboardPage = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] lg:w-[330px]">
            <SideBar active={1} />
          </div>
          <AdminDashboardMain />
          <div className="hidden w-[80px] lg:w-[330px] ">
            <SideBar active={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
