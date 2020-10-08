import React, { useState } from "react";
import BookList from "./components/BookList";
import data from "./models/books.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUsPage from "./components/AboutUsPage";
import LogForm from "./components/LogForm";
import Message from "./components/Message";

const App = (props) => {
  const [books, setBooks] = useState(data);

  function addBook(title, id) {
    const newBookList = books.filter((book) => book.id !== id);
    setBooks(newBookList);
    console.log(newBookList)
    console.log(`The Book ${title} was clicked`);
  }

  return (
    <Router>
      <Route
        exact
        path="/subscribe"
        render={() => (
          <>
            <Header />
            <Message />
          </>
        )}
      />
      <Route
        exact
        path="/"
        render={() => (
          <>
            <Header />
            <BookList books={books} addBook={addBook} />
          </>
        )}
      />
      <Route
        exact
        path="/bookcase"
        render={() => (
          <>
            <Header />
            
          </>
        )}
      />
      <Route
        exact
        path="/AboutUsPage"
        render={() => (
          <>
            <Header />
            <AboutUsPage />
          </>
        )}
      />
      <Route
        exact
        path="/form"
        render={() => (
          <>
            <Header />
            <LogForm />
          </>
        )}
      />
    </Router>
  );
};

export default App;

// const book = books[0];
// let {id, volumeInfo: {title, authors, description}, saleInfo: {listPrice: { amount}}} = book;

// const element = <Fragment>
//     <h1 id={id}>{title} = {formatter.format(amount)}</h1>
// </Fragment>;
