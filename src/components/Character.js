// Write your Character component here
import React, {useState} from 'react'
import {data} from '../mocks/handlers'
import Info from './Info'
import styled from 'styled-components'

import '../css/StarWarsButtons.css'
import '../css/index.css'

export default function Character() {
    const [name] = useState(data)
    const [currentCharacterId, setCurrentCharacterId] = useState(null)

    const closeDetails = () => {
        setCurrentCharacterId(null)
    }

    const SecondaryButton = styled.div`
        display: inline-block;
        border-color: black;
        border-radius: 4px;
        background: none;
        font-family: 'Star Wars', sans-serif;
        text-align: center;
        font-size: 28px;
        padding: 20px;
        width: 60%;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
        border: 2px solid rgb(210, 210, 210);
        box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
        border-radius: 8px;
        margin: 16px;
        padding: 16px 8px 12px 16px;
        &:hover {
            box-shadow: 2px 3px 8px 0px rgb(128, 127, 127);
        }
        color: black;
        text-shadow: 
            -1px -1px 0 #FFE81F,
            1px -1px 0 #FFE81F,
            -1px 1px 0 #FFE81F,
            1px 1px 0 #FFE81F,  
            -2px 0 0 #FFE81F,
            2px 0 0 #FFE81F,
            0 2px 0 #FFE81F,
            0 -2px 0 #FFE81F;
    `

    return (
       <div>            
            {name.map((person) => {
                return (
                <div>
                    <SecondaryButton className= 'secondary-button' onClick={() => setCurrentCharacterId(person.id)} key={person.id}><span>{person.name}</span></SecondaryButton>
                    {currentCharacterId && <Info characterId={currentCharacterId} person={person} close = {closeDetails} />}
                </div>
)})}
            {console.log(currentCharacterId)}
       </div>
    )
}