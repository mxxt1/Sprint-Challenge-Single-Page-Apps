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

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response =>{
      // const data = response.data.results;
      let newArr = [];
      const data = response.data.results;
      console.log(data);
      console.log(data[0].name);

      for (let i=0;i<data.length;i++){
        if (data[i].name.toLowerCase().includes(query.toLowerCase())){
          newArr.push(data[i]);
        }
      }
      console.log(newArr);
      setCharList(newArr);

      // const queryData = data.filter(character => {
      //   character.name.includes('Rick');
      // });
      // console.log(queryData);

      
    })
    .catch(error => {console.log('error', error)});
   }, [query]);

    return (
      <CardContainer className="character-list">
            <SearchForm 
              query={query}
              setQuery={setQuery}
              charList={charList}
              setCharList={setCharList}      
              />
            {charList.map(character => {
              return(
                <CharacterCard 
                    key={character.id}
                    // id={character.id}
                    image = {character.image}
                    name={character.name}
                    origin={character.origin.name}
                    // species = {character.species}
                    // status = {character.status}
                     />
              );
            })
           };
      </CardContainer>
    ); 


  
}//end




// useEffect(() => {
//   // TODO: Add API Request here - must run in `useEffect`
//   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

//     const getCharacters = () => {
//       axios.get('https://rickandmortyapi.com/api/character')
//       .then(response => {
//         // console.log(response)
//         setCharList(response.data.results)
//       })
//       .catch(error =>{
//         console.log('Result Error: ',error)
//       })
//     }
//     getCharacters();
// }, []);












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