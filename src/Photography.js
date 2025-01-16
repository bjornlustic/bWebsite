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
  { src: photography1, link: "/photography/photos/photography1" },
  { src: photography2, link: "/photography/photos/photography2" },
  { src: photography3, link: "/photography/photos/photography3" },
  { src: photography4, link: "/photography/photos/photography4" },
  { src: photography5, link: "/photography/photos/photography5" },
  { src: photography6, link: "/photography/photos/photography6" },
  { src: photography7, link: "/photography/photos/photography7" },
  { src: photography8, link: "/photography/photos/photography8" },
  { src: photography9, link: "/photography/photos/photography9" },
  { src: photography10, link: "/photography/photos/photography10" },
  { src: photography11, link: "/photography/photos/photography11" },
  { src: photography12, link: "/photography/photos/photography12" },
  { src: photography13, link: "/photography/photos/photography13" },
  { src: photography14, link: "/photography/photos/photography14" },
  { src: photography15, link: "/photography/photos/photography15" },
  { src: photography16, link: "/photography/photos/photography16" },
  { src: photography17, link: "/photography/photos/photography17" },
  { src: photography18, link: "/photography/photos/photography18" },
  { src: photography19, link: "/photography/photos/photography19" },
  { src: photography20, link: "/photography/photos/photography20" },
  { src: photography21, link: "/photography/photos/photography21" },
  { src: photography22, link: "/photography/photos/photography22" },
  { src: photography23, link: "/photography/photos/photography23" },
  { src: photography24, link: "/photography/photos/photography24" },
  { src: photography25, link: "/photography/photos/photography25" },
  { src: photography26, link: "/photography/photos/photography26" },
  { src: photography27, link: "/photography/photos/photography27" },
  { src: photography28, link: "/photography/photos/photography28" },
  { src: photography29, link: "/photography/photos/photography29" },
  { src: photography30, link: "/photography/photos/photography30" },
  { src: photography31, link: "/photography/photos/photography31" },
  { src: photography32, link: "/photography/photos/photography32" },
  { src: photography33, link: "/photography/photos/photography33" },
  { src: photography34, link: "/photography/photos/photography34" },
  { src: photography35, link: "/photography/photos/photography35" },
  { src: photography36, link: "/photography/photos/photography36" },
];

const Photography = () => {
  return (
    <div>
      <Helmet>
        <title>Photography</title>
      </Helmet>
        <p>
          <Link to="/">↩ Home</Link>
          <br />

          <b>Imgs ↴</b>
          <br />

          <ImageGallery images={images} />

          <br />
          <ul>
          <li> Shows </li>
                <ul>
                    <li> Bjorn Selected Works 2017 - 2019, <i>BAMFEST 2019 @ Crescent Lawn, UC Berkeley, Berkeley, CA</i>, May 3, 2019 </li>
                </ul>
            <li>Cameras</li>
            <ul>
              <li>Nikon F3</li>
              <li>Konica Hexar AF (2x, one had error E11 and then 3 years later started working again)</li>
              <li>Mamiya 645 (Borrowed and returned) </li>
              <li>Olympus MJU II (2x, 1 broken, 1 loaned out) </li>
              <li>Canon AE-1 (Sold) </li>
              <li>Hasselblad 501cm</li>
              <li>Leica R3 Mot</li>
              <li>Canon AF 35m (Broken) </li>
              <li>Sony A7 (Broken) </li>
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
              <li>Kodak Aerochrome</li>
              <li>Ilford HP5</li>
            </ul>
          </ul>
        </p>

    </div>
  );
};

export default Photography;
