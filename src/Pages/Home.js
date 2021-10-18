import React, { useState } from 'react';

function Home() {
  const [input, setInput] = useState();

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  return (
    <div className="home">
      <h1>Search for Weather</h1>
      <input type="text" placeholder="Enter City Name" />
      <button onClick={(e) => handleChange(e.target.value)}>Search</button>
    </div>
  );
}

export default Home;
