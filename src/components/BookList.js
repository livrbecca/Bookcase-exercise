import React from "react";
import Book from "./Books";
import Row from "react-bootstrap/Row";


const BookList = (props) => {

  return (
    <>
     {props.count > 0 && <h3>You have added {props.count} books to your Personal Booklist</h3>}
      <Row>
        {props.books.map((book) => {
          let { id, volumeInfo, saleInfo } = book;
          return (
            <div>
            <Book
              id={id}
              key={book.id}
              book={book}
              addBook={props.addBook}
              volumeInfo={volumeInfo}
              saleInfo={saleInfo}
              removeBook={props.removeBook}
            />
            </div>
          );
        })}
      </Row>
    </>
  );
};


export default BookList;
