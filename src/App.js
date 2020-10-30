import React, { useState } from "react";
import BookList from "./components/BookList";
import YourBooklist from "./components/YourBooklist";
import data from "./models/books.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUsPage from "./components/AboutUsPage";
import LogForm from "./components/LogForm";
import Message from "./components/Message";
import Profiles from "./components/Profiles";
import Search from "./components/Search";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
//import Pagination from "./components/Pagination.js";
import Pagination from "react-js-pagination";
import "./components/pagination.css";

const App = (props) => {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");

  const [bookcase, setBookcase] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  function removeBook(id) {
    const newBookcaseList = bookcase.filter((book) => book.id !== id);
    setBookcase(newBookcaseList);
  }

  async function findBooks(value) {
    const results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
   pe=books&projection=lite`).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  async function findHorror(value) {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=horror`
    ).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  async function findLifeBooks(value) {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=lifestyle`
    ).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  async function findSocBooks(value) {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=sociology`
    ).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  // .get("https://www.googleapis.com/books/v1/volumes?q=horror") https://www.googleapis.com/books/v1/volumes?q=lifestyle
  // keeping the add button still: text-decoration: none , display: inline-block

  function addBook(title, id) {
    const newBookList = books.filter((book) => book.id !== id);
    const chosenBook = books.filter((book) => book.id === id);
    setBooks(newBookList);
    setBookcase([...bookcase, ...chosenBook]);
    console.log(newBookList);
    console.log(`The Book ${title} was clicked`);
    return <div></div>;
  }

  //get current posts
  const indexofLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexofLastPost - postsPerPage;
  const currentBooks = books.slice(indexofFirstPost, indexofLastPost);

  //change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          <React.Fragment>
            <Home findHorror={findHorror} findLifeBooks={findLifeBooks} findSocBooks={findSocBooks} />
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/bookcase"
        render={() => (
          <React.Fragment>
            <Header
              findBooks={findBooks}
              keyword={keyword}
              setKeyword={setKeyword}
            />
            <Search findBooks={findBooks} />
            <BookList
              books={currentBooks}
              addBook={addBook}
              count={bookcase.length}
            />
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={6}
              totalItemsCount={books.length}
              pageRangeDisplayed={5}
              onChange={paginate}
            />
            {/* <Pagination postsPerPage={postsPerPage} totalPosts={books.length} paginate={paginate} /> */}
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/yourbooklist"
        render={() => (
          <>
            <Header />
            <YourBooklist />
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
        path="/aboutUsPage"
        render={() => (
          <>
            <Header
              findBooks={findBooks}
              keyword={keyword}
              setKeyword={setKeyword}
            />
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
