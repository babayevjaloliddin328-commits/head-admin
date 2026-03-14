import React from "react";
import {NavLink} from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <NavLink className={"sidebar__link"} to={"/products"}>
          Products
        </NavLink>

        <NavLink className={"sidebar__link"} to={"/users"}>
          Users
        </NavLink>

        <NavLink className={"sidebar__link"} to={"/cars"}>
          Cars
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;