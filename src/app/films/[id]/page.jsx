'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const getFilmById = async (id) => {
    const res = await fetch(`https://swapi.dev/api/films/${id}`);
    const data = await res.json();
    return data;
};

const getCharacterName = async (characterUrl) => {
    const res = await fetch(characterUrl);
    const data = await res.json();
    return data;
};

const extractCharacterId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
};

const FilmDetail = ({ params }) => {
    const [film, setFilm] = useState(null);
    const [characters, setCharacters] = useState([]);

   

    useEffect(() => {
        const fetchFilmData = async () => {
            const filmData = await getFilmById(params.id);
            setFilm(filmData);
    
            const characterNames = await Promise.all(
                filmData.characters.map(async (characterUrl) => {
                    const characterId = extractCharacterId(characterUrl);
                    const characterData = await getCharacterName(characterUrl);
                    return { id: characterId, name: characterData.name };
                })
            );
            setCharacters(characterNames);
        };
    
        fetchFilmData();
    }, [params.id]);


    if (!film) {
        return <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1715273713/Prueba%20t%C3%A9cnica/peter-gargiulo-cGNCepznaV8-unsplash_l83qqz.jpg" alt="" className='absolute h-full w-full object-cover -z-10'/>;
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1715273713/Prueba%20t%C3%A9cnica/peter-gargiulo-cGNCepznaV8-unsplash_l83qqz.jpg" alt="" className='absolute h-full w-full object-cover -z-10'/>
            <section className='flex'>
                <picture>
                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1715275670/Prueba%20t%C3%A9cnica/857790_g2fa8p.webp" alt="" className='w-[25rem] h-[25rem] object-cover'/>
                </picture>
                <div>
                    <h2>{film.title}</h2>
                    <h3>Director {film.director}</h3>
                    <p>Episodio número {film.episode_id}</p>
                </div>
            </section>
           
            
            <ul className='flex'>
                {characters.map((character) => (
                    <div className='flex flex-col'>
                        <Link href={`/characters/${character.id}`} key={character.id}>{character.name}</Link>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default FilmDetail;