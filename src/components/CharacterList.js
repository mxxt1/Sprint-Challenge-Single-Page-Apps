import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from './SearchForm'
import styled from 'styled-components';

const CardContainer = styled.section`
  
  width: 80%
  margin: auto;
  display: flex; 
  flex-wrap:wrap;

`;


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response =>{
      console.log(response.data.results);
      const results = response.data.results;
      setCharList(results);
    })
  }, []);

  

  return (
    <CardContainer className="character-list">
          <SearchForm 
            charList={charList}
            setCharList={setCharList}
            query={query}
            setQuery={setQuery}      
            />
          {charList.map(character => {
            return(
              <CharacterCard 
                  key={character.id}
                  id={character.id}
                  image = {character.image}
                  name={character.name}
                  origin={character.origin.name}
                  species = {character.species}
                  status = {character.status}
                   />
          
            );
          })
         };
    </CardContainer>
  )
 }


// 0:
// created: "2017-11-04T18:48:46.250Z"
// episode: (31) 
// gender: "Male"
// id: 1
// image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
// location: {name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20"}
// name: "Rick Sanchez"
// origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"}
// species: "Human"
// status: "Alive"
// type: ""
// url: "https://rickandmortyapi.com/api/character/1