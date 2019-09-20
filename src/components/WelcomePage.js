import React from "react";
import styled from 'styled-components';


const StyledHeader = styled.header`
    display:flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  max-width:80%;

`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <StyledHeader>
        <h1>Welcome to the ultimate fan site!</h1>
        <StyledImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </StyledHeader>
    </section>
  );
}
