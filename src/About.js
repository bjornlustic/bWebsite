import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
        <p>
          
          <Link to="/">↩ Home</Link><br />
          <b>About me:</b> Hello. Welcome to the about me page. I’m a
          {' '}
          <Link to="/music">musician</Link>
          ↪,{' '}
          <Link to="/maps">map modder</Link>
          ↪,{' '}
          <Link to="/photography">photographer</Link>
          ↪,{' '}
          <a href="https://github.com/bjornlustic" target="_blank" rel="noopener noreferrer">
            programmer
          </a>
          ↪, programming tutor, etc, living in New York, New York.
          <br />
          <b>About this site:</b> This site is powered by React. I have had 3 or 4 different versions
             of this website, starting back in 2015, and have decided on something plain and simple.
        </p>
    </div>
  );
};

export default About;
