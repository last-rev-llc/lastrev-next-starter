import React from 'react';
import PropTypes from 'prop-types';
import styles from './GlobalFooter.module.scss';
import { ElementLinkPropTypes } from '../ElementLink';
import { AssetPropTypes } from '../Asset';

export const GlobalFooterPropTypes = {
  _id: PropTypes.string.isRequired,
  _contentTypeId: PropTypes.string.isRequired,
  column1Header: PropTypes.string.isRequired,
  column2Header: PropTypes.string.isRequired,
  column3Header: PropTypes.string.isRequired,
  column4Links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(ElementLinkPropTypes)])).isRequired,
  copyright: PropTypes.string.isRequired,
  utilityNavs: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(ElementLinkPropTypes)])).isRequired,
  socialLink: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(ElementLinkPropTypes)])).isRequired,
  column3Links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(ElementLinkPropTypes)])).isRequired,
  column4Header: PropTypes.string.isRequired,
  column1Links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(ElementLinkPropTypes)])).isRequired,
  logoUrl: PropTypes.string.isRequired,
  column2Links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(ElementLinkPropTypes)])).isRequired,
  logo: PropTypes.shape(AssetPropTypes).isRequired,
  style: PropTypes.string.isRequired
};

function GlobalFooter({
  _id,
  _contentTypeId,
  column1Header,
  column2Header,
  column3Header,
  column4Links,
  copyright,
  utilityNavs,
  socialLink,
  column3Links,
  column4Header,
  column1Links,
  logoUrl,
  column2Links,
  logo,
  style
}) {
  return (
    <div data-testid="GlobalFooter" className={styles.global_footer}>
      <div>
        <h2>_id</h2>
        <pre>{JSON.stringify(_id, null, 2)}</pre>
      </div>
      <div>
        <h2>_contentTypeId</h2>
        <pre>{JSON.stringify(_contentTypeId, null, 2)}</pre>
      </div>
      <div>
        <h2>column1Header</h2>
        <pre>{JSON.stringify(column1Header, null, 2)}</pre>
      </div>
      <div>
        <h2>column2Header</h2>
        <pre>{JSON.stringify(column2Header, null, 2)}</pre>
      </div>
      <div>
        <h2>column3Header</h2>
        <pre>{JSON.stringify(column3Header, null, 2)}</pre>
      </div>
      <div>
        <h2>column4Links</h2>
        <pre>{JSON.stringify(column4Links, null, 2)}</pre>
      </div>
      <div>
        <h2>copyright</h2>
        <pre>{JSON.stringify(copyright, null, 2)}</pre>
      </div>
      <div>
        <h2>utilityNavs</h2>
        <pre>{JSON.stringify(utilityNavs, null, 2)}</pre>
      </div>
      <div>
        <h2>socialLink</h2>
        <pre>{JSON.stringify(socialLink, null, 2)}</pre>
      </div>
      <div>
        <h2>column3Links</h2>
        <pre>{JSON.stringify(column3Links, null, 2)}</pre>
      </div>
      <div>
        <h2>column4Header</h2>
        <pre>{JSON.stringify(column4Header, null, 2)}</pre>
      </div>
      <div>
        <h2>column1Links</h2>
        <pre>{JSON.stringify(column1Links, null, 2)}</pre>
      </div>
      <div>
        <h2>logoUrl</h2>
        <pre>{JSON.stringify(logoUrl, null, 2)}</pre>
      </div>
      <div>
        <h2>column2Links</h2>
        <pre>{JSON.stringify(column2Links, null, 2)}</pre>
      </div>
      <div>
        <h2>logo</h2>
        <pre>{JSON.stringify(logo, null, 2)}</pre>
      </div>
      <div>
        <h2>style</h2>
        <pre>{JSON.stringify(style, null, 2)}</pre>
      </div>
    </div>
  );
}
GlobalFooter.propTypes = GlobalFooterPropTypes;

GlobalFooter.defaultProps = {};

export default GlobalFooter;
