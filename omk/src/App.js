import React, { Component } from 'react';
import './App.css';
import { FaGlobe} from 'react-icons/lib/fa'
import Header from "./Header"
class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />



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

        <article className="into-projs-container">
          <div className="projs">
          </div>

          <div className="projs">
          </div>
        </article>



      </div>
    );
  }
}

export default App;
