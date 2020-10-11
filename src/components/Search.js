import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

const Search = () => {
  return (
    <div className="search">
      <div className="search-input">
        <SearchIcon className="search-icon" />
        <input />
        <MicIcon />
      </div>
    </div>
  );
};

export default Search;
