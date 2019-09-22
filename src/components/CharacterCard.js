import React from 'react';
import styled from 'styled-components'


const Card = styled.div`
  display: flex; 
  flex-direction: column;
  width: 30%;
  border: 1px solid black;
  padding:2%;
  margin: 2%;
  align-items: center;
`;

const StyledImg = styled.img`
  max-width: 90%;


`;

export default function CharacterCard(props) {
  
  const {key, image, name, origin} = props;
  
  return (
    <Card key={key}>
      <StyledImg src={image} alt={`${name}`} />
      <h1>{name}</h1>
      <h3>{origin}</h3>
    </Card>
  )
}
