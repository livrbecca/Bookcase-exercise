import React, { useState } from "react";
import BookList from "./components/BookList";
import data from "./models/books.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUsPage from "./components/AboutUsPage";
import LogForm from "./components/LogForm";
import Message from "./components/Message";
import Profiles from "./components/Profiles";
import Search from "./components/Search";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';






const App = (props) => {
  const [books, setBooks] = useState(data);
  const [bookcase, setBookcase] = useState([]);

  function removeBook(id) {
    const newBookcaseList = bookcase.filter(book => book.id !== id);
    setBookcase(newBookcaseList);
  }

  async function findBooks(value) {
    const results = await
   fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
   pe=books&projection=lite`).then(res => res.json());
    if (!results.error) {
    setBooks(results.items);
    }
   }

  function addBook(title, id) {
    const newBookList = books.filter((book) => book.id !== id);
    const chosenBook = books.filter((book) => book.id === id);
    setBooks(newBookList);
    setBookcase([...bookcase, ...chosenBook])
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
            <Home />
          </>
        )}
      />
      <Route
        exact
        path="/bookcase"
        render={() => (
          <>
            <Header />
            <Search findBooks={findBooks} />
            <BookList books={books} addBook={addBook}/>
          </>
        )}
      />
      <Route
        exact
        path="/yourbooklist"
        render={() => (
          <>
            <Header />
            <Search findBooks={findBooks} />
            <BookList books={bookcase} removeBook={removeBook} />
          </>
        )}
      />
      <Route
        exact
        path="/profiles"
        render={() => (
          <>
            <Header />
            <Profiles />
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
       <Route
        exact
        path="/search"
        render={() => (
          <>
            <Header />
            <Search findBooks={findBooks} />
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
