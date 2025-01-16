import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import ImageShow from "../../ImageShow";

import photographyhigh1 from "../../assets/images/photography/png/photography1.jpg";

const image = photographyhigh1;

const Photography1= () => {
  return (
    <div>
      <Helmet>
        <title>Photography1</title>
      </Helmet>
        <p>
          
          <Link to="/photography">↩ Photography</Link>
          <br />
          <b>Title:</b> Photography1 
          <br />
          <b>Year:</b> 2017
          <br />
          <b>Medium:</b> Film
          <br />
          <b>more info: </b> 
          Photography1
          <br />

          <b>Imgs ↴</b> 
          <br />

          <ImageShow image={image} />

        </p>
    </div>
  );
};

export default Photography1;
