import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import '../css/StarWarsButtons.css'
import '../css/index.css'

export const StyledContainer = styled.div`
        border-color: black;
        color: black;
    `

export default function Info(props) {
    const {movieId, close} = props
    const {movie} = props

let episode = 0

function play_intro(episode) {
    if(episode === 1) window.location.href = 'https://youtu.be/zpuqzwGL0KU?t=25'
    else if(episode === 2) window.location.href = 'https://youtu.be/ZXVG4LBo0wc'
    else if(episode === 3) window.location.href = 'https://youtu.be/3eVDpFmc5DI'
    else if(episode === 4) window.location.href = 'https://youtu.be/W0gs_TuqoIU?t=25'
    else if(episode === 5) window.location.href = 'https://youtu.be/fm_4WaPbbK0'
    else if(episode === 6) window.location.href = 'https://youtu.be/SP38YUTFWjY?t=25'
}

if(movieId === movie.episode_id) {
    return (
            <StyledContainer className='container star-wars-look'>
                    <div key={movie.episode_id}>
                        <p>Director: {movie.director}</p>
                        <p>Producer: {movie.producer}</p>
                        <p>Release Date: {movie.release_date}</p>
                        <p></p>
                        <button className='movie tertiary-button container star-wars-look' onClick={() => play_intro(episode = movieId)}>Play {movie.title} Intro</button>
                        <button className='tertiary-button container star-wars-look' onClick={close}>Close</button>
                    </div>
            </StyledContainer>
    )
}
return null
}