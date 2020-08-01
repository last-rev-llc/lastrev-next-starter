import React from 'react';
import PropTypes from 'prop-types';
import Head, { HeadPropTypes } from '../Head';
import styles from './Layout.module.scss';
import getSettings from '../../buildArtifacts/settings';
import GlobalFooter from '../GlobalFooter';
import TopNavBar from '../TopNavBar';

export const LayoutPropTypes = {
  children: PropTypes.node.isRequired,
  seo: PropTypes.shape(HeadPropTypes)
};

function Layout({ seo, children }) {
  const settings = getSettings();
  const { topNavBar, globalFooter } = settings;

  return (
    <div className={styles.main}>
      <Head title={seo.title} description={seo.description} keywords={seo.keywords} />
      {topNavBar ? (
        <TopNavBar
          _id={topNavBar._id}
          logoUrl={topNavBar.logoUrl}
          logo={topNavBar.logo}
          topNavItems={topNavBar.topNavItems}
          style={topNavBar.style}
        />
      ) : null}
      {children}

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {globalFooter ? <GlobalFooter {...globalFooter} /> : null}
    </div>
  );
}

Layout.propTypes = LayoutPropTypes;

Layout.defaultProps = {
  seo: null
};

export default Layout;
