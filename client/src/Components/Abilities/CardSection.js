import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Waypoint } from "react-waypoint";
import "materialize-css/dist/css/materialize.min.css";
import OutlinedCard from "../Card/Cardcomp";
import "./trans.css";

const a0ability = [
  ["Shrouded Step", "Sasta Teleport"],
  ["Paranoia", "Andha kar dega"],
  ["Dark Cover", "Smoke"],
  ["Into the shadows", "Mehenga Teleport"],
];
const a1ability = [
  ["Cloudburst", "Smoke"],
  ["Updraft", "Udanchu"],
  ["Tailwind", "Fast af"],
  ["Bladestorm", "6 Rampuri chaku"],
];

export default function CardSection(props) {
  let Ability = new Map();
  Ability.set(0, a0ability);
  Ability.set(1, a1ability);
  console.log("first");
  let curr_Ability = Ability.get(props.id);
  const [inProp, setInProp] = useState(false);
  function handleWaypointEnter() {
    setInProp(true);
  }
  return (
    <div className="container service">
      <h1 className="white-text">Abilities</h1>

      <div className="row">
        <Waypoint onEnter={handleWaypointEnter} />
        <CSSTransition in={inProp} timeout={2000} classNames="alert">
          <OutlinedCard
            image={props.p1}
            title={curr_Ability[0][0]}
            content={curr_Ability[0][1]}
          />
        </CSSTransition>
        <CSSTransition in={inProp} timeout={2000} classNames="alert">
          <OutlinedCard
            image={props.p2}
            title={curr_Ability[1][0]}
            content={curr_Ability[1][1]}
          />
        </CSSTransition>

        <CSSTransition in={inProp} timeout={2000} classNames="alert">
          <OutlinedCard
            image={props.p3}
            title={curr_Ability[2][0]}
            content={curr_Ability[2][1]}
          />
        </CSSTransition>

        <CSSTransition in={inProp} timeout={2000} classNames="alert">
          <OutlinedCard
            image={props.p4}
            title={curr_Ability[3][0]}
            content={curr_Ability[3][1]}
          />
        </CSSTransition>
      </div>
    </div>
  );
}
