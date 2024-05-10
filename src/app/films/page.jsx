import React from 'react'
import AllFilms from '../../../components/AllFilms'

const getAllFilms = async () =>{
    const res = await fetch('https://swapi.dev/api/films')
    const data = await res.json()
    return data.results
}

const FilmsPage = async () => {

    const films = await getAllFilms()


  return (
    <div className='h-full flex flex-col justify-center items-center bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1715273713/Prueba%20t%C3%A9cnica/peter-gargiulo-cGNCepznaV8-unsplash_l83qqz.jpg)] bg-fixed bg-cover pt-40 pb-20 gap-10'>
        <h1 className='uppercase text-4xl text-white font-semibold bg-[#0d0d0d] py-4 px-10'>all the films of <span className='text-[#ffe81f] italic'>the saga</span></h1>
        <AllFilms films={films}/>
    </div>
  )
}

export default FilmsPage