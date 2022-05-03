import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { GoLaw } from "react-icons/go";
import { FaSortDown } from "react-icons/fa";
import "../css/repository.css";
const Repository = () => {
  return (
    <div className="container">
      <h2>
        Flutter <span className="status">public</span>
      </h2>
      <p className="forked">Forked from flutter/flutter</p>
      <p className="description">
        Flutter makes it easy and fast to create and build beautiful mobile apps
      </p>
      <div className="details">
        <span className="dspan">
          <BsCircleFill className="icons" />
          Dart
        </span>
        <span className="dspan">
          <BiGitRepoForked className="icons" />
          21,344
        </span>
        <span className="dspan">
          <GoLaw className="icons" />
          MIT License
        </span>
        <span className="dspan">updated 9 days ago</span>
      </div>
      <div className="buttons">
        <button className="button1">
          <BiStar className="staricon" />
          Star
        </button>
        <button className="button2">
          <FaSortDown className="faicon" />
        </button>
      </div>
      <hr className="line" />
    </div>
  );
};
export default Repository;
