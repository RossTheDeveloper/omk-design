import React, { Component } from 'react';
import {FaBars} from 'react-icons/lib/fa'



class Header extends Component {

  state= {
    search:false
  }

toggle = () => {
  this.setState((prevState) => ({search:!prevState.search}))
  console.log("test")
  }



  render(){
    return(
      <div className="Header-fix">

        <header className="App-header">
          <h1 className="App-logo">OMK</h1>
          <h1 className="App-menu" onClick={this.toggle}> <FaBars /> </h1>
        </header>

        <aside>
          <nav>
            <ul className={this.state.search?null:"tony"}>
              <li> example 1</li>
              <li> example 2 </li>
              <li> example 3</li>
              <li> example 4</li>
            </ul>
          </nav>
        </aside>


      </div>

    )
  }
}


export default Header;
