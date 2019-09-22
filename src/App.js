import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />
      

      
    </main>
  );
}
