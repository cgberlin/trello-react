import React from 'react'
import { render } from 'react-dom'
import Card from './card';
import List from './list'

var ListContainer = React.createClass({
  text : '',
  cardsInList : [],
  render : function(cardsInList){
    return <List cards = {this.cardsInList} onAddInputChanged = {(event) => {this.text = event.target.value}}
                                            onAddSubmit = {(event) => {this.cardsInList.push(<Card text = {this.text}/>); event.preventDefault(); console.log(this.cardsInList)}} />
  }
});

export default ListContainer;
