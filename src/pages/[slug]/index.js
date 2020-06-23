import React from 'react';
import { getPageBySlug } from '../../integrations/contentful';
import Layout from '../../components/Layout';
import PageGeneral from '../../components/PageGeneral';
import Adapter from '../../adapters/contentful';

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

  // TODO: This should be created by build script
  const urlMap = {
    pageGeneral: {
      url: '/[key]',
      key: 'slug'
    }
  };

  const transform = Adapter({ urlMap });

  return {
    props: {
      pageData: transform(pageData),
      // already transformed in build files
      settingsGlobal: transform(settingsGlobal)
    }
  };
};

export default DynamicGeneralPage;
