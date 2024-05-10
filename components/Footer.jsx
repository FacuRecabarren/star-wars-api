import React from 'react'

const Footer = () => {
  return (
    <div className='h-[10rem] bg-[#0d0d0d] flex justify-center items-center relative'>
        <div className='flex justify-center items-center gap-5 text-4xl text-white'>
            <a href='https://github.com/FacuRecabarren' target='_blank' className="icon-[mdi--github] hover:text-[#ffe81f] duration-300"></a>
            <a href='https://www.linkedin.com/in/facundorecabarren/' target='_blank' className="icon-[mdi--linkedin] hover:text-[#ffe81f] duration-300"></a>
            <a href='https://facureca.vercel.app/' target='_blank' className="icon-[bytesize--portfolio] hover:text-[#ffe81f] duration-300"></a>
        </div>
        <p className='absolute bottom-4 text-gray-600'>© 2024 Facundo Recabarren</p>
    </div>
  )
}

export default Footer