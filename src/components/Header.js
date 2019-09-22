import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display:flex; 
  width: 100%;
  border-bottom: 2px solid black;

`;

const  StyledH1 = styled.h1`
  display: flex; 
  width: 50%; 
`;

const LinkContainer = styled.div`
  display:flex; 
  width: 50%; 
  align-items: center; 
  justify-content: center;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

`;


export default function Header() {
  return (
    <StyledHeader className="ui centered">
      <StyledH1 className="ui center">Rick &amp; Morty Fan Page</StyledH1>
      <LinkContainer>
        <StyledLink to='/' >Home</StyledLink>
        <StyledLink to='/characters'>Characters</StyledLink>
      </LinkContainer>
    </StyledHeader>
  );
}
