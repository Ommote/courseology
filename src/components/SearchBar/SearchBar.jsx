import React from "react";
import "./SearchBar.scss";
import Button from "../Button/Button";

const SearchBar = () => {
  return (
    <div className="search-container">
      <form className="search-container__form">
        <label htmlFor="search"></label>
        <input
          type="text"
          className="search-container__input"
          placeholder="Search our course range..."
        />
        <Button buttonName="Search Our Courses" />
      </form>
    </div>
  );
};

export default SearchBar;
