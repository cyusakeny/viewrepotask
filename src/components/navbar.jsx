import React from "react";
import "../css/navbar.css";
import { BsBook } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import { MdWindow } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { BiStar } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="ncontainer">
      <span className="cspan">
        <BsBook className="cspanicon" />
        Overview
      </span>
      <span className="cspan currentspan">
        <RiGitRepositoryLine className="cspanicon" />
        Repositories <span className="cspan2">190</span>
      </span>
      <span className="cspan">
        <MdWindow className="cspanicon" />
        Projects
      </span>
      <span className="cspan">
        <FiPackage className="cspanicon" />
        Packages
      </span>
      <span className="cspan">
        <BiStar className="cspanicon" />
        Stars <span className="cspan2">190</span>
      </span>
    </div>
  );
};
export default Navbar;
