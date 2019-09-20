import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <header className="ui centered">
    <nav>
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>     
        <Link to="/">Home</Link>
        <Link to="/characters">Character List</Link>
      </nav>
    </header>
  );
}
