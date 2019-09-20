import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display:flex;
  justify-content: space-evenly;
  border:2px solid black;
`;

const StyledTitle = styled.div`
  width:50%;
`;

const LinkContainer = styled.div`
  width:50%;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function Header() {
  return (
    <header className="ui centered">
    <StyledNav>
      <StyledTitle>
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>     
       </StyledTitle>
        <LinkContainer> 
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/characters">Characters</StyledLink>
        </LinkContainer>
      </StyledNav>
    </header>
  );
}
