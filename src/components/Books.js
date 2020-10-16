import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import './books.css';


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
      <Card>
        <img
        className="cimg"
          variant="top"
          src={
            props.volumeInfo.imageLinks.smallThumbnail ||
            props.volumeInfo.imageLinks.thumbnail
          }
          alt="book covers"
        />
        <Card.Body>
          <Card.Title>{props.volumeInfo.title}</Card.Title>
          <Card.Text>
            {props.volumeInfo.authors},{props.volumeInfo.description}
          </Card.Text>
          <Card.Subtitle>Amount: {amount()}</Card.Subtitle>
          {props.addBook && (
          <Button
            onClick={() => props.addBook(props.volumeInfo.title, props.id)}
          >
            Add +
          </Button>
          )}
          {props.removeBook && (
          <Button
            onClick={() => props.removeBook(props.id)}
          >
            Remove
          </Button>
          )}
        </Card.Body>
      </Card>
  );
}

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
