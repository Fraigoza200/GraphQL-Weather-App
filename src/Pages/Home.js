import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../graphql/Queries';

function Home() {
  const [input, setInput] = useState('');
  const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: input },
  });

  if (error) return <h1> Loading...</h1>;
  if (data) {
    console.log(data);
  }
  return (
    <div className="home">
      <h1>Search for Weather</h1>
      <input
        type="text"
        placeholder="Enter City Name"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={() => getWeather()}>Search</button>
      <div className="weather">
        {data && (
          <>
            <h1>{data.getCityByName.name}</h1>
            <h1>Description: {data.getCityByName.weather.summary.description}</h1>
            <h1>{data.getCityByName.weather.summary.title}</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
