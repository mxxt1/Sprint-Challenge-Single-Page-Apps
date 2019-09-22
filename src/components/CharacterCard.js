import React from 'react';
import styled from 'styled-components'


const Card = styled.div`
  display: flex; 
  flex-direction: column;
  width: 30%;
  border: 1px solid black;
  padding:2%;
  margin: 2%;
`;

export default function CharacterCard(props) {
  
  const {key, image, name, origin} = props;
  
  return (
    <Card key={key}>
      <h1>{name}</h1>
      <img src={image} alt={`${name}`} />
      <h3>{origin}</h3>
    </Card>
  )
}
