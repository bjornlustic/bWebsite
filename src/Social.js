import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Social= () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Bjorn Lustic's Social Page" />
        <meta name="keywords" content="Bjorn Lustic, Social" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Bjorn Lustic" />
        <title>Social</title>
      </Helmet>
      <body>
        <h1>Bjorn Lustic</h1>
        <p>
          
          <Link to="/">↩ Home</Link><br />
          <ul>
            <li> {' '}
            <a href="https://instagram.com/bjornisartsyaf" target="_blank" rel="noopener noreferrer">
                Instagram
            </a>
            ↪
            </li>
          </ul>
        </p>

        <Link to="/">
          <div className="fix_txt">BJØRN</div>
        </Link>

        <footer>©</footer>
      </body>
    </div>
  );
};

export default Social;
