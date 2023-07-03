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
  const [selected, setSelected] = useState(0)

  return (
    <div className="App">
      <Header />
      <button className='button container star-wars-look' onClick={() => selected === 1 ? setSelected(0) : setSelected(1)}><span>Theme</span></button>
        {(selected === 1) && <div><Theme /></div>}
      <button className="button container star-wars-look" onClick={() => selected === 2 ? setSelected(0) : setSelected(2)}><span>Characters</span></button>
        {(selected === 2) && <div><Character /></div>}
      <button className='button container star-wars-look' onClick={() => selected === 3 ? setSelected(0) : setSelected(3)}><span>Films</span></button>
        {(selected === 3) && <div><Film /></div>}
        {/* <div style={{display:display}}>
          <Film />
        </div> */}
      {/* <Character
        characters={getFiltered()}/> */}
      {/* <Film
        film={getFiltered()}/> */}
    </div>
  );
}

export default App;
