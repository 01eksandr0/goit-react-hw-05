import React from "react";
import css from "./Navigation.module.css";

import { NavLink } from "react-router-dom";
import clsx from "clsx";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Navigation = () => {
  return (
    <header className={css.header}>
      <ul className={css.list}>
        <li>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Navigation;
