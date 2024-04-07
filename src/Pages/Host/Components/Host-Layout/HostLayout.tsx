import {  NavLink } from "react-router-dom";

export const HostLayout = () => {
  return (
    <>
      <nav className="flex">
      <NavLink
          to=""
          end
          className={({ isActive }) =>
          isActive
          ? "text-red-400 py-1 px-2 font-semibold mr-2 rounded-tl rounded-bl"
          : "py-1 px-2 font-semibold mr-2 rounded-tl rounded-bl"
      }
        >
          Dashboard
        </NavLink> 
        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive
              ? "text-red-400 py-1 px-2 font-semibold mr-2 rounded-tl rounded-bl"
              : "py-1 px-2 font-semibold mr-2 rounded-tl rounded-bl"
          }
        >
          Income
        </NavLink>
       
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive
              ? "text-red-400 py-1 px-2 font-semibold mr-2 rounded-tl rounded-bl"
              : "py-1 px-2 font-semibold mr-2 rounded-tl rounded-bl"
          }
        >
          Reviews
        </NavLink>
      </nav>
      <hr className="my-2" />
    </>
  );
};

export default HostLayout;
