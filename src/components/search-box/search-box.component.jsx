import React from "react";

import "./search-box.styles.css";

//functional commponent
//make the placeholder dynamic
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    // setState is asynchronus
    onChange={handleChange}
  />
);
