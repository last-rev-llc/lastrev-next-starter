/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { get, map, keys, omit } from 'lodash';
import Contentful from '@last-rev/integration-contentful';
import pathData from '../buildArtifacts/paths';
import adapterConfig from '../buildArtifacts/adapterConfig';
import { getComponent } from '../components/componentRegistry';

const { getFullContentById } = Contentful(adapterConfig);

function DynamicPage({ pageData, componentId }) {
  const Page = getComponent(componentId);

  return <Page {...pageData} />;
}

// This function gets called at build time
export const getStaticPaths = async () => {
  const rawPaths = omit(keys(get(pathData, `['starter.lastrev.com']`)), (key) => {
    return key === '/';
  });

  const paths = map(rawPaths, (rawPath) => ({ params: { slugs: rawPath.split('/').slice(1) } }));

  return {
    paths,
    fallback: false
  };
};

// This function gets called at build time
export const getStaticProps = async ({ lang, params }) => {
  const { slugs = [] } = params;
  const fullPath = `/${slugs.join('/')}`;
  const { componentId, contentId, contentTypeId } = get(pathData, `['starter.lastrev.com']['${fullPath}']`);

  const pageData = await getFullContentById({
    contentTypeId,
    id: contentId,
    locale: lang,
    include: 10
  });

  return {
    props: {
      pageData,
      componentId
    }
  };
};

export default DynamicPage;
