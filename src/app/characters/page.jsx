'use client'
import React, { useState, useEffect } from 'react';
import { getAllCharacters } from '../../../utils/data';
import dynamic from 'next/dynamic';
const CardCharacters = dynamic(() => import('../components/CardCharacters'));


const CharactersPage = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [eyeColorFilter, setEyeColorFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  useEffect(() => {
      const fetchData = async () => {
        const charactersData = await getAllCharacters();
        const charactersWithId = charactersData.map((character, index) => ({
          ...character,
          id: index + 1
        }));
        setAllCharacters(charactersWithId);
      };
      fetchData();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...allCharacters];
      if (eyeColorFilter) {
        filtered = filtered.filter(character => character.eye_color.toLowerCase() === eyeColorFilter.toLowerCase());
      }
      if (genderFilter) {
        filtered = filtered.filter(character => character.gender.toLowerCase() === genderFilter.toLowerCase());
      }
      setFilteredCharacters(filtered);
      setPage(1);
    };
    applyFilters();
  }, [eyeColorFilter, genderFilter, allCharacters]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const charactersPerPage = 10;
  const totalCharacters = filteredCharacters.length;
  const totalPages = Math.ceil(totalCharacters / charactersPerPage);
  const startIndex = (page - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  const charactersToShow = filteredCharacters.slice(startIndex, endIndex);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='h-full flex flex-col justify-center items-center bg-[url(/fondoNegro.jpg)] bg-fixed bg-cover pt-32 pb-20 gap-10'>
      <h1 className='uppercase text-2xl lg:text-4xl text-white font-semibold bg-[#0d0d0d] py-4 px-10'>all the characters of <span className='text-[#ffe81f] italic'>the saga</span></h1>
      <section className='flex flex-col lg:flex lg:flex-row justify-center items-center gap-5'>
        <div className='flex justify-center items-center gap-4 bg-[#0d0d0d] py-4 w-[14rem]'>
          <label className='uppercase font-semibold text-[#ffe81f] text-xl'>Eye Color</label>
          <select className='outline-none text-gray-700 font-medium' name="eye_color" id="eye_color" onChange={(e) => setEyeColorFilter(e.target.value)}>
            <option value="">All</option>
            {[...new Set(allCharacters.map(character => character.eye_color))].map((eyeColor, index) => (
              <option key={index} value={eyeColor}>{eyeColor}</option>
            ))}
          </select>
        </div>
        <div className='flex justify-center items-center gap-4 bg-[#0d0d0d] py-4 w-[14rem]'>
          <label className='uppercase font-semibold text-[#ffe81f] text-xl'>Gender</label>
          <select className='outline-none text-gray-700 font-medium' name='gender' id='gender' onChange={(e) => setGenderFilter(e.target.value)}>
            <option value="">All</option>
            {[...new Set(allCharacters.map(character => character.gender))].map((gender, index) => (
              <option key={index} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
      </section>
      <CardCharacters characters={charactersToShow} />
      <section className='flex flex-wrap justify-center items-center gap-5 pt-20'>
        <button className='bg-[#0d0d0d] p-4 flex justify-center items-center -skew-x-12 hover:bg-[#ffe81f] hover:text-black duration-300 cursor-pointer text-white mr-5' onClick={() => handlePageChange(page - 1)} disabled={page === 1}><span className="icon-[ooui--previous-ltr]"></span></button>
          {pageNumbers.map((pageNumber, index) => (
            <button
              key={index}
              className={`bg-[#0d0d0d] font-semibold py-3 px-4 flex justify-center items-center hover:bg-[#ffe81f] hover:text-black duration-300 cursor-pointer ${
                page === pageNumber ? 'text-black bg-[#ffe81f] hover:text-black' : 'text-white'
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        <button className='bg-[#0d0d0d] p-4 flex justify-center items-center skew-x-12 hover:bg-[#ffe81f] hover:text-black duration-300 cursor-pointer text-white ml-5' onClick={() => handlePageChange(page + 1)} disabled={endIndex >= filteredCharacters.length}><span className="icon-[ooui--next-ltr]"></span></button>
      </section>
    </div>
  );
};

export default CharactersPage;