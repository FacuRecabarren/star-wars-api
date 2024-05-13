export const getAllFilms = async () => {
    const res = await fetch('https://swapi.dev/api/films', { cache: 'force-cache'});
    const data = await res.json();
    return data.results;
};

export const getFilmById = async (id) => {
    const res = await fetch(`https://swapi.dev/api/films/${id}`, { cache: 'force-cache'});
    const data = await res.json();
    return data;
};

export const getCharacterName = async (characterUrl) => {
    const res = await fetch(characterUrl, { cache: 'force-cache'});
    const data = await res.json();
    return data.name;
};

export const extractCharacterId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
};

export const getCharacterById = async (id) => {
    const res = await fetch(`https://swapi.dev/api/people/${id}`, { cache: 'force-cache'});
    const data = await res.json();
    return data;
  };

export const getAllCharacters = async () => {
    let allCharacters = [];
    let nextPage = 'https://swapi.dev/api/people/';
    
    while (nextPage) {
      const res = await fetch(nextPage, { cache: 'force-cache'});
      const data = await res.json();
      allCharacters = [...allCharacters, ...data.results];
      nextPage = data.next;
    }
  
    return allCharacters;
  };