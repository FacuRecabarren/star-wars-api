'use client'

import Link from 'next/link'
import React from 'react'

const AllFilms = ({ films }) => {

  return (
    <div className='grid grid-cols-3 gap-10'>
        {films.map((film, index) => (
            <Link className='w-[20rem] h-[25rem] col-span-1 relative' href={`/films/${index + 1}`} key={film.episode_id}>
                  <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1715281632/Prueba%20t%C3%A9cnica/thumb-1920-600482_tfpcdc.jpg" alt="" className='w-full h-full object-cover brightness-75 hover:brightness-100 duration-300'/>
                  <h2 className='absolute bottom-10 left-5 uppercase text-2xl font-semibold text-white bg-[#0d0d0d] py-2 px-4'>{film.title}</h2>
                  <p className='absolute top-0 left-0 uppercase font-medium italic bg-[#ffe81f] w-max px-2 py-1'>Episode number <span>{film.episode_id}</span></p>
            </Link>
        ))}
    </div>
  )
}

export default AllFilms