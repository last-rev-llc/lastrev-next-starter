/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import lookupComponentByContentType from '@utils/lookupComponentByContentType';
import Contentful from '@integrations/contentful';
import Layout from '@components/Layout';
import PageGeneral from '@components/PageGeneral';
import config from '../../config';

const { getPageBySlug } = Contentful(config);

const { '/': paths } = require('../../../content-cache/paths.json');
const settingsGlobal = require('../../../content-cache/settings.json');

const CONTENT_TYPE = 'pageGeneral';

// eslint-disable-next-line no-shadow
const DynamicGeneralPage = ({ settingsGlobal, pageData }) => {
  return (
    <Layout settingsGlobal={settingsGlobal}>
      <PageGeneral {...pageData} mooduleLookup={lookupComponentByContentType} />
    </Layout>
  );
};

// This function gets called at build time
export const getStaticPaths = async () => {
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const pageData = await getPageBySlug(slug, CONTENT_TYPE);

  return {
    props: {
      pageData,
      settingsGlobal
    }
  };
};

export default DynamicGeneralPage;
