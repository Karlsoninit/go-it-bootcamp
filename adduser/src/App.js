import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from "./News"
import News2 from "./News2"
import Timer from "./Timer"
import Trees from "./Trees"
import CrossFit from "../src/CrossFit"




class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<News/>*/}
        {/*<News2/>*/}
        {/*<Trees/>*/}
        <CrossFit/>

      </div>
    );
  }
}

export default App;
