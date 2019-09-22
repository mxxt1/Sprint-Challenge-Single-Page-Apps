import React, { useState } from "react";

export default function SearchForm(props) {
  // console.log(props);
  const {charList, setCharList, query, setQuery} = props;
  // console.log(charList);
 
const changeHandler = (e) => {
  console.log(`inside change handler`);
  setQuery(e.target.value)


}


  return (
    <section className="search-form">
      <form>
          <input
          type='text'
          placeholder='Search For A Character'
          value={query}
          onChange={changeHandler} 
              
          />
          <button>Submit</button>
      
      
      </form>
    </section>
  );
}
