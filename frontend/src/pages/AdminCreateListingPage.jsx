import SideBar from "../components/SideBar";
import { Nav } from "../sections";
import CrateListing from "../components/CrateListing";


const AdminCreateListingPage = () => {
  return (
    <div>
      <Nav />
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-start justify-around w-full">
          <div className="w-[80px] lg:w-[330px]">
            <SideBar active={2} />
          </div>
          <CrateListing />
          <div className=" w-[80px] lg:w-[330px] ">
            <SideBar active={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCreateListingPage;
