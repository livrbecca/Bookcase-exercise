import { Link } from "react-router-dom";
import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="navbar">
      <Link to="/" className="navlink">
        Home
      </Link>
      <br />
      <Link to="/bookcase" className="navlink">
        Bookcase
      </Link>
      <br />
      <Link to="/yourbooklist" className="navlink">
        Your Book List
      </Link>
      <br />
      <Link to="/aboutUsPage" className="navlink">
        About Us
      </Link>
      <br />
      <Link to="/form" className="navlink">
        Form
      </Link>
      <br />
      <Link to="/subscribe" className="navlink">
        Subscribe
      </Link>
      <br />
      <Link to="/profiles" className="navlink">
        Top Readers
      </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
