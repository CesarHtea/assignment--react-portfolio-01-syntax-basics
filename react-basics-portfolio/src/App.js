import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import PortfolioFixed from './components/PortfolioFixed.js'
import PortfolioContent from './components/PortfolioContent.js'

class App extends Component {
  render() {
    return (
    	<div id="app-container">
    		<PortfolioFixed />
    		<PortfolioContent />
    	</div>
    )
  }
}

export default App;
