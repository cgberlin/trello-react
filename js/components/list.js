import React from 'react'
import { render } from 'react-dom'
import Card from './card';

var List = function(props) {
  return (
    <div className = "card-list">{props.listTitle}{props.cards}
      <form className = "list-form">
        <input type = "text"  onChange = {props.onAddInputChanged}></input>
        <button type = "submit" onClick={props.onAddSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default List;
