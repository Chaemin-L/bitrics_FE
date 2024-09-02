import { ROUTES } from "@/router";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const NavHeader = () => {
  const { pathname } = useLocation();
  return (
    <div className="px-7 pt-7 space-y-7">
      {/** logo and map */}
      <div className="flex justify-between">
        <Link to="/">
          <img src={logo} className="w-[155px] h-[26px] hover:cursor-pointer" />
        </Link>
        <Link to="/map">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66671 16L1.83337 19.3333V6L7.66671 2.66667M7.66671 16L14.3334 19.3333M7.66671 16V2.66667M14.3334 19.3333L20.1667 16V2.66667L14.3334 6M14.3334 19.3333V6M14.3334 6L7.66671 2.66667"
              stroke="white"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/** tab menu */}
      <nav>
        <ul className="flex gap-4">
          {ROUTES.map((route) => {
            if (!route.show) return;
            return (
              <li
                key={route.path}
                className={clsx(
                  "font-bold text-[16px] text-contrast-300 transition-colors ",
                  pathname === route.path
                    ? "text-white hover:text-white"
                    : "hover:text-contrast-400"
                )}
              >
                <Link to={`${route.path}`}>{route.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavHeader;
