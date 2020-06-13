import React from 'react';
import Link from 'next/link';
import propTypes from './ElementLink.propTypes';


function ElementLink({ url, text }) {
  return (
    <Link href={url}>
      <a href={url}>{text}</a>
    </Link>
  );
}

ElementLink.propTypes = propTypes;

export default ElementLink;
