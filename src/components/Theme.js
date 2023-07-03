import React, {useState} from 'react'

import '../css/ThemeButtons.css'
import '../css/index.css'

export default function Theme() {
    const themes = document.querySelector('.header')
    const pokemonTheme = () => {
        themes.style.backgroundImage = "url('../images/pokemon-header.png')"
    }
    const starWarsTheme = () => {
        themes.style.backgroundImage = "url('../images/star-wars-sky.jpg')"
    }
    const rickAndMortyTheme = () => {
        themes.style.backgroundImage = "url('../images/rick-and-morty.jpg')"
    }
    return(
        <div>
            <button className="star-wars container star-wars-look" onClick={() => starWarsTheme()}><span>Star Wars</span></button>
            <button className="pokemon container pokemon-look" onClick={() => pokemonTheme()}><span>Pokemon</span></button>
            <button className="rick-and-morty container rick-and-morty-look" onClick={() => rickAndMortyTheme()}><span>Rick and Morty</span></button>
        </div>
    )
}