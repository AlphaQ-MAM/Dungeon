import React from "react";
import CardSection from "../Abilities/CardSection";
import Carousel from "../Carousel/Carousel";
import Video from "../Video/video";
import "./agent.scss";
import OV1 from "../../Images/omen/v1.mp4";
import Op1 from "../../Images/omen/1.JPG";
import Op2 from "../../Images/omen/2.JPG";
import Op3 from "../../Images/omen/3.JPG";
import Op4 from "../../Images/omen/4.JPG";
import Of1 from "../../Images/omen/f1.jpg";
import Of2 from "../../Images/omen/f2.jpg";
import Of3 from "../../Images/omen/f3.jpg";

import JV1 from "../../Images/jett/v1.mp4";
import Jp1 from "../../Images/jett/p1.png";
import Jp2 from "../../Images/jett/p2.png";
import Jp3 from "../../Images/jett/p3.png";
import Jp4 from "../../Images/jett/p4.png";
import Jf1 from "../../Images/jett/f1.jpg";
import Jf2 from "../../Images/jett/f2.jpg";
import Jf3 from "../../Images/jett/f3.png";

export default function AgentComp(props) {
  const agent1 = [
    0,
    OV1,
    Op1,
    Op2,
    Op3,
    Op4,
    Of1,
    Of2,
    Of3,
    "#304bf5",
    "#1b1e2f",
    "OMEN",
  ];
  const agent2 = [
    1,
    JV1,
    Jp1,
    Jp2,
    Jp3,
    Jp4,
    Jf1,
    Jf2,
    Jf3,
    "#23444d",
    "#65fcfc",
    "JETT",
  ];
  let agents = { OMEN: agent1, JETT: agent2 };

  let currAgent = agents[props.agent];
  console.log("Agent :", agent1);
  return (
    <div style ={{backgroundColor:"#367"}}>
      {console.log("hello" + currAgent[11])}
      <Video
        c1={currAgent[9]}
        c2={currAgent[10]}
        sc={currAgent[1]}
        title={currAgent[11]}
      />
      <CardSection
        p1={currAgent[2]}
        p2={currAgent[3]}
        p3={currAgent[4]}
        p4={currAgent[5]}
        id={currAgent[0]}
      />

      <div
        style={{ padding: "10px 10px 10px 10px", backgroundColor: "transparent" }}
        className="container"
      >
        <div
          className="headingWrapper"
          style={{ backgroundColor: "transparent" }}
        >
          <a href="" className="header header--raiseUp header--shadow">
            FAN ART
          </a>
        </div>
        <Carousel f1={currAgent[6]} f2={currAgent[7]} f3={currAgent[8]} />
      </div>
    </div>
  );
}
