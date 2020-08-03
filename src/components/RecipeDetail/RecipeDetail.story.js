import React from 'react';
import { withKnobs, text, object, number } from '@storybook/addon-knobs';
import RecipeDetail from './RecipeDetail';
import mockContent from './RecipeDetail.mock';

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
} = mockContent;

export default {
  title: 'RecipeDetail',
  decorators: [withKnobs]
};

export const normal = () => (
  <RecipeDetail
    _id={_id}
    _contentTypeId={_contentTypeId}
    excludedLocales={text('excludedLocales', excludedLocales)}
    similarRecipes={object('similarRecipes', similarRecipes)}
    steps={object('steps', steps)}
    ingredients={object('ingredients', ingredients)}
    description={object('description', description)}
    cookTime={number('cookTime', cookTime)}
    prepTime={number('prepTime', prepTime)}
    difficulty={text('difficulty', difficulty)}
    servings={number('servings', servings)}
    authorName={text('authorName', authorName)}
    image={object('image', image)}
    authorImage={object('authorImage', authorImage)}
    title={text('title', title)}
    slug={text('slug', slug)}
  />
);
