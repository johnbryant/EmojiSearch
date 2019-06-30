import React from "react";
import "../styles/SearchInput.css";

const SearchInput = ({ onChange }) => (
  <div className="search-input">
    <input type="text" onChange={onChange} />
  </div>
);

export default SearchInput;
