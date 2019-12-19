import React from 'react';
import './App.css';
import Heading from './components/Heading';
import Author from './components/Author';

function App() {
  return (
    <div className="App_container">
      <header className="App_header">
        <p>first try to fetch data</p>
      </header>
      <main>
        <Heading />
        <Author />
      </main>
    </div>
  );
}

export default App;
