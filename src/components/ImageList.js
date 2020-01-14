import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

// functional component
// assign key to root key (if there was a div around each image you'd put it in the div)
const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  })
  return <div className="image-list">{images}</div>;
};

export default ImageList;
