import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Heading from "./components/Heading";
import Author from "./components/Author";
import Date from "./components/Date";
import Test from "./components/Test";
import MainImage from "./components/MainImage";
import ImageLabel from "./components/ImageLabel";

function App() {
  return (
    <div className="App_container">
      <header className="App_header">
        <p>first try to fetch data</p>
      </header>
      <main>
        <Heading />
        <Date />
        <Author />
        <MainImage />
        <ImageLabel />
       
        <Test />
      </main>
    </div>
  );
}

export default App;
