import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "./App.css";
import About from './About';
import Contact from './Contact';
import Social from './Social';
import Music from './Music';
import Maps from './Maps';
import Blockeley from './Blockeley';
import Ada from './Ada';
import Photography from './Photography';

function App() {
  return (
    <Router>
      <div>
        
        <head>
          <meta
            name="description"
            content="Bjorn Lustic's Website. Last updated January 15, 2025. About, Contact"
          />
          <meta
            name="keywords"
            content="Bjorn Lustic, Blockeley"
          />
          <meta charSet="UTF-8" />
          <meta name="author" content="Bjorn Lustic" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="./App.css"
          />
          <link rel="icon" type="image/x-icon" href="./favicon.svg" />
          <title>Home</title>
        </head>

        <body>
          <h1>Bjorn Lustic</h1>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              Stuff
              <ul>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/maps">Maps</Link></li>
                <li><Link to="/photography">Photography</Link></li>
              </ul>
            </li>
            <li><Link to="/social">Social</Link></li>
          </ul>

          <p>01/15/2025</p>


          <Link to="/">
          <div className="fix_txt">BJØRN</div>
          </Link>

          <footer>©</footer>

          {/* Define the routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/social" element={<Social />} />
            <Route path="/music" element={<Music />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/blockeley" element={<Blockeley />} />
            <Route path="/ada" element={<Ada />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
        </body>
      </div>
    </Router>
  );
}

function Home() {
}

export default App;
