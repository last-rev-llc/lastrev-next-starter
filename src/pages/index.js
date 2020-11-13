/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { get } from 'lodash';
import Contentful from '@last-rev/integration-contentful';
import pathData from '../buildArtifacts/paths';
import adapterConfig from '../buildArtifacts/adapterConfig';
import { getComponent } from '../components/componentRegistry';

const { getFullContentById } = Contentful(adapterConfig);

function DynamicPage({ pageData, componentId }) {
  const Page = getComponent(componentId);

  return <Page {...pageData} />;
}

export const getStaticProps = async ({ lang }) => {
  const pathObj = get(pathData, `['starter.lastrev.com']['/']`);
  const { componentId, contentId, contentTypeId } = pathObj;

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
