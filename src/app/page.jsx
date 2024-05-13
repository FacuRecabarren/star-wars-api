import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function IndexPage() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-20'>
      <h1 className='text-white font-black text-7xl'>API STAR WARS</h1>
      <Image src="/fondoPrincipal.jpg" layout='fill' objectFit='cover' alt="" className='object-cover absolute -z-10 lg:brightness-[0.1] lg:grayscale'/>
      <div className='flex flex-col items-center lg:flex lg:flex-row justify-center gap-10 lg:items-end'>
        <Link href='/films' className='bg-[#0d0d0d] w-[20rem] lg:w-[30rem] h-[10rem] flex justify-center items-center group'>
          <h2 className='bg-[#ffe81f] text-[#0d0d0d] text-3xl lg:text-4xl py-2 px-4 font-medium w-full mx-10 text-center hover:scale-[1.02] duration-300 hover:bg-opacity-50'>FILM SECTION</h2>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1715280404/Prueba%20t%C3%A9cnica/Mortal_kombat_vs_marvel_heroes_by_the4thsnake-d8j4uye_gsdyme.webp" alt="Darth Vader" className='absolute -bottom-40 -left-10 w-[50rem] -z-10 grayscale group-hover:grayscale-0 duration-500 hidden lg:block'/>
        </Link>
        <Link href='/characters' className='bg-[#0d0d0d] w-[20rem] lg:w-[30rem] h-[10rem] flex justify-center items-center group'>
          <h2 className='bg-[#ffe81f] text-[#0d0d0d] text-3xl lg:text-4xl py-2 px-4 font-medium w-full mx-10 text-center hover:scale-[1.02] duration-300 hover:bg-opacity-50'>CHARACTERS SECTION</h2>
          <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1715360307/The_Mandalorian_mmqumn.webp" alt="Mandalorian" className='absolute -bottom-40 right-0 w-[35rem] -z-10 grayscale group-hover:grayscale-0 duration-500 hidden lg:block'/>
        </Link>
      </div>
    </div>
  )
}

export default IndexPage
