import React, { Component } from 'react';
import logo from './logo.svg';
import Footers from './component/comm_component/footer_component/footer.jsx'
import Headers from './component/comm_component/Header_component/Header.jsx'
import './App.css';
class App extends Component {
  render() {
    return (
    <div>
      
      <Headers></Headers>
      
    
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Footers></Footers>
      </div>
    );
  }
}

export default App;
