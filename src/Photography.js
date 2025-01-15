import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Photography= () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Bjorn Lustic's Photography Page" />
        <meta name="keywords" content="Bjorn Lustic, Photography" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Bjorn Lustic" />
        <title>Photographys</title>
      </Helmet>
      <body>
        <h1>Bjorn Lustic</h1>
        <p>
          
          <Link to="/">↩ Home</Link><br />
          <ul>
            <li>
                Cameras
            </li>
                <ul>
                    <li>
                        Nikon F3
                    </li>
                    <li>
                        Konica Hexar AF (2x one is broken but somehow revived itself, now it is loaned out)
                    </li>
                    <li>
                        Mamiya 645 (Borrowed and returned)
                    </li>
                    <li>
                        Olympus MJU II (2x one broke, one is loaned out)
                    </li>
                    <li>
                        Canon AE-1 (Sold)
                    </li>
                    <li>
                        Hasselblad 501cm
                    </li>
                    <li>
                        Leica R3 Mot
                    </li>
                    <li>
                        Canon AF 35m (Broken)
                    </li>
                    <li>
                        Sony A7 (Broken)
                    </li>
                    <li>
                        Rollei 35 SE
                    </li>
                </ul>

            <li>
                Lenses
            </li>
                <ul>
                    <li>
                        Leica Summicron-R 50mm F2.0
                    </li>
                    <li>
                        Hasselblad 80mm F4
                    </li>
                    <li>
                        Nikon 50mm F2.0
                    </li>
                </ul>
            <li>
                Film
            </li>
                <ul>
                    <li>
                        Kodak Portra 160
                    </li>
                    <li>
                        Kodak Portra 400
                    </li>
                    <li>
                        Kodak Portra 800
                    </li>
                    <li>
                        Kodak Gold 200
                    </li>
                    <li>
                        Kodak Tri-x 400
                    </li>
                    <li>
                        Kodak Velvia 50
                    </li>
                    <li>
                        Kodak Ektar 100
                    </li>
                    <li>
                        Ilford HP5
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

export default Photography;
