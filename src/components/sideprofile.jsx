import React from "react";
import { Avatar } from "@mui/material";
import image from "../images/bats.png";
import { FaAirbnb, FaUserFriends } from "react-icons/fa";
import "../css/sideprofile.css";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
const SideProfile = (_props) => {
  return (
    <div className="sidecontainer">
      <Avatar
        sx={{ width: "300px", height: "280px" }}
        alt="Profile pic"
        src={image}
      />
      <Avatar
        sx={{ width: "40px", height: "40px", bottom: "67px", left: "244px" }}
      >
        <FaAirbnb />
      </Avatar>
      <h2 className="username"> Maestro</h2>
      <p className="name">MaestroAlmanito</p>
      <button className="button">Follow</button>
      <p className="quote">never give up try!!</p>
      <p className="followers">
        <FaUserFriends size={15} className="usericon" />
        <span>105</span>
        Followers
        <span>192</span>
        Following
      </p>
      <div className="profile">
        <p>
          <GoLocation className="profileicon" /> Kigali
        </p>
        <p>
          <AiOutlineMail className="profileicon" /> maestro@gmail.com
        </p>
        <p>
          <AiOutlineTwitter className="profileicon" /> @maestro
        </p>
      </div>
      <div className="achievements">
        <h2 className="achievementheader">Achievements</h2>
        <Avatar
          sx={{ width: "30px", height: "30px" }}
          alt="achievement pic"
          src={image}
          variant="square"
        />
      </div>
    </div>
  );
};
export default SideProfile;
