import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  const toHome = () => {
    localStorage.clear("movies");
  };
  return (
    <header className={css.header}>
      <ul className={css.list}>
        <li>
          <NavLink className={buildLinkClass} to="/" onClick={toHome}>
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
export default Header;
