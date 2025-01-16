import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Social= () => {
  return (
    <div>
      <Helmet>
        <title>Social</title>
      </Helmet>
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
    </div>
  );
};

export default Social;
