import React from 'react';
import propTypes from './ElementImage.propTypes';
import styles from './ElementImage.module.scss';

function ElementImage({ src, alt, className }) {
  return (
    <img src={src} alt={alt} className={`${styles.img} ${className}`} />
  );
}

ElementImage.propTypes = propTypes;

export default ElementImage;
