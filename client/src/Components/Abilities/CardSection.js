import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Waypoint } from "react-waypoint";
import "materialize-css/dist/css/materialize.min.css";
import OutlinedCard from "../Card/Cardcomp";
import "./trans.css";

const a0ability = [
  [
    "Shrouded Step",
    " Fire to begin a brief channel, then teleport to the location.Shrouded Step is a very short-ranged teleport that requires line-of-sight on your desired end location. ",
  ],
  [
    "Paranoia",
    "Instantly fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.",
  ],
  [
    "Dark Cover",
    "Fire to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. Omen's Dark Cover is perfectly hollow on the inside. ",
  ],
  [
    "Into the shadows",
    "Fire to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.",
  ],
];
const a1ability = [
  [
    "Cloudburst",
    "	Instantly throw a projectile that expands into a brief vision cloud on impact with a surface. Hold the ability key to curve the cloud in the direction of your crosshair.",
  ],
  [
    "Updraft",
    "Instantly propel Jett high into the air.Jett's Tailwind doesn't take into account vertical angle, so you can't move up or down with Tailwind alone.",
  ],
  [
    "Tailwind",
    "	Instantly propel in the direction she is moving. If Jett is standing still, she will propel forward.Jett's Tailwind doesn't take into account vertical angle",
  ],
  [
    "Bladestorm",
    "	Equip a set of highly accurate throwing knives that recharge on killing an opponent. Fire to throw a single knife at your target. Alternative Fire to throw all remaining daggers .",
  ],
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
      <div
        className="headingWrapper"
        style={{ backgroundColor: "transparent" }}
      >
        <a href="" className="header header--raiseUp header--shadow">
          ABILITIES
        </a>
      </div>

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
