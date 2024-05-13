'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getAllFilms } from '../../../utils/data'


const CardFilms = () => {

  const [films, setFilms] = useState([])

  useEffect(() => {
      const fetchData = async () => {
        const filmsData = await getAllFilms();
        setFilms(filmsData);
      };
      fetchData();
  }, []);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        {films.map((film, index) => (
            <Link className='w-[20rem] h-[25rem] col-span-1 relative' href={`/films/${index + 1}`} key={film.episode_id}>
                  <div className="relative w-full h-full">
                      <Image src="/filmCard.jpg" alt="filmCard" layout="fill" objectFit="cover" className='brightness-75 hover:brightness-100 duration-300'/>
                  </div>
                  <h2 className='absolute bottom-10 left-5 uppercase text-2xl font-semibold text-white bg-[#0d0d0d] py-2 px-4'>{film.title}</h2>
                  <p className='absolute top-0 left-0 uppercase font-medium italic bg-[#ffe81f] w-max px-2 py-1'>Episode number <span>{film.episode_id}</span></p>
            </Link>
        ))}
    </div>
  )
}

export default CardFilms
