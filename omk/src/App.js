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
            {"Welcome"}
          </p>
          <p className="App-intro2">
            {"Looking for Website Design?"}
          </p>

          <div className="quote-container">
            <div className="quote-button">
              <button> Get A Quote </button>
            </div>
          </div>


        </main>



      </div>
    );
  }
}

export default App;
