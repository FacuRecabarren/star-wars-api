import React from 'react'

const getCharacterById = async (id) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await res.json();
  return data;
};

const CharacterDetail = async ({params}) => {

  const characterData = await getCharacterById(params.id);

  return (
    <div>
      <h2>{characterData.name}</h2>
    </div>
  )
}

export default CharacterDetail