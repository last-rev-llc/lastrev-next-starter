import React from 'react';
import propTypes from './Head.propTypes';
import NextHead from 'next/head';

function Head({ title, description, keywords }) {
  const getValue = (obj) => {
    return obj ? obj.value : '';
  };

  return (
    <NextHead>
      <title data-testid="Head-title" key="title">
        {getValue(title)}
      </title>
      <meta name="description" key="description" content={getValue(description)} data-testid="Head-description" />
      <meta name="keywords" key="keywords" content={getValue(keywords)} data-testid="Head-keywords" />

      <link rel="icon" href="/favicon.ico" />
      <meta name="contentful_space" content={process.env.CONTENTFUL_SPACE_ID} key="spaceId" />
      <meta name="contentful_environment" content={process.env.CONTENTFUL_ENV} key="contentfulEnv" />
    </NextHead>
  );
}

Head.propTypes = propTypes;

Head.defaultProps = {
  title: null,
  description: null,
  keywords: null
};

export default Head;
