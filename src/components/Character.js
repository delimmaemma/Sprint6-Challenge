// Write your Character component here
import React, {useState} from 'react'
import {data} from '../mocks/handlers'
import Info from './Info'

import '../css/StarWarsButtons.css'
import '../css/index.css'

export default function Character() {
    const [name] = useState(data)
    const [currentCharacterId, setCurrentCharacterId] = useState(null)

    const closeDetails = () => {
        setCurrentCharacterId(null)
    }

    return (
       <div>            
            {name.map((person) => {
                return (
                <div>
                    <button className='secondary-button container star-wars-look' onClick={() => setCurrentCharacterId(person.id)} key={person.id}><span>{person.name}</span></button>
                    {currentCharacterId && <Info characterId={currentCharacterId} person={person} close = {closeDetails} />}
                </div>
)})}
            {console.log(currentCharacterId)}
       </div>
    )
}