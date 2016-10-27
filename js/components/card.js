import React from 'react'
import { render } from 'react-dom'

var Card = function(props) {
  return (
    <div className = "card">{props.text}</div>
  );
};

export default Card;
