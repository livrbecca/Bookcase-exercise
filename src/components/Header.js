import { Link } from "react-router-dom";
import React from "react";

const Header = (props) => {
  return (
    <>
      <Link to="/" className="home">
        Home
      </Link>
      <br />
      <Link to="/bookcase" className="bookLink">
        Bookcase
      </Link>
      <br />
      <Link to="/yourbooklist" className="booklist">
        Your Book List
      </Link>
      <br />
      <Link to="/aboutUsPage" className="about">
        About Us
      </Link>
      <br />
      <Link to="/form" className="form">
        Form
      </Link>
      <br />
      <Link to="/subscribe" className="subscribe">
        Subscribe
      </Link>
      <br />
      <Link to="/profiles" className="profiles">
        Top Readers
      </Link>
      <br />
    </>
  );
};

export default Header;
