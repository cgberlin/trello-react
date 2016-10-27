import React from 'react'
import { render } from 'react-dom'
import List from './list';


var Board = function(props) {
  return (
    <div className = "board">{props.boardTitle}
      <List listTitle = "list 1" onAddSubmit = {(event) => {event.preventDefault(); console.log(event)}}/>{props.listTitle}
      <List listTitle = "list 2"/>{props.listTitle}
      <List listTitle = "list 3"/>{props.listTitle}
    </div>
  );
};

export default Board;
