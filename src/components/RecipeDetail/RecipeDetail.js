import React from 'react';
import PropTypes from 'prop-types';
import styles from './RecipeDetail.module.scss';
import { RichTextParserPropTypes } from '../RichTextParser';
import { AssetPropTypes } from '../Asset';

export const RecipeDetailPropTypes = {
  _id: PropTypes.string.isRequired,
  _contentTypeId: PropTypes.string.isRequired,
  excludedLocales: PropTypes.string,
  similarRecipes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({})])).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  steps: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  ingredients: PropTypes.object.isRequired,
  description: PropTypes.shape(RichTextParserPropTypes).isRequired,
  cookTime: PropTypes.number.isRequired,
  prepTime: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  image: PropTypes.shape(AssetPropTypes).isRequired,
  authorImage: PropTypes.shape(AssetPropTypes),
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

function RecipeDetail({
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
}) {
  return (
    <div data-testid="RecipeDetail" className={styles.recipe_detail}>
      <div>
        <h2>_id</h2>
        <pre>{JSON.stringify(_id, null, 2)}</pre>
      </div>
      <div>
        <h2>_contentTypeId</h2>
        <pre>{JSON.stringify(_contentTypeId, null, 2)}</pre>
      </div>
      <div>
        <h2>excludedLocales</h2>
        <pre>{JSON.stringify(excludedLocales, null, 2)}</pre>
      </div>
      <div>
        <h2>similarRecipes</h2>
        <pre>{JSON.stringify(similarRecipes, null, 2)}</pre>
      </div>
      <div>
        <h2>steps</h2>
        <pre>{JSON.stringify(steps, null, 2)}</pre>
      </div>
      <div>
        <h2>ingredients</h2>
        <pre>{JSON.stringify(ingredients, null, 2)}</pre>
      </div>
      <div>
        <h2>description</h2>
        <pre>{JSON.stringify(description, null, 2)}</pre>
      </div>
      <div>
        <h2>cookTime</h2>
        <pre>{JSON.stringify(cookTime, null, 2)}</pre>
      </div>
      <div>
        <h2>prepTime</h2>
        <pre>{JSON.stringify(prepTime, null, 2)}</pre>
      </div>
      <div>
        <h2>difficulty</h2>
        <pre>{JSON.stringify(difficulty, null, 2)}</pre>
      </div>
      <div>
        <h2>servings</h2>
        <pre>{JSON.stringify(servings, null, 2)}</pre>
      </div>
      <div>
        <h2>authorName</h2>
        <pre>{JSON.stringify(authorName, null, 2)}</pre>
      </div>
      <div>
        <h2>image</h2>
        <pre>{JSON.stringify(image, null, 2)}</pre>
      </div>
      <div>
        <h2>authorImage</h2>
        <pre>{JSON.stringify(authorImage, null, 2)}</pre>
      </div>
      <div>
        <h2>title</h2>
        <pre>{JSON.stringify(title, null, 2)}</pre>
      </div>
      <div>
        <h2>slug</h2>
        <pre>{JSON.stringify(slug, null, 2)}</pre>
      </div>
    </div>
  );
}
RecipeDetail.propTypes = RecipeDetailPropTypes;

RecipeDetail.defaultProps = {
  excludedLocales: null,

  authorImage: null
};

export default RecipeDetail;
