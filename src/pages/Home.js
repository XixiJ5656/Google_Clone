import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import logo from "../logo.png";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home-headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home-body">
        <img src={logo} />
        <div className="home-input">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
