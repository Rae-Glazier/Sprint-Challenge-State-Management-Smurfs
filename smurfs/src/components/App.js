import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

class App extends Component {
  fetch(){
    axios('http://localhost:3333/smurfs')
        // .then (res => console.log(res) res.json())
        .then (res => console.log(res))
  }
  
  render() {
    return (
      <div className="App">
        {/* <SmurfForm />
        <Smurfs /> */}
      </div>
    );
  }
}

export default App;
