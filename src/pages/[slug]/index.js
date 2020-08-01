import React from 'react';
import PropTypes from 'prop-types';
import Contentful from '@last-rev/integration-contentful';
import pathData from '../../buildArtifacts/paths';
import adapterConfig from '../../buildArtifacts/adapterConfig';
import Layout from '../../components/Layout';
import PageGeneral, { PageGeneralPropTypes } from '../../components/PageGeneral';
import { HeadPropTypes } from '../../components/Head';
import extractSeoOrDefault from '../../utils/extractSeoOrDefault';

const { pageGeneral: paths } = pathData;
const { getPageBySlug } = Contentful(adapterConfig);

export const GeneralPagePropTypes = {
  pageData: PropTypes.shape(PageGeneralPropTypes).isRequired,
  seo: PropTypes.shape(HeadPropTypes).isRequired
};

function GeneralPage({ pageData, seo }) {
  const { _id, content, pageTitle } = pageData;

  return (
    <>
      <Layout seo={seo}>
        <PageGeneral _id={_id} content={content} pageTitle={pageTitle} />
      </Layout>
    </>
  );
}

// This function gets called at build time
export const getStaticPaths = async () => {
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const pageData = await getPageBySlug({ slug, contentTypeId: 'pageGeneral', include: 6 });
  return {
    props: {
      pageData,
      seo: extractSeoOrDefault(pageData)
    }
  };
};

GeneralPage.propTypes = GeneralPagePropTypes;

GeneralPage.defaultProps = {};

export default GeneralPage;
