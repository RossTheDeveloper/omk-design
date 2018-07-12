import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FaBars} from 'react-icons/lib/fa'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-logo">logo</h1>
          <h1 className="App-menu"> <FaBars /> </h1>
        </header>
        <main>
          <p className="App-intro">
            {"welcome"}
          </p>
          <p className="App-intro2">
            {"we specialize in web & logo design"}
          </p>

          <div className="card-container">
          </div>
        </main>

      </div>
    );
  }
}

export default App;
