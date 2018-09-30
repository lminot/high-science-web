import React from "react";

import { Link } from "gatsby";

const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default ({ children }) => (
  <div style={{ margin: "0 auto", maxWidth: 650, padding: "1.25rem 1rem" }}>
    <header style={{ marginBottom: "1.5rem" }}>
      <Link to="/" style={{ textShadow: "none", backgroundImage: "none", color: "#1abc9c" }}>
        <h4 style={{ display: "inline" }}><i>Hi-Sci</i></h4>
      </Link>
      <ul style={{ listStyle: "none", float: "right" }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
);
