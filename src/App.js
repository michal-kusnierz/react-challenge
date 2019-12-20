import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Heading from "./components/Heading";
import Author from "./components/Author";
import Date from "./components/Date";
import MainImage from "./components/MainImage";
import ImageLabel from "./components/ImageLabel";
import Body from "./components/Body";

function App() {
  return (
    <div className="App_container">
      <header className="App_header">
        <p>a small React challenge</p>
      </header>
      <main className='App_main'>
        <Heading />
        <Date />
        <MainImage />
        <ImageLabel />
        <Author />
        <Body />
      </main>
      <footer className='App_footer'>
        Copyright &copy;2019
      </footer>
    </div>
  );
}

export default App;
