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
    console.log(data.quotes);
  }

  useEffect(() => {
    getAuthorQuotes()
  }, []);

  if (!authorQuotes.quotes) {
     return null;
  }

  return (
    <>
    <Link to='/'>Home</Link>
    <ul>
      {authorQuotes.quotes.map(item => (
          <li key={item.quotAuthor}>{item.quoteText}</li>)
        )
      }
    </ul>
    </>
  )

}

export default fetchAuthorQoutes;
