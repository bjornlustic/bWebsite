import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Maps= () => {
  return (
    <div>
      <Helmet>
        <title>Maps</title>
      </Helmet>
        <p>
          
          <Link to="/">↩ Home</Link><br />
          <ul>
            <li>
                Minecraft
            </li>
                <ul>
                    <li>
                        <Link to="/maps/blockeley">Blockeley</Link>
                        ↪
                    </li>
                </ul>
            <li>
                DayZ
            </li>
                <ul>
                    <li>
                        <Link to="/maps/ada">Ada</Link>
                        ↪
                    </li>
                </ul>
          </ul>
        </p>
    </div>
  );
};

export default Maps;
