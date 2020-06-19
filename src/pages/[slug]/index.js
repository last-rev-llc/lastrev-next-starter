import React from 'react';
import { getPageBySlug } from '../../integrations/contentful';
import Layout from '../../components/Layout';
import PageGeneral from '../../components/PageGeneral';

const { '/': paths } = require('../../../content-cache/paths.json');
const settingsGlobal = require('../../../content-cache/settings.json');

const CONTENT_TYPE = 'pageGeneral';

const DynamicGeneralPage = ({ settingsGlobal, pageData }) => {
  return (
    <Layout settingsGlobal={settingsGlobal}>
      <PageGeneral {...pageData.fields} />
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
