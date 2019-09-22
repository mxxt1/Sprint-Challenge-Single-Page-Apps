import React, { useState } from "react";

export default function SearchForm() {
 
  return (
    <section className="search-form">
      <form>
          <input
          type='text'
          placeholder='Search For A Character' 
              
          />
          <button>Submit</button>
      
      
      </form>
    </section>
  );
}
