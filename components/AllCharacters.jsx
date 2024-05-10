'use client'

import Link from 'next/link'
import React from 'react'

const AllCharacters = ({ characters }) => {


  return (
    <div className='flex justify-center items-center flex-wrap gap-x-10 gap-y-20 pt-10'>
        {characters.map((character) => (
            <Link className='relative z-10 flex justify-center items-center hover:scale-105 duration-300 group' href={`/characters/${character.id}`} key={character.id}>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1715360323/MANDALORIAN_xv6hxr.webp" alt="" className='w-[25rem] object-cover brightness-75 group-hover:brightness-100 duration-300'/>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1715360969/ai-generated-an-explosion-isolated-on-a-transparent-background-free-png_vlxm1c.webp" alt="" className='absolute top-0 w-[25rem] -z-10 brightness-50'/>
              <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1715360696/RazorCrest-DB_odbqmm.webp" alt="" className='absolute top-0 w-[20rem] -z-10'/>
              <h2 className='text-4xl absolute bottom-2 bg-[#0d0d0d] w-[70%] text-center py-4 font-semibold text-white'>{character.name}</h2>
              <section className='absolute flex justify-center items-center gap-10 -bottom-6'>
                <div className='flex justify-center items-center relative'>
                  <article className='bg-[#0d0d0d] -skew-x-12 p-2 border border-[#ffe81f]'>
                    <span className="icon-[mdi--gender-male-female] text-[#ffe81f] text-2xl"></span>
                  </article>
                  <p className='bg-[#ffe81f] w-[6.5rem] text-center -skew-x-12 uppercase font-medium text-xl'>{character.gender !== 'n/a' ? character.gender : "genderless"}</p>
                </div>
                <div className='flex justify-center items-center relative'>
                  <p className='bg-[#ffe81f] w-[6.5rem] text-center skew-x-12 uppercase font-medium text-xl'>{character.eye_color !== 'n/a' ? character.eye_color : "genderless"}</p>
                  <article className='bg-[#0d0d0d] skew-x-12 p-2 border border-[#ffe81f]'>
                    <span className="icon-[game-icons--angry-eyes] text-[#ffe81f] text-2xl"></span>
                  </article>
                </div>
              </section>
            </Link>
        ))}
    </div>
  )
}

export default AllCharacters