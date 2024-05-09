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
    <div>
      <AllCharacters characters={characters} />
    </div>
  );
};

export default CharactersPage;