import React from "react";
import "./video.css";
export default function Video(props) {
  console.log("video",props.title);
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(45deg,${props.c1} 30%, ${props.c2} 60%)`,
        }}
        className="type "
      >
        <p >{props.title}</p>
      </div>
      <video
        src={props.sc}
        autoPlay
        loop
        muted
        style={{
          position: "relative",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%)",
        }}
      ></video>
    </div>
  );
}
