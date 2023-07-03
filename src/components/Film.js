// Write your Film component here
import React, {useState} from 'react'
import {films} from '../mocks/handlers'
import Movie from './Movie'

import '../css/StarWarsButtons.css'
import '../css/index.css'

const Film = () => {
    const [movies] = useState(films)
    const [currentMovieId, setCurrentMovieId] = useState(null)

    const closeDetails = () => {
        setCurrentMovieId(null)
    }

    return (
       <div>
            {movies.map(film => {
                return (
                    <div>
                        <button className="secondary-button container star-wars-look" onClick={() => setCurrentMovieId(film.episode_id)} key={film.episode_id}><span>{film.title}</span></button>
                        {currentMovieId && <Movie movieId={currentMovieId} movie={film} close = {closeDetails} />}
                    </div>
            )})}
       </div> 
    )
}

export default Film