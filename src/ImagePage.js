import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ImageShow from "./ImageShow";

const ImagePage = () => {
  const { category, id } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImageData = async () => {
      try {
        // Dynamic import of JSON based on category
        const imageData = await import(`./data/${category}.json`);
        const foundImage = imageData.default.find(img => img.id === id);
        
        if (foundImage) {
          // Dynamic import of image
          const imageModule = await import(`./assets/images/${category}/png/${foundImage.srcFULL}`);
          setImage({
            ...foundImage,
            src: imageModule.default
          });
        }
        setLoading(false);
      } catch (err) {
        console.error('Error loading image:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadImageData();
  }, [category, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <Helmet>
        <title>{image.title}</title>
      </Helmet>
      <p>
      <Link to={`/${image.nestedBackLink || image.category || ""}`}>
          ↩ {`${image.category?.charAt(0).toUpperCase() + image.category?.slice(1)}` || "Home"}
      </Link>
        <br />
        {Object.entries(image).map(([key, value]) => {
          if (key === "src" || key === "id" || key === "category" || key === "nestedBackLink" || key === "srcFULL"  ) return null;
          return (
            <React.Fragment key={key}>
              <b>{key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}:</b> {value || "Unknown"}
              <br />
            </React.Fragment>
          );
        })}
        <b>Img ↴</b>
        <br />
        <ImageShow image={image} />
      </p>
    </div>
  );
};

export default ImagePage;