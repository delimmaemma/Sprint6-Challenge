import React, {useState} from 'react';
import Character from './components/Character'
import Film from './components/Film'
import Theme from './components/Theme'
import Header from './components/Header'

import './css/StarWarsButtons.css'
import './css/index.css'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header />
      <Character />
    </div>
  );
}

export default App;
