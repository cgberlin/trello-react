import React from 'react'
import { render } from 'react-dom'
import Card from './card';
import List from './list'

var ListContainer = React.createClass({
  getInitialState: function() {
      return {
          text : '',
          cardsInList : []
      }
    },
  render : function(){
    return <List cards = {this.state.cardsInList} onAddInputChanged = {(event) => {this.state.text = event.target.value}}
                                            onAddSubmit = {(event) => {this.state.cardsInList.push(<Card text = {this.state.text}/>); event.preventDefault(); console.log(this.state.cardsInList)}} />
  }
});

export default ListContainer;
