import React from 'react'
import { render } from 'react-dom'
import ListContainer from './list-container'


var Board = function(props) {
  return (
    <div className = "board">{props.boardTitle}
      <ListContainer />
    </div>
  );
};

export default Board;
