import {Link} from "react-router-dom";
import React from "react";


const Header = (props) => {
    return (
        <>
        <h1>Books For Your Mind</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/bookcase" className="bookLink">Bookcase</Link>
        <br/>
        <Link to="/AboutUsPage" className="about">About Us</Link>
        <br/>
        <Link to="/form" className="form">Form</Link>
        <br/>
        <Link to="/subscribe" className="Subscribe">Subscribe</Link>
        </>
     );
};

export default Header