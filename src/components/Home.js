import React from "react";
//import BookCounter from './BookCounter';
import "./home.css";
//import Product from './Product';
import Header from "./Header";
//import BookList from "./BookList";
import { Link } from "react-router-dom";




//function that displays personalised name
function Home(props) {
  const name = "Olivia";
  function Greeting(user) {
    if (user) {
      return <h1>{name}'s Suggested Reading List</h1>;
    }
    return <h1>A Suggested Reading List</h1>;
  }

  //suggested reading

  function lifestylebooks() {
   props.findLifeBooks();
  }

  function SearchHorror()  {
    props.findHorror();
  
    };



  function sociologicalbooks() {
    props.findSocBooks();
  }

  function suggestedR() {
    return (
      <>
        <div className="lifestyle">
          <h3>Click for...</h3>
          <img src="lux2.jpg" className="lux" alt="luxury" />
          <Link to="/bookcase">
          <button className="luxbtn" onClick={lifestylebooks}>
            Lifestyle Books
          </button>
          </Link>
        </div>
        <div className="getOut">
          <h3>Click for...</h3>
          <img src="horror.jpg" className="horror" alt="horror" />
          <Link to="/bookcase">
          <button className="horrorbtn" onClick={SearchHorror}>
            Horror Books
          </button>
          </Link>
        </div>
        <div className="society">
          <h3>Click for...</h3>
          <img src="blm.jpg" className="blm" alt="blm" />
          <Link onClick={sociologicalbooks} to="/bookcase" className="blmbtn">
          <button className="blmbtn" >
            Sociologial Books
          </button>
          </Link>
        </div>
      </>
    );
  }

  // what is returned on Home page and in order
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Welcome to the Book Library</h1>
        <img src="../emojibook.png" className="App-logo" alt="logo" />
        <h2 className="slogan">Where Books Come to Life</h2>
        <Header />
      </header>
      <h1 className="greeting"> {Greeting(name)}</h1>
      <div className="sr">{suggestedR()}</div>

      {/* {products.map(product => (
        // <Product
        // name={product.name}
        // price={product.price}
        // description={product.description}
        // />
      ))} */}
      {/* <BookCounter library={{name:"Beyonce",theme:"Modern"}}/> */}
    </div>
  );
}

export default Home;
