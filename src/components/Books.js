import React from "react";
//import PropTypes from 'prop-types';

const Book = (props) => {
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  let amount = () => {
    if (props.saleInfo.hasOwnProperty("retailPrice")) {
      let amount = formatter.format(props.saleInfo.retailPrice.amount);
      return amount;
    } else {
      let amount = "No Amount Set";
      return amount;
    }
  };

  return (
    <div>
      <h1>{props.volumeInfo.title}</h1>
      <h2> {props.volumeInfo.authors} </h2>
      <img
        src={props.volumeInfo.imageLinks.smallThumbnail}
        alt="book covers"
      ></img>
      <h2>{props.volumeInfo.description}</h2>
      <h2>Amount: {amount()}</h2>
      <a href={props.selfLink}>Click Here to Buy</a>
      <button onClick={() => props.addBook(props.volumeInfo.title, props.id)}>
        Add +
      </button>
    </div>
  );
};

// Book.propTypes = {
//   title: PropTypes.string.isRequired,
//   authors: PropTypes.array.isRequired,
//   price: PropTypes.number.isRequired,
//   description: PropTypes.string,
//   thumbnailimage: PropTypes.string.isRequired,
// };

// Book.defaultProps = {
//   description: "Description Not Available",
// };

export default Book;
