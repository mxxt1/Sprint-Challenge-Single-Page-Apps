import React from "react";
import styled from 'styled-components';

export default function CharacterCard({character}) {
console.log(character)
  return (
    <div key={character.id}>
    <img src={character.image} alt={character.name}/>
    <h2>Name: {character.name}</h2>
    <p>ID: {character.id}</p>
    <p>Gender: {character.gender}</p>
    <p>Species: {character.species}</p>
    </div>
  );
}
