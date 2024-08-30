import { Outlet } from "react-router-dom";

const GlobalLayout = () => {
  return (
    <div className="bg-black h-screen">
      <div className="relative max-w-[600px] m-auto px-[30px] py-5 bg-purple-700 h-full overflow-x-hidden scrollbar-hide">
        <Outlet />
      </div>
    </div>
  );
};

export default GlobalLayout;
