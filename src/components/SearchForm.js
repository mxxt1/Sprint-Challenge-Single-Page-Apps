import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const [query,setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  // useEffect(() =>{
  //   const results = props.charList.filter(item =>

  //     );
      
  // }, [query]);

  console.log(props.charList);

 


  return (
    <section className="search-form">
    <form>
     <input 
     type="text" 
     placeholder="Character Name" 
     value={query} 
     onChange={handleChange}/>
     <button type='submit'>Character Search</button>
     </form>
        <div>
          <ul>
            {searchResults.map(character =>(
              <li>{character}</li>
            ))}          
          </ul>
        </div>
     <div>

     
     
     </div>
     </section>
  );
}