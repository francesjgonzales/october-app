/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
 */

import React from 'react';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { Brand, Cta, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header /> 
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>

  )
}

export default App