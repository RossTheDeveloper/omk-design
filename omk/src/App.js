import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FaBars, FaGlobe} from 'react-icons/lib/fa'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="Header-fix">
        <header className="App-header">
          <h1 className="App-logo">logo</h1>
          <h1 className="App-menu"> <FaBars /> </h1>
        </header>
        </div>

        <main>

          <div className="intro-container">
          <p className="App-intro">
            {"Welcome"}
          </p>
          <p className="App-intro2">
            {"Looking for Website Design?"}
          </p>
          </div>

          <div className="quote-container">
            <div className="icon-container">
              <div className="quote-icon">
                 <FaGlobe />
              </div>
            </div>
            <div className="quote-button">
              <button> Get A Quote </button>
              <div className="quote-info">
                <p> Returning Client ? </p>
                <a href="#"> Click Here </a>
              </div>
            </div>
          </div>


        </main>



      </div>
    );
  }
}

export default App;
