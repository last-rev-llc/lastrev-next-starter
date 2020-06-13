import React from 'react';
import propTypes from './ElementImage.propTypes';

function ElementImage({ url, altText }) {
  return (
    <img src={url} alt={altText} />
  );
}

ElementImage.propTypes = propTypes;

export default ElementImage;
