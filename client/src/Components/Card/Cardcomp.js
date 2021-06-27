import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './CardComp.css';
export default function OutlinedCard(props) {
  return (
    <div class="col s6 m6 l3 center-align">
      <div class="card">
      <div class="card-content">
        <img src={props.image} alt="alt"  className="responsive-img  materialboxed"/>
        <h5>{props.title}</h5>
        <p>
         {props.content}
        </p>
      </div>
     
    </div>
  </div>
  );
}