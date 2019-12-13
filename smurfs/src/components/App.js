import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { SmurfContext } from './SmurfContext';
import SmurfList from './SmurfList';
import Form  from './Form';


function App () {

  const [smurf, setSmurf] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        setSmurf(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

    return (
      <SmurfContext.Provider value={smurf}>
        <div className="App">
          <h1>Please No More Smurfs</h1>
          
         <Form />
         <SmurfList />

        </div>
      </SmurfContext.Provider>
    );
  
}

export default App;
