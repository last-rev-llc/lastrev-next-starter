import React from 'react';
import PropTypes from 'prop-types';
import styles from './StandardHero.module.scss';
import { AssetPropTypes } from '../Asset';

export const StandardHeroPropTypes = {
  _id: PropTypes.string.isRequired,
  _contentTypeId: PropTypes.string.isRequired,
  scrollText: PropTypes.string.isRequired,
  body: PropTypes.string,
  locatorForm: PropTypes.bool,
  textTheme: PropTypes.string.isRequired,
  textJustification: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  supertitle: PropTypes.string,
  image: PropTypes.shape(AssetPropTypes).isRequired
};

function StandardHero({
  _id,
  _contentTypeId,
  scrollText,
  body,
  locatorForm,
  textTheme,
  textJustification,
  subtitle,
  title,
  supertitle,
  image
}) {
  return (
    <div data-testid="StandardHero" className={styles.standard_hero}>
      <div>
        <h2>_id</h2>
        <pre>{JSON.stringify(_id, null, 2)}</pre>
      </div>
      <div>
        <h2>_contentTypeId</h2>
        <pre>{JSON.stringify(_contentTypeId, null, 2)}</pre>
      </div>
      <div>
        <h2>scrollText</h2>
        <pre>{JSON.stringify(scrollText, null, 2)}</pre>
      </div>
      <div>
        <h2>body</h2>
        <pre>{JSON.stringify(body, null, 2)}</pre>
      </div>
      <div>
        <h2>locatorForm</h2>
        <pre>{JSON.stringify(locatorForm, null, 2)}</pre>
      </div>
      <div>
        <h2>textTheme</h2>
        <pre>{JSON.stringify(textTheme, null, 2)}</pre>
      </div>
      <div>
        <h2>textJustification</h2>
        <pre>{JSON.stringify(textJustification, null, 2)}</pre>
      </div>
      <div>
        <h2>subtitle</h2>
        <pre>{JSON.stringify(subtitle, null, 2)}</pre>
      </div>
      <div>
        <h2>title</h2>
        <pre>{JSON.stringify(title, null, 2)}</pre>
      </div>
      <div>
        <h2>supertitle</h2>
        <pre>{JSON.stringify(supertitle, null, 2)}</pre>
      </div>
      <div>
        <h2>image</h2>
        <pre>{JSON.stringify(image, null, 2)}</pre>
      </div>
    </div>
  );
}
StandardHero.propTypes = StandardHeroPropTypes;

StandardHero.defaultProps = {
  body: null,
  locatorForm: null,

  subtitle: null,

  supertitle: null
};

export default StandardHero;
