import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox'

class App extends Component {
  
  
  
  
  render() {
    return (
      <div className = "tc">
      <h2 className = "">Star Wars App!!</h2>
      <b>Everything you want to know about star wars!</b>
      <SearchBox></SearchBox>
      <CardList></CardList>
      </div>
    
    );
  }
}

export default App;
