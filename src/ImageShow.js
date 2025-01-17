import React from "react";

const ImageShow = ({ image }) => {
  return (
    <div className="show" style={{ overflow: "hidden", width: "100%" }}>
      <img
        src={image.src}
        alt={image.title}
        style={{
          maxWidth: "100%",  // Ensure the image width doesn't exceed its container
          maxHeight: "90vh",  // Limit the height to 90% of the viewport height
          width: "auto",      // Maintain aspect ratio
          height: "auto",     // Maintain aspect ratio
          padding: "10px",
          boxSizing: "border-box",  // Include padding in the element's total width and height
        }}
      />
    </div>
  );
};

export default ImageShow;
