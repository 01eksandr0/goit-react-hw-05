import React from "react";
import { IoMdSearch } from "react-icons/io";
import style from "./SearchBar.module.css";

const SearchBar = ({ searchMovies }) => {
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={searchMovies}>
        <input
          className={style.search}
          autoComplete="off"
          name="search"
          autoFocus
          type="text"
          placeholder="Search images..."
        />
        <button className={style.btn} type="submit">
          <IoMdSearch className={style.icon} />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
