import React, { useState } from "react";

const LogForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [hasSumitted, setSubmitted] = useState(false);


  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    console.log(name);
    return (
      <>
        "A name was submitted: " + {name}, "An age was submitted: " + {age}, "A
        location was submitted: " + {location}
      </>
    );
  }



  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {hasSumitted && (
      <div>
        {name}
        <br/>
        {age}
        <br/>
        {location} 
      </div>
      )}
    </>
  );
};

// ReactDOM.render(<LogForm />, document.getElementById("root"));

export default LogForm;
