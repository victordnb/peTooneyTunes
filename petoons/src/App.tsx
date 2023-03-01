import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MenuHead from './components/menuHead/menuHead';
import ResponsiveAppBar from './components/responsiveAppBar/ResponsiveAppBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar></ResponsiveAppBar>
        <MenuHead></MenuHead>
        
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
