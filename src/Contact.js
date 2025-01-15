import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Contact= () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Bjorn Lustic's Contact Page" />
        <meta name="keywords" content="Bjorn Lustic, Contact" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Bjorn Lustic" />
        <title>Contact</title>
      </Helmet>
      <body>
        <h1>Bjorn Lustic</h1>
        <p>
          ↩ 
          <Link to="/">Home</Link><br />
          bjornlustic AT icloud DOT com
        </p>

        <Link to="/">
          <div className="fix_txt">BJØRN</div>
        </Link>

        <footer>©</footer>
      </body>
    </div>
  );
};

export default Contact;
