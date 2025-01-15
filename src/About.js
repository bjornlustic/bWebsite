import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const About = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Bjorn Lustic's About Page" />
        <meta name="keywords" content="Bjorn Lustic, About" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Bjorn Lustic" />
        <title>About</title>
      </Helmet>
      <body>
        <h1>Bjorn Lustic</h1>
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
          <b>About this site:</b> This site is powered by React, I don't know why. I have had 3 or 4 different versions
             of this website, starting back in 2015, and have decided on something more plain and simple this time.
        </p>

        <Link to="/">
          <div className="fix_txt">BJØRN</div>
        </Link>

        <footer>©</footer>
      </body>
    </div>
  );
};

export default About;
