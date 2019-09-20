import React from "react";
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid gray;
  padding:2%;
  display:flex;
  flex-direction: column;
  align-items:center;
  margin: 1% 2% 1% 2%;
  width:40%;
  text-align:center;

`;

export default function CharacterCard(props) {
console.log(props)
  return (
    <Card >
    <img src={props.image} alt={props.name}/>
    <h2>{props.name}</h2>
    <p>ID: {props.id}</p>
    <p>Gender: {props.gender}</p>
    <p>Species: {props.species}</p>
    </Card>
  );
}
