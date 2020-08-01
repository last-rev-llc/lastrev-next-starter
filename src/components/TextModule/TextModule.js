import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextModule.module.scss';
import { ElementLinkPropTypes } from '../ElementLink';
import { AssetPropTypes } from '../Asset';

export const TextModulePropTypes = {
  _id: PropTypes.string.isRequired,
  _contentTypeId: PropTypes.string.isRequired,
  textJustification: PropTypes.string.isRequired,
  link: PropTypes.shape(ElementLinkPropTypes),
  bodySize: PropTypes.string,
  title: PropTypes.string.isRequired,
  supertitle: PropTypes.string,
  body: PropTypes.string,
  icon: PropTypes.shape(AssetPropTypes)
};

function TextModule({ _id, _contentTypeId, textJustification, link, bodySize, title, supertitle, body, icon }) {
  return (
    <div data-testid="TextModule" className={styles.text_module}>
      <div>
        <h2>_id</h2>
        <pre>{JSON.stringify(_id, null, 2)}</pre>
      </div>
      <div>
        <h2>_contentTypeId</h2>
        <pre>{JSON.stringify(_contentTypeId, null, 2)}</pre>
      </div>
      <div>
        <h2>textJustification</h2>
        <pre>{JSON.stringify(textJustification, null, 2)}</pre>
      </div>
      <div>
        <h2>link</h2>
        <pre>{JSON.stringify(link, null, 2)}</pre>
      </div>
      <div>
        <h2>bodySize</h2>
        <pre>{JSON.stringify(bodySize, null, 2)}</pre>
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
        <h2>body</h2>
        <pre>{JSON.stringify(body, null, 2)}</pre>
      </div>
      <div>
        <h2>icon</h2>
        <pre>{JSON.stringify(icon, null, 2)}</pre>
      </div>
    </div>
  );
}
TextModule.propTypes = TextModulePropTypes;

TextModule.defaultProps = {
  link: null,
  bodySize: null,

  supertitle: null,
  body: null,
  icon: null
};

export default TextModule;
