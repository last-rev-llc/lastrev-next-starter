import React from 'react';
import Head from 'next/head';
import propTypes from './Layout.propTypes';
import GlobalHeader from '../GlobalHeader';
import GlobalFooter from '../GlobalFooter';

function Layout({ settingsGlobal, children }) {
  return (
    <>
      <Head>
        <title>Last Rev - NextJS - Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='wrap' role='document'>
        <GlobalHeader />
        <div className='content'>
          <main className='main'>
            {children}
          </main>
        </div>
        <GlobalFooter />
      </div>
    </>
  );
}


Layout.propTypes = propTypes;


export default Layout;