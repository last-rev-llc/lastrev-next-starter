import React from 'react';
import propTypes from './ElementLink.propTypes';


function ElementLink({ url, text }) {
  return (
    <a href={url}>{text}</a>
  );
}

ElementLink.propTypes = propTypes;

export default ElementLink;
