import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery Image ${index + 1}`}
          style={{
            maxHeight: "300px",
            width: "auto",
            margin: "5px",
          }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
