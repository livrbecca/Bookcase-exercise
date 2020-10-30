import React from "react";

function YourBooklist() {
  const name = "Olivia";
  function Greeting(user) {
    if (user) {
      return <h1>{name}'s Personal Booklist</h1>;
    }
    return <h1>Your Added Books</h1>;
  }
    return (
      <div>
        <h3>{Greeting(name)}</h3>
        <h4>Head over to Bookcase and add the books you like!</h4>
        <h4>
          They will all appear here. You can also hit 'remove' if you change
          your mind.
        </h4>
      </div>
    );
  }

export default YourBooklist;
