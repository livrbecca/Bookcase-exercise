import React from "react";
//import CardDeck from 'react-bootstrap/CardDeck'
//import CardGroup from 'react-bootstrap/CardGroup'
import Book from "./Books";
//import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row'


const BookList = (props) => {
  return (
    <Row>
      {props.books.map((book) => {
        let { id, volumeInfo, saleInfo } = book;
        return (
          <Book
            id={id}
            key={book.id}
            book={book}
            addBook={props.addBook}
            volumeInfo={volumeInfo}
            saleInfo={saleInfo}
            removeBook={props.removeBook}
          />
        );
      })}
    </Row>
  );
};

export default BookList;
