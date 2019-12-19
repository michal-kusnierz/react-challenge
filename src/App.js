import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Heading from './components/Heading';
import Author from './components/Author';
import Date from './components/Date';
import Test from './components/Test';

function App() {
  return (
    <div className="App_container">
      <header className="App_header">
        <p>first try to fetch data</p>
      </header>
      <main>
        <Heading />
        <Author />
        <Date />
        <Test />
      </main>
    </div>
  );
}

export default App;
