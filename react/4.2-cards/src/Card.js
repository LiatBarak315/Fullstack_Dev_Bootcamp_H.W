import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} />
      <h1>{props.text}</h1>
      <p>{props.description}</p>
      <a href="#">{props.link1}</a>
      <a href="#">{props.link2}</a>
    </div>
  );
};
export default Card;