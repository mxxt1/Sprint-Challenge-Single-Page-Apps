import React, { useState, useEffect } from "react";

export default function SearchForm() {
  const [query,setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
  }

  // useEffect((props) => {
  //   console.log(props);
  //   const results = props.name.filter(name =>
  //     name.toLowerCase().includes(query)
  //     );
  //     setSearchResults(results);   
  // },[query]);


  return (
    <section className="search-form">
    <form>
     <input type="text" placeholder="search" value={query} onChange={handleChange}/>
     <button type='submit'>Search</button>
     </form>
     </section>
  );
}