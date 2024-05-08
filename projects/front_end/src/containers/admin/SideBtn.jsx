import React from "react";
import { NavLink } from "react-router-dom";
import NavBtn from "../../Components/Button/NavBtn";



export const SideBtn = () => {

  const handleClick = () => {
    // Perform actions on button click

   // dispatch(ListUserAction());
  };
  return (
    <div>
      <div className="flex flex-col gap-3 my-5">
        <NavLink
          to="/sourcesmodels"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-aqua rounded-xl" : ""
          }
        >
          <NavBtn text="Admin Settings" width="180px" />
        </NavLink>
        <NavLink
          to="/usertable"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-aqua rounded-xl" : ""
          }
        >
          <NavBtn text="Users" width="180px" />
        </NavLink>

        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-aqua rounded-xl" : ""
          }
        >
          <NavBtn text="Statistics" width="180px" />
        </NavLink>

        <NavLink
          to="/files"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-aqua rounded-xl" : ""
          }
        >
          <NavBtn text="Model Files" width="180px" />
        </NavLink>
      </div>
    </div>
  );
};
