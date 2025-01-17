import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import photographyImages from "./data/photography.json";

// Require all images from the photography directory
const imageContext = require.context("./assets/images/photography/jpg", false, /\.(jpg|png)$/);

// Map images using require.context()
const images = photographyImages.map(image => {
  try {
    // Extract filename from JSON path
    const filename = image.src.split("/").pop(); // Extracts "photography1.jpg"
    
    return {
      ...image,
      src: imageContext(`./${filename}`) // Match against require.context()
    };
  } catch (error) {
    console.error(`Error loading image: ${image.src}`, error);
    return image;
  }
});

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
            <li>Bjorn Selected Works 2017 - 2019, <i>BAMFEST 2019 @ Crescent Lawn, UC Berkeley, Berkeley, CA</i>, May 3, 2019</li>
          </ul>
          <li>Cameras</li>
          <ul>
            <li>Nikon F3</li>
            <li>Konica Hexar AF (2x, one had error E11 and then 3 years later started working again)</li>
            <li>Mamiya 645 (Borrowed and returned)</li>
            <li>Olympus MJU II (2x, 1 broken, 1 loaned out)</li>
            <li>Canon AE-1 (Sold)</li>
            <li>Hasselblad 501cm</li>
            <li>Leica R3 Mot</li>
            <li>Canon AF 35m (Broken)</li>
            <li>Sony A7 (Broken)</li>
            <li>Rollei 35 SE</li>
          </ul>
          <li>Lenses</li>
          <ul>
            <li>Leica Summicron-R 50mm F/2.0</li>
            <li>Hasselblad 80mm F/4</li>
            <li>Nikon Series E 50mm f/1.8</li>
            <li>Mamiya Sekor 80mm f/2.8</li>
            <li>Carl Zeiss Planar 80mm f/2.8</li>
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
            <li>Fuji 400H</li>
          </ul>
        </ul>
      </p>
    </div>
  );
};

export default Photography;
