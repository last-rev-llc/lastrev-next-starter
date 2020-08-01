import React from 'react';
import PropTypes from 'prop-types';
import Contentful from '@last-rev/integration-contentful';
import pathData from '../../buildArtifacts/paths';
import adapterConfig from '../../buildArtifacts/adapterConfig';
import Layout from '../../components/Layout';
import RecipeDetail, { RecipeDetailPropTypes } from '../../components/RecipeDetail';
import { HeadPropTypes } from '../../components/Head';
import extractSeoOrDefault from '../../utils/extractSeoOrDefault';

const { recipeDetail: paths } = pathData;
const { getPageBySlug } = Contentful(adapterConfig);

export const RecipePagePropTypes = {
  pageData: PropTypes.shape(RecipeDetailPropTypes).isRequired,
  seo: PropTypes.shape(HeadPropTypes).isRequired
};

function RecipePage({ pageData, seo }) {
  const {
    _id,
    _contentTypeId,
    excludedLocales,
    similarRecipes,
    steps,
    ingredients,
    description,
    cookTime,
    prepTime,
    difficulty,
    servings,
    authorName,
    image,
    authorImage,
    title,
    slug
  } = pageData;

  return (
    <>
      <Layout seo={seo}>
        <RecipeDetail
          _id={_id}
          _contentTypeId={_contentTypeId}
          excludedLocales={excludedLocales}
          similarRecipes={similarRecipes}
          steps={steps}
          ingredients={ingredients}
          description={description}
          cookTime={cookTime}
          prepTime={prepTime}
          difficulty={difficulty}
          servings={servings}
          authorName={authorName}
          image={image}
          authorImage={authorImage}
          title={title}
          slug={slug}
        />
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
  const pageData = await getPageBySlug({ slug, contentTypeId: 'recipeDetail', include: 6 });
  return {
    props: {
      pageData,
      seo: extractSeoOrDefault(pageData)
    }
  };
};

RecipePage.propTypes = RecipePagePropTypes;

RecipePage.defaultProps = {};

export default RecipePage;
