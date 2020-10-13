import React, { useState } from "react";



const Search = (props) => {
const [keyword, setKeyword] = useState('');


const handleSubmit = (event) =>{
    event.preventDefault();
    props.findBooks(keyword);
    };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Search For Books  
          <input type="text"  value={keyword} onChange={(e) => setKeyword(e.target.value)} />
          <input type="submit" value="Submit" />
          <h2>{keyword && 'Searching for keyword:' + keyword}</h2>
        </label>
      </form>
    </>
  );
  
}




export default Search;
