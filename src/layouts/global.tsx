import NavHeader from "@/components/common/NavHeader";
import { Outlet } from "react-router-dom";

const GlobalLayout = () => {
  return (
    <div className="bg-black h-screen">
      <div className="max-w-[600px] m-auto bg-purple-700 h-full overflow-x-hidden scrollbar-hide">
        <NavHeader />
        <div className="relative p-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GlobalLayout;
