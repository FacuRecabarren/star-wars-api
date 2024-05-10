import React from 'react'

const getCharacterById = async (id) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await res.json();
  return data;
};

const CharacterDetail = async ({params}) => {

  const characterData = await getCharacterById(params.id);

  const renderProperty = (label, value, icon) => {
    if (!value || value === 'n/a' || value === "none") return null;
    return (
      <article className='flex justify-center items-center gap-2'>
        <div className='bg-[#ffe81f] flex justify-center items-center p-2'>
          {icon}
        </div>
        <p className='uppercase text-2xl font-light text-white flex justify-center items-center gap-2'>{`${label}`} <span className='text-[#ffe81f] font-semibold italic text-2xl'>{`${value}`}</span></p>
      </article>
    );
  };

  return (
    <div className='h-screen flex flex-col justify-center items-center bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1715273713/Prueba%20t%C3%A9cnica/peter-gargiulo-cGNCepznaV8-unsplash_l83qqz.jpg)] bg-fixed bg-cover pt-20'>
      <article className='flex justify-center items-start gap-10 '>
        <section className='relative z-10'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1715280404/Prueba%20t%C3%A9cnica/Mortal_kombat_vs_marvel_heroes_by_the4thsnake-d8j4uye_gsdyme.webp" alt="" className='w-[30rem]'/>
            <div className='w-[20rem] h-[5rem] bg-[#0d0d0d] border-t-4 border-[#ffe81f] absolute top-10 -z-10  skew-y-12'></div>
            <div className='w-[20rem] h-[5rem] bg-[#0d0d0d] border-t-4 border-[#ffe81f] absolute bottom-0 right-10 -z-10  skew-y-12'></div>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1715305253/The_Ghost_USW_NE_gstpva.webp" alt="" className='absolute top-10 -left-10 -z-10 w-[25rem]'/>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1715304875/pngimg.com_-_starwars_PNG36_fayyue.png" alt="" className='absolute right-20 bottom-0 w-[12rem]'/>
        </section>
        <section className='w-[40rem] flex flex-col gap-5 bg-[#0d0d0d] p-10 '>
          <h2 className='text-white font-bold text-7xl text-center uppercase'>{characterData.name}</h2>
          <div className='flex flex-col justify-center items-start gap-5'>
            {renderProperty('Height (cm)', characterData.height, <span className="icon-[game-icons--body-height] text-[#0d0d0d] text-2xl"></span>)}
            {renderProperty('Mass (kg)', characterData.mass, <span className="icon-[game-icons--weight] text-[#0d0d0d] text-2xl"></span>)}
            {renderProperty('Hair Color', characterData.hair_color, <span className="icon-[game-icons--beard] text-[#0d0d0d] text-2xl"></span>)}
            {renderProperty('Skin Color', characterData.skin_color, <span className="icon-[ion--body] text-[#0d0d0d] text-2xl"></span>)}
            {renderProperty('Eye Color', characterData.eye_color, <span className="icon-[game-icons--angry-eyes] text-[#0d0d0d] text-2xl"></span>)}
            {renderProperty('Birth Year', characterData.birth_year, <span className="icon-[icon-park-outline--birthday-cake] text-[#0d0d0d] text-2xl"></span>)}
          </div>
        </section>
      </article>
    </div>
  )
}

export default CharacterDetail