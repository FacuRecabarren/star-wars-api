import Link from 'next/link'
import React from 'react'
import "../src/app/globals.css";

const Nav = () => {
  return (
    <div className='flex justify-center items-center fixed w-full top-0 h-28'>
        <div className='italic font-black text-2xl text-center group text-[#ffe81f] w-[20rem] relative py-2'>
          <Link href='/films' className='z-10 hover:opacity-50 duration-300'>FILMS</Link>
          <span className="duration-300 absolute inset-0 border-t border-b border-l -skew-x-12 -z-10 group-hover:border-t-[#ffe81f] group-hover:border-b-[#ffe81f] group-hover:border-l-[#ffe81f] "></span>
        </div>
        <Link href='/'>
          <img src='https://res.cloudinary.com/dreso9ye9/image/upload/v1715270694/Prueba%20t%C3%A9cnica/mSjF3lW_td08wj.webp' alt="" className='w-32'/>
        </Link>
        <div className='italic font-black text-2xl text-center text-[#ffe81f] group w-[20rem] relative py-2' href='/characters'>
          <Link href='/characters' className='z-10 hover:opacity-50 duration-300'>CHARACTERS</Link>
          <span className="duration-300 absolute inset-0 border-t border-b border-r skew-x-12 -z-10 group-hover:border-t-[#ffe81f] group-hover:border-b-[#ffe81f] group-hover:border-r-[#ffe81f]"></span>
        </div>
    </div>
  )
}

export default Nav