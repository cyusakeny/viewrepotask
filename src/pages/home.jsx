import React, { Component } from "react";
import Navbar from "../components/navbar";
import Repository from "../components/repository";
import Search from "../components/search";
import SideProfile from "../components/sideprofile";
import "../css/home.css";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="hcontainer">
        <div className="hnav">
          <Navbar />
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="hprofile">
          <SideProfile />
        </div>
        <div className="repos">
          <Repository />
          <Repository />
          <Repository />
          <Repository />
          <Repository />
          <Repository />
          <Repository />
          <Repository />
          <Repository />
          <Repository />
        </div>
      </div>
    );
  }
}

export default Home;
