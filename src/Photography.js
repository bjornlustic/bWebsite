import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import ImageGallery from "./ImageGallery";

import photography1 from "./assets/images/photography/jpg/photography1.jpg";
import photography2 from "./assets/images/photography/jpg/photography2.jpg";
import photography3 from "./assets/images/photography/jpg/photography3.jpg";
import photography4 from "./assets/images/photography/jpg/photography4.jpg";
import photography5 from "./assets/images/photography/jpg/photography5.jpg";
import photography6 from "./assets/images/photography/jpg/photography6.jpg";
import photography7 from "./assets/images/photography/jpg/photography7.jpg";
import photography8 from "./assets/images/photography/jpg/photography8.jpg";
import photography9 from "./assets/images/photography/jpg/photography9.jpg";
import photography10 from "./assets/images/photography/jpg/photography10.jpg";
import photography11 from "./assets/images/photography/jpg/photography11.jpg";
import photography12 from "./assets/images/photography/jpg/photography12.jpg";
import photography13 from "./assets/images/photography/jpg/photography13.jpg";
import photography14 from "./assets/images/photography/jpg/photography14.jpg";
import photography15 from "./assets/images/photography/jpg/photography15.jpg";
import photography16 from "./assets/images/photography/jpg/photography16.jpg";
import photography17 from "./assets/images/photography/jpg/photography17.jpg";
import photography18 from "./assets/images/photography/jpg/photography18.jpg";
import photography19 from "./assets/images/photography/jpg/photography19.jpg";
import photography20 from "./assets/images/photography/jpg/photography20.jpg";
import photography21 from "./assets/images/photography/jpg/photography21.jpg";
import photography22 from "./assets/images/photography/jpg/photography22.jpg";
import photography23 from "./assets/images/photography/jpg/photography23.jpg";
import photography24 from "./assets/images/photography/jpg/photography24.jpg";
import photography25 from "./assets/images/photography/jpg/photography25.jpg";
import photography26 from "./assets/images/photography/jpg/photography26.jpg";
import photography27 from "./assets/images/photography/jpg/photography27.jpg";
import photography28 from "./assets/images/photography/jpg/photography28.jpg";
import photography29 from "./assets/images/photography/jpg/photography29.jpg";
import photography30 from "./assets/images/photography/jpg/photography30.jpg";
import photography31 from "./assets/images/photography/jpg/photography31.jpg";
import photography32 from "./assets/images/photography/jpg/photography32.jpg";
import photography33 from "./assets/images/photography/jpg/photography33.jpg";
import photography34 from "./assets/images/photography/jpg/photography34.jpg";
import photography35 from "./assets/images/photography/jpg/photography35.jpg";
import photography36 from "./assets/images/photography/jpg/photography36.jpg";

const images = [
  photography1,
  photography2,
  photography3,
  photography4,
  photography5,
  photography6,
  photography7,
  photography8,
  photography9,
  photography10,
  photography11,
  photography12,
  photography13,
  photography14,
  photography15,
  photography16,
  photography17,
  photography18,
  photography19,
  photography20,
  photography21,
  photography22,
  photography23,
  photography24,
  photography25,
  photography26,
  photography27,
  photography28,
  photography29,
  photography30,
  photography31,
  photography32,
  photography33,
  photography34,
  photography35,
  photography36,
];


const Photography = () => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="Bjorn Lustic's Photography Page" />
        <meta name="keywords" content="Bjorn Lustic, Photography" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Bjorn Lustic" />
        <title>Photography</title>
      </Helmet>
      <body>
        <h1>Bjorn Lustic</h1>
        <p>
          <Link to="/">↩ Home</Link>
          <br />

          <li>
             Shows
            </li>
                <ul>
                    <li>
                        Bjorn Selected Works 2017 - 2019, <i>BAMFEST 2019 @ Crescent Lawn, UC Berkeley, Berkeley, CA</i>, May 3, 2019
                    </li>
                </ul>

          <b>Imgs ↴</b>
          <br />

          <ImageGallery images={images} />

          <br />
          <ul>
            <li>Cameras</li>
            <ul>
              <li>Nikon F3</li>
              <li>Konica Hexar AF</li>
              <li>Mamiya 645</li>
              <li>Olympus MJU II</li>
              <li>Canon AE-1</li>
              <li>Hasselblad 501cm</li>
              <li>Leica R3 Mot</li>
              <li>Canon AF 35m</li>
              <li>Sony A7</li>
              <li>Rollei 35 SE</li>
            </ul>
            <li>Lenses</li>
            <ul>
              <li>Leica Summicron-R 50mm F2.0</li>
              <li>Hasselblad 80mm F4</li>
              <li>Nikon 50mm F2.0</li>
            </ul>
            <li>Film</li>
            <ul>
              <li>Kodak Portra 160</li>
              <li>Kodak Portra 400</li>
              <li>Kodak Portra 800</li>
              <li>Kodak Gold 200</li>
              <li>Kodak Tri-x 400</li>
              <li>Kodak Velvia 50</li>
              <li>Kodak Ektar 100</li>
              <li>Ilford HP5</li>
              <li>Kodak Aerochrome</li>
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
