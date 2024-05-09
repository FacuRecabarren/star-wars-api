import React from 'react'
import AllFilms from '../../../components/AllFilms'

const getAllFilms = async () =>{
    const res = await fetch('https://swapi.dev/api/films')
    const data = await res.json()
    return data.results
}

const FilmsPage = async () => {

    const films = await getAllFilms()

    console.log(films);

  return (
    <div>
        <AllFilms films={films}/>
    </div>
  )
}

export default FilmsPage