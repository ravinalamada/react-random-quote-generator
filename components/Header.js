import React from "react";

export default function Header(props) {
  return(
    <header>
      <h1>Random</h1>
      <button onClick={props.handleClick} className="button"></button>
    </header>
  )
}
