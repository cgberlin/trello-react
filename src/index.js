import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router';
import Board from '../js/components/board'
var ReactDOM = require('react-dom');


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board boardTitle = "boarddddd"/>, document.getElementById('app'));
});
