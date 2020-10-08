import React from "react";
import Book from "./Books";

const BookList = (props) => {
  return (
    <div>
      {props.books.map((book) => {
        let { id, selfLink, volumeInfo, saleInfo } = book;
        return (
          <Book
            id={id}
            key={book.id}
            book={book}
            addBook={props.addBook}
            volumeInfo={volumeInfo}
            selfLink={selfLink}
            saleInfo={saleInfo}
          />
        );
      })}
    </div>
  );
};

export default BookList;
