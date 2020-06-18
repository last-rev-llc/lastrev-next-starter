import React from 'react';
import NextHead from 'next/head';
import propTypes from './Head.propTypes';

const getValue = (obj) => {
  return obj ? obj.value : '';
};

const getUrl = (obj) => {
  const val = getValue(obj);
  return val ? val.url : '';
};

function Head({
  title,
  description,
  keywords,
  robots,
  'og:image': ogImage,
  'og:title': ogTitle,
  'og:description': ogDescription,
  'twitter:image': twitterImage,
  'twitter:title': twitterTitle,
  'twitter:description': twitterDescription
}) {
  return (
    <NextHead>
      <title key="title">{getValue(title)}</title>

      <meta name="description" key="description" content={getValue(description)} />
      <meta name="keywords" key="keywords" content={getValue(keywords)} />
      <meta name="robots" key="robots" content={getValue(robots)} />
      <meta property="og:image" content={getUrl(ogImage)} />
      <meta property="og:title" content={getValue(ogTitle)} />
      <meta property="og:description" content={getValue(ogDescription)} />
      <meta name="twitter:image" content={getUrl(twitterImage)} />
      <meta name="twitter:title" content={getValue(twitterTitle)} />
      <meta name="twitter:description" content={getValue(twitterDescription)} />

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
  keywords: null,
  robots: null
};

export default Head;
