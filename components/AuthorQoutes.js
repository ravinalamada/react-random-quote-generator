import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const authorQuotesUrl = `https://quote-garden.herokuapp.com/api/v2/authors/`;
const PAGES = "?page=1&limit=10";

function fetchAuthorQoutes() {
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const { authorName } = useParams();

  async function getAuthorQuotes() {
    const res = await fetch(authorQuotesUrl + authorName + PAGES);
    const data = await res.json();
    setAuthorQuotes(data)
  }

  useEffect(() => {
    getAuthorQuotes()
  }, []);

  if (!authorQuotes.quotes) {
     return null;
  }

  return (
    <>
    <Link to='/'>
      <a href="/" className="home">Home</a>
    </Link>
    <ul>
      {authorQuotes.quotes.map(item => (
          <li key={item.id}><h3>{item.quoteText}</h3></li>
        )
      )
      }
    </ul>
    </>
  )

}

export default fetchAuthorQoutes;
