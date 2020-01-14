import React from 'react';

// functional component
// assign key to root key (if there was a div around each image you'd put it in the div)
const ImageList = props => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description || 'Apologies, description text currently unavailable'} />
  })
  return <div>{images}</div>;
};

export default ImageList;
