'use client'

import Link from 'next/link'
import React from 'react'

const AllCharacters = ({ characters }) => {

  return (
    <div>
        {characters.map((character, index) => (
            <Link href={`/characters/${index + 1}`} key={character.index}>
                <h2>{character.name}</h2>
            </Link>
        ))}
    </div>
  )
}

export default AllCharacters