import React, {useState} from 'react'
import styled from 'styled-components'

import '../css/StarWarsButtons.css'
import '../css/index.css'

export const StyledContainer = styled.div`
        border-color: black;
        color: black;
    `

export default function Info(props) {
    const {characterId, close} = props
    const {person} = props

if(characterId === person.id) {
    return (
            <StyledContainer className='container star-wars-look'>
                    <div key={person.id}>
                        <p>Height: {person.height}</p>
                        <p>Mass: {person.mass}</p>
                        <p>Hair Color: {person.hair_color}</p>
                        <p>Skin Color: {person.skin_color}</p>
                        <p>Eye Color: {person.eye_color}</p>
                        <p>Birth Year: {person.birth_year}</p>
                        <p>Gender: {person.gender}</p>
                        <ul>Movies:
                                {
                                person.films.map((movie, idx) => <li key={idx}>{movie}</li>)
                                }
                        </ul>
                        <p></p>
                        <button className='tertiary-button container star-wars-look' onClick={close}>Close</button>
                    </div>
            </StyledContainer>
    )
}
return null
}