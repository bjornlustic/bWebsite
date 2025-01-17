import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BouncingPorygon from './BouncingPorygon';
import "./App.css";
import About from './About';
import Contact from './Contact';
import Social from './Social';
import Music from './Music';
import Maps from './Maps';
import Blockeley from './maps/Blockeley';
import Ada from './maps/Ada';
import Photography from './Photography';
import ImagePage from './ImagePage';
import ScrollToTop from './hooks/ScrollToTop';


function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
    <nav>
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
      <p>01/17/2025</p>
    </nav>
    </div>
  );
}

function Header() {
  return (
      <h1>Bjorn Lustic</h1>
  );
}

function Footer() {
  return (
    <footer>©</footer>
  );
}

function Name() {
  return (
    <Link to="/">
    <div className="fix_txt">BJØRN</div>
    </Link>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <BouncingPorygon />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/social" element={<Social />} />
            <Route path="/music" element={<Music />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/maps/blockeley" element={<Blockeley />} />
            <Route path="/maps/ada" element={<Ada />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/:category/photos/:id" element={<ImagePage />} />
          </Routes>
      <Footer />
      <Name />
    </Router>
  );
}

export default App;
