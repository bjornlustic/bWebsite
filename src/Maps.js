import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Maps= () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Bjorn Lustic's Maps Page" />
        <meta name="keywords" content="Bjorn Lustic, Maps" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Bjorn Lustic" />
        <title>Maps</title>
      </Helmet>
      <body>
        <h1>Bjorn Lustic</h1>
        <p>
          
          <Link to="/">↩ Home</Link><br />
          <ul>
            <li>
                Minecraft
            </li>
                <ul>
                    <li>
                        <Link to="/blockeley">Blockeley</Link>
                        ↪
                    </li>
                </ul>
            <li>
                DayZ
            </li>
                <ul>
                    <li>
                        <Link to="/ada">Ada</Link>
                        ↪
                    </li>
                </ul>
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

export default Maps;
