import React, {useState} from 'react'
import StarWars from '../images/star-wars-sky.jpg'
import StarWarsBackground from '../images/sw-bg.jpg'
import Pokemon from '../images/pokemon-header.png'
import PokemonBackground from '../images/pk-bg.jpg'
import RickandMorty from '../images/rick-and-morty.jpg'
import RickandMortyBackground from '../images/rm-bg.jpg'

import '../css/ThemeButtons.css'
import '../css/index.css'


export default function Theme() {
    const themes = document.querySelector('.header')
    const background = document.querySelector('body')
    const pokemonTheme = () => {
        themes.style.backgroundImage = `url(${Pokemon})`
        themes.style.backgroundPosition = 'left'
        background.style.backgroundImage = `url(${PokemonBackground})`
        background.style.fontFamily = 'Pokemon Solid'
        // background.classList.remove('.star-wars')
        // background.classList.remove('.rick-and-morty')
        // background.classList.add('.pokemon')
    }
    const starWarsTheme = () => {
        themes.style.backgroundImage = `url(${StarWars})`
        themes.style.backgroundPosition = 'left'
        background.style.backgroundImage = `url(${StarWarsBackground})`
        background.style.fontFamily = 'Star Wars'
        // background.classList.remove('.rick-and-morty')
        // background.classList.remove('.pokemon')
        // background.classList.add('.star-wars')
    }
    const rickAndMortyTheme = () => {
        themes.style.backgroundImage = `url(${RickandMorty})`
        themes.style.backgroundPosition = 'top'
        background.style.backgroundImage = `url(${RickandMortyBackground})`
        background.style.fontFamily = 'Get Schwifty'
        // background.classList.remove('.star-wars')
        // background.classList.remove('.pokemon')
        // background.classList.add('.rick-and-morty')
    }

    //Have to build new JS pages that render the new fonts. Cant' controll them here.

    return(
        <div>
            <button className="star-wars container star-wars-look" onClick={() => starWarsTheme()}><span>Star Wars</span></button>
            <button className="pokemon container pokemon-look" onClick={() => pokemonTheme()}><span>Pokemon</span></button>
            <button className="rick-and-morty container rick-and-morty-look" onClick={() => rickAndMortyTheme()}><span>Rick and Morty</span></button>
        </div>
    )
}