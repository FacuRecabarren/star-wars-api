import Link from 'next/link'
import React from 'react'
import "../src/app/globals.css";

const Nav = () => {
  return (
    <div className='flex justify-center items-center fixed w-full top-0 h-20'>
        <Link className='italic font-black text-2xl text-center text-[#ffe81f] w-[20rem] relative py-2' href='/films'>
          FILM
          <span className="absolute inset-0 border-t border-b border-l -skew-x-12"></span>
        </Link>
        <Link href='/'>
          <img src='https://res.cloudinary.com/dreso9ye9/image/upload/v1715270694/Prueba%20t%C3%A9cnica/mSjF3lW_td08wj.webp' alt="" className='w-32'/>
        </Link>
        <Link className='italic font-black text-2xl text-center text-[#ffe81f] w-[20rem] relative py-2' href='/characters'>
          PEOPLE
          <span className="absolute inset-0 border-t border-b border-r skew-x-12"></span>
        </Link>
    </div>
  )
}

export default Nav