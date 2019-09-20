import React, { useEffect, useState } from "react";
import {Route} from 'react-router-dom';
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from 'styled-components';

const ListContainer = styled.section`
  border: 1px solid black;
  display:flex;
  flex-wrap:wrap;
  padding:5%;
  margin: 0 auto;
  justify-content: center;
`;

const SearchSection = styled.section`
  display:flex;
  justify-content: center;
  padding: 3%;

`;



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([]);

  // const searchCharacters = character =>{
  //   charList.filter


  // }



  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      const getCharacters = () => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
          // console.log(response)
          setCharList(response.data.results)
        })
        .catch(error =>{
          console.log('Result Error: ',error)
        })
      }
      getCharacters();
  }, []);
  // console.log(charList);


  return (
    <section>
    <SearchSection>
    <SearchForm  />
    </SearchSection>
    <ListContainer>
      {charList.map((character) => {
        return(
          <CharacterCard 
          key={character.id} 
          name={character.name}
          image={character.image}
          species ={character.species}
          gender = {character.gender}
          id = {character.id}
          />
        )
      }
      )}
    </ListContainer>
    </section>
  );
}