import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageGeneral.module.scss';
import { StandardHeroPropTypes } from '../StandardHero';
import { TextModulePropTypes } from '../TextModule';
import { HorizontalModulePropTypes } from '../HorizontalModule';
import ContentModule from '../ContentModule';
import sidekick from '../../utils/sidekick';

export const PageGeneralPropTypes = {
  _id: PropTypes.string.isRequired,
  _contentTypeId: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape(StandardHeroPropTypes),
      PropTypes.shape(TextModulePropTypes),
      PropTypes.shape(HorizontalModulePropTypes)
    ])
  ).isRequired,
  pageTitle: PropTypes.string.isRequired
};

function PageGeneral({ _id, content, pageTitle }) {
  return (
    <div data-testid="PageGeneral" className={styles.page_general}>
      <h1 {...sidekick(_id, 'pageTitle')}>{pageTitle}</h1>
      {content.map((contentModule) => (
        <ContentModule contentTypeId={contentModule.contentTypeId} fields={contentModule} />
      ))}
    </div>
  );
}
PageGeneral.propTypes = PageGeneralPropTypes;

PageGeneral.defaultProps = {};

export default PageGeneral;
