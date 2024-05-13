'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { extractCharacterId, getCharacterName, getFilmById } from '../../../../utils/data';
import Image from 'next/image';


const FilmDetail = ({params}) => {

  const [film, setFilm] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const filmData = await getFilmById(params.id);
        setFilm(filmData);

        const characterNames = await Promise.all(
          filmData.characters.map(async (characterUrl) => {
            const characterId = extractCharacterId(characterUrl);
            const characterData = await getCharacterName(characterUrl);
            return { id: characterId, name: characterData };
          })
        );
        setCharacters(characterNames);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching film data:', error);
      }
    };

    fetchFilmData();
  }, [params.id]);


    if (characters.length <= 0) {
        return(
            <div className='flex justify-center items-center h-screen'>
                <Image src="/fondoNegro.jpg" alt="" layout='fill' objectFit='cover' className='w-full h-full object-cover -z-10'/>;
                <Image src="/loader.png" width={400} height={400} objectFit='cover' alt="" className='animate-pulse'/>
            </div>
        )
    }else{
        return (
            <div className='h-full flex flex-col justify-center items-center bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1715273713/Prueba%20t%C3%A9cnica/peter-gargiulo-cGNCepznaV8-unsplash_l83qqz.jpg)] bg-fixed bg-cover pb-10'>
                <section className='flex justify-center items-start gap-20 pt-[12rem] h-full'>
                    <picture className='w-[30rem] h-[30rem] bg-gradient-to-b from-[#0d0d0d] to-[#0d0d0d6a] backdrop-blur-sm lg:flex justify-center items-center z-10 hidden'>
                        <Image src="/filmCard.jpg" layout="fill" objectFit="cover" alt="" className='object-cover'/>
                        <div className='w-[20rem] h-[3rem] bg-[#ffe81f] absolute -bottom-5 -left-10 -z-10 animate-pulse'></div>
                        <div className='w-[20rem] h-[3rem] bg-[#ffe81f] absolute -top-5 -right-10 -z-10 animate-pulse'></div>
                    </picture>
                    <div className='flex flex-col justify-start items-center gap-5 w-full lg:w-[40rem]'>
                        <h2 className='text-white font-bold text-4xl lg:text-7xl text-center uppercase'>{film.title}</h2>
                        <div className='flex flex-col lg:flex lg:flex-row justify-between items-center w-full gap-2'>
                            <article className='bg-[#0D0D0D] flex justify-center items-center py-4 w-[20rem] lg:w-1/2'>
                                <h3 className='text-white text-2xl flex justify-center items-center gap-4'>Director <span className='-skew-x-12 bg-[#ffe81f] px-4 text-[#0D0D0D] font-semibold uppercase'>{film.director}</span></h3>
                            </article>
                            <article className='bg-[#0D0D0D] flex justify-center items-center py-4 w-[20rem] lg:w-1/2'>
                                <h3 className='text-white text-2xl flex justify-center items-center gap-4'>Episode <span className='-skew-x-12 bg-[#ffe81f] px-4 text-[#0D0D0D] font-semibold uppercase'>Number {film.episode_id}</span></h3>
                            </article>
                        </div>
                        <div className='flex flex-col justify-center items-center w-full gap-5'>
                            <article className='bg-[#0D0D0D] flex justify-center items-center py-4 w-[20rem] lg:w-full'>
                                <h3 className='text-white text-2xl flex justify-center items-center gap-4'><span className='bg-[#ffe81f] -skew-x-12 px-4 text-[#0D0D0D] font-semibold uppercase'>CHARACTERS</span></h3>
                            </article>
                            <article className='flex flex-wrap lg:justify-between justify-center items-center gap-2'>
                                {characters.map((character) => (
                                    <Link href={`/characters/${character.id}`} key={character.id} className='flex flex-col justify-center items-center w-[8rem] h-[8rem] gap-4 bg-[#0D0D0D]'>
                                        <picture className='bg-[#ffe81f] p-2'>
                                            <Image src="/loader.png" alt="" width={30} height={30} className='object-cover'/>
                                        </picture>
                                        <p className='text-white'>{character.name}</p>
                                    </Link>
                                ))}
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

};

export default FilmDetail;