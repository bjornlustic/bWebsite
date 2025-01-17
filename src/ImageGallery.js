import React, { useEffect }  from "react";
import { Link } from 'react-router-dom'; 

const ImageGallery = ({ images }) => {
  useEffect(() => {
    console.log('Images received:', images);
  }, [images]);

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="gallery" style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: "10px", 
      boxSizing: "border-box",
    }}>
      {images.map((image) => (
        <Link key={image.id} to={`/${image.category}/photos/${image.id}`} style={{ margin: "10px" }}>
          <img
            src={image.src}
            alt={image.title}
            onError={(e) => console.error(`Error loading image: ${image.src}`)}
            style={{
              maxHeight: "300px",
              width: "calc(100% - 10px)", 
              padding: "20px",
              margin: "5px",
              boxSizing: "border-box",
            }}
          />
        </Link>
      ))}
    </div>
  );
};

export default ImageGallery;
