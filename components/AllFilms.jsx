'use client'

import Link from 'next/link'
import React from 'react'

const AllFilms = ({ films }) => {

  return (
    <div>
        {films.map((film, index) => (
            <Link href={`/films/${index + 1}`} key={film.episode_id}>
                <h2>{film.title}</h2>
            </Link>
        ))}
    </div>
  )
}

export default AllFilms