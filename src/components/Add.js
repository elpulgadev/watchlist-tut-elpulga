import React, { useState } from 'react';

import { ResultCard } from './ResultCard';

export const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (event) => {
    event.preventDefault();

    setQuery(event.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${event.target.value}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        };
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              onChange={onChange}
              value={query}
              type="text"
              placeholder="Search for a movie"
            />
          </div>
          {
            (results.length) > 0 && (
              <ul className="results">
                {
                  results.map((movie, key) => {
                    return (
                      <li key={key}>
                        <ResultCard movie={movie} />
                      </li>
                    );
                  })
                }
              </ul>
            )
          }
        </div>
      </div>
    </div>
  );
};
