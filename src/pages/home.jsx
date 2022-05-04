import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Repository from "../components/repository";
import Search from "../components/search";
import SideProfile from "../components/sideprofile";
import "../css/home.css";
import { useSelector, useDispatch } from "react-redux";
import { getRepos } from "../redux/repos";
const Home = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.repos);
  useEffect(() => {
    dispatch(getRepos());
  }, [dispatch]);
  const { lists } = useSelector((state) => state.repos);
  let _renderObject = () => {
    return Object.keys(lists).map((obj, i) => {
      let repo = lists[obj];
      console.log(status);
      return <Repository keys={i} name={repo.name} isPrivate={repo.private} />;
    });
  };
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
        {status === "loading" ? "loading" : _renderObject()}
      </div>
    </div>
  );
};

export default Home;
