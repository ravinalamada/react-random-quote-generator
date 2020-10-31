import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from "./Header";

const randomQuotesUrl = "https://quote-garden.herokuapp.com/api/v2/quotes/random";

function FetcRandomQuotes() {
  const [randomQuotes, setRandomQoutes] = useState([]);

  async function getRandomQuotes() {
    const res = await fetch(randomQuotesUrl);
    const data = await res.json();
    setRandomQoutes(data.quote);
  }

  useEffect(() => {
    getRandomQuotes();
  }, [])

  function handleClick() {
     getRandomQuotes();
  }

  return (
    <div className="container">
      <Header handleClick={handleClick} />
      <h2>{randomQuotes.quoteText}</h2>
      <Link to={`/author/${randomQuotes.quoteAuthor}`}>
        <button className="btn-lead" key={randomQuotes.quoteAuthor}>
          <p className="name">{randomQuotes.quoteAuthor}</p>
          <p className="genre">{randomQuotes.quoteGenre}</p>
        </button>
      </Link>
    </div>
  )
}

export default FetcRandomQuotes;
