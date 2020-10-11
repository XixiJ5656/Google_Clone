import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
const Search = () => {
  const search = (e) => {
    e.preventDefautl();
  };

  return (
    <div className="search">
      <div className="search-input">
        <SearchIcon className="search-icon" />
        <input />
        <MicIcon />
      </div>
      <div className="search-button">
        <Button onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
};

export default Search;
