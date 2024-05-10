'use client'

import React, { useState, useEffect } from 'react';
import AllCharacters from '../../../components/AllCharacters';

const getAllCharacters = async () => {
  let allCharacters = [];
  let urlApi = 'https://swapi.dev/api/people/';

  while (urlApi) {
    const res = await fetch(urlApi);
    const data = await res.json();
    allCharacters = [...allCharacters, ...data.results];
    urlApi = data.next;
  }

  return allCharacters;
};

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const charactersData = await getAllCharacters();
      setCharacters(charactersData);
    };

    fetchCharacters();
  }, []);

  return (
    <div className='h-full flex flex-col justify-center items-center bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1715273713/Prueba%20t%C3%A9cnica/peter-gargiulo-cGNCepznaV8-unsplash_l83qqz.jpg)] bg-fixed bg-cover pt-40 pb-20 gap-10'>
      <h1 className='uppercase text-4xl text-white font-semibold bg-[#0d0d0d] py-4 px-10'>all the characters of <span className='text-[#ffe81f] italic'>the saga</span></h1>
      <AllCharacters characters={characters} />
    </div>
  );
};

export default CharactersPage;