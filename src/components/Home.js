import React from 'react';
//import BookCounter from './BookCounter';
import './home.css';
//import Product from './Product';
import Header from "./Header";



// const products = [
//     {
//      name: "Snow White",
//      price: "4.99",
//      description: "Mirror mirror on the wall..."
//     },
//     {
//       name: "Cinderella",
//       price: "£5.99",
//       description: "Before the clock strikes midnight..."
  
//     },
//     {
//       name: "Peter Pan",
//       price: "£6.99",
//       description: "I do believe in fairies, I do! I do!"
  
//     }
  
//   ]

function Home() {
// const name = 'Beyonce';
// function Greeting(user) {
//     if (user) {
//         return <h1>{name}'s Reading List</h1>
      
//     }
//     return <h1>Just a Reading List</h1>;
// }
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="heading">Welcome to the Book Library</h1>
      <img src="../emojibook.png" className="App-logo" alt="logo" />
        <h2 className='slogan'>
          Where Books Come to Life
        </h2>
        <Header />
      </header>
      {/* <h1 className="greeting"> {Greeting(name)}</h1>
      {products.map(product => (
        <Product
        name={product.name}
        price={product.price}
        description={product.description}
        />
      ))}
      <BookCounter library={{name:"Beyonce",theme:"Modern"}}/> */}
    </div>
  );
}


export default Home;
