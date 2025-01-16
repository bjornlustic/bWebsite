import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Contact= () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
        <p>
          ↩ 
          <Link to="/">Home</Link><br />
          bjornlustic AT icloud DOT com
        </p>
    </div>
  );
};

export default Contact;
