import React from "react";
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid red;
  padding:2%;
  display:flex;
  flex-direction: column;
  align-items:center;
  margin: 1% 2% 1% 2%;
  width:40%;
  text-align:center;

`;

export default function CharacterCard({character}) {
console.log(character)
  return (
    <Card key={character.id}>
    <img src={character.image} alt={character.name}/>
    <h2>{character.name}</h2>
    <p>ID: {character.id}</p>
    <p>Gender: {character.gender}</p>
    <p>Species: {character.species}</p>
    </Card>
  );
}
