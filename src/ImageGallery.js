import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ImageGallery = ({ images }) => {
  return (
    <div className="gallery" style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: "10px", // Add some padding to the container if needed
      boxSizing: "border-box", // Ensures that padding doesn't overflow
    }}>
      {images.map((image, index) => (
        // If image has a "link" property, use it for the Link, otherwise the image is not clickable
        image.link ? (
          <Link key={index} to={image.link} style={{ margin: "10px" }}>
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              style={{
                maxHeight: "300px",
                width: "calc(100% - 10px)", // Adjust width to account for padding
                padding: "20px",  // Add padding around the image
                margin: "5px",    // Add margin between images
                boxSizing: "border-box", // Make padding part of the total width/height calculation
              }}
            />
          </Link>
        ) : (
          <img
            key={index}
            src={image.src}
            alt={`Gallery Image ${index + 1}`}
            style={{
              maxHeight: "300px",
              width: "calc(100% - 10px)", // Adjust width to account for padding
              padding: "20px",  // Add padding around the image
              margin: "5px",    // Add margin between images
              boxSizing: "border-box", // Make padding part of the total width/height calculation
            }}
          />
        )
      ))}
    </div>
  );
};

export default ImageGallery;
