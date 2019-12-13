import React from "react";
import "./App.css";
import { Provider } from 'react-redux';

import Smurfs from './smurfs';
import SmurForm from './smurfForm';
import store from '../store';


function App () {

    return (
      <Provider store={store}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>

          <SmurForm />
          <Smurfs />

        </div>
      </Provider>
    );
  
}

export default App;
