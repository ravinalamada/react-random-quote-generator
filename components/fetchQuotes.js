import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from "./Header";

const randomQuotesUrl = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
const genreQuotes = "https://quote-garden.herokuapp.com/api/v2/genres/:genreName?page=1&limit=10";

function FetcRandomQuotes() {
  const [randomQuotes, setRandomQoutes] = useState([]);

  async function getRandomQuotes() {
    const res = await fetch(randomQuotesUrl);
    const data = await res.json();
    setRandomQoutes(data.quote);
    console.log();
  }

  useEffect(() => {
    getRandomQuotes();
  }, [])

  function handleClick() {
     getRandomQuotes();
  }

  return (
    <>
      <Header handleClick={handleClick} />
      <Link to='/'></Link>
      <h2>{randomQuotes.quoteText}</h2>
      <Link to={`/author/${randomQuotes.quoteAuthor}`}>
        <button className="btn-lead">
          <p className="name">{randomQuotes.quoteAuthor}</p>
          <p className="genre">{randomQuotes.quoteGenre}</p>
        </button>
      </Link>
    </>
  )
}

export default FetcRandomQuotes;
