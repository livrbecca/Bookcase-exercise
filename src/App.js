import React, { useState } from "react";
import Book from "./components/Books";
import data from "./models/books.json";

const App = (props) => {
  const [books] = useState(data);
  return (
    <div>
      {books.map((book) => { 
        let {selfLink, volumeInfo, saleInfo } = book;
        return (
        <Book volumeInfo={volumeInfo} selfLink={selfLink} saleInfo={saleInfo}/>
      )})}
    </div>
  );
};

export default App;


// const book = books[0]; 
// let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: { amount}}} = book;

// const element = <Fragment>
//     <h1 id={id}>{title} = {formatter.format(amount)}</h1>
// </Fragment>;