import React from "react";

export default function SearchForm(props) {
  // console.log(props);
  const {query, setQuery} = props;
  // console.log(charList);
 
const changeHandler = (e) => {
  console.log(`inside change handler`);
  setQuery(e.target.value);
};

// const querySubmit = (e) =>{
//   e.preventDefault();
//   ;
// };

// const onSubmit



  return (
    <section className="search-form">
      <form>
          <input
          type='text'
          placeholder='Search For A Character'
          value={query}
          onChange={changeHandler}   
          />
      </form>
    </section>
  );
}
