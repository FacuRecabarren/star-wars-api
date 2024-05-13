import dynamic from 'next/dynamic';
import React from 'react'
const AllFilms = dynamic(() => import('../components/CardFilms'));

const FilmsPage = () => {

  return (
    <div className='h-full flex flex-col justify-center items-center bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1715273713/Prueba%20t%C3%A9cnica/peter-gargiulo-cGNCepznaV8-unsplash_l83qqz.jpg)] bg-fixed bg-cover pt-32 pb-20 gap-10'>
        <h1 className='uppercase text-2xl lg:text-4xl text-white font-semibold bg-[#0d0d0d] py-4 px-10'>all the films of <span className='text-[#ffe81f] italic'>the saga</span></h1>
        <AllFilms/>
    </div>
  )
}

export default FilmsPage