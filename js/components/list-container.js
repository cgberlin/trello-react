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
  updateState: function(){
    this.setState(this.state);
  },
  render : function(){
    return <List listTitle = "list" cards = {this.state.cardsInList} onAddInputChanged = {(event) => {this.state.text = event.target.value}}
                                            onAddSubmit = {(event) => {this.state.cardsInList.push(<Card text = {this.state.text}/>); event.preventDefault(); this.updateState()}} />
  }
});

export default ListContainer;
