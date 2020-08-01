import React from 'react';
import PropTypes from 'prop-types';
import styles from './LocalePickerSubmodule.module.scss';
import { ElementLinkPropTypes } from '../ElementLink';

export const LocalePickerSubmodulePropTypes = {
  _id: PropTypes.string.isRequired,
  _contentTypeId: PropTypes.string.isRequired,
  languageLinks: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(ElementLinkPropTypes)])).isRequired,
  country: PropTypes.string.isRequired
};

function LocalePickerSubmodule({ _id, _contentTypeId, languageLinks, country }) {
  return (
    <div data-testid="LocalePickerSubmodule" className={styles.locale_picker_submodule}>
      <div>
        <h2>_id</h2>
        <pre>{JSON.stringify(_id, null, 2)}</pre>
      </div>
      <div>
        <h2>_contentTypeId</h2>
        <pre>{JSON.stringify(_contentTypeId, null, 2)}</pre>
      </div>
      <div>
        <h2>languageLinks</h2>
        <pre>{JSON.stringify(languageLinks, null, 2)}</pre>
      </div>
      <div>
        <h2>country</h2>
        <pre>{JSON.stringify(country, null, 2)}</pre>
      </div>
    </div>
  );
}
LocalePickerSubmodule.propTypes = LocalePickerSubmodulePropTypes;

LocalePickerSubmodule.defaultProps = {};

export default LocalePickerSubmodule;
