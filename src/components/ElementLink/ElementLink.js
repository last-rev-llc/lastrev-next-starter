import React from 'react';
import propTypes from './ElementLink.propTypes';

function ElementLink({ url, text, className }) {
  return (
    <a href={url} className={className}>{text}</a>
  );
}

ElementLink.propTypes = propTypes;

export default ElementLink;
