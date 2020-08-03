import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Contentful from '@last-rev/integration-contentful';
import ContentModule from '../ContentModule';
import adapterConfig from '../../buildArtifacts/adapterConfig';
import PageGeneral from '../PageGeneral';
import Layout from '../Layout';
import styles from './PreviewWrapper.module.scss';

const { getFullContentById } = Contentful(adapterConfig);

export const PreviewWrapperPropTypes = {
  id: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  locale: PropTypes.string
};

function Wrapper({ children, contentType, slug }) {
  return slug ? <Layout>{children}</Layout> : <div className={styles[contentType]}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  contentType: PropTypes.string.isRequired,
  slug: PropTypes.string
};

Wrapper.defaultProps = {
  slug: null
};

function PreviewWrapper({ id, contentType, locale }) {
  if (!id && !contentType) return null;
  const [content, setContent] = useState();
  useEffect(() => {
    (async () => {
      const myContent = await getFullContentById({ contentType, id, locale, include: 10 });
      setContent(myContent);
    })();
  }, []);
  if (!content) return null;

  const { slug } = content;

  const fields = contentType === 'settingsGlobal' ? { settingsGlobal: content } : content;

  return (
    <Wrapper contentType={contentType} slug={slug}>
      {contentType === 'pageGeneral' ? (
        // Page General is excluded from the ContentModule to avoid circular references. If this is a page general, call the cmp directly.
        // eslint-disable-next-line react/jsx-props-no-spreading
        <PageGeneral {...fields} />
      ) : (
        <ContentModule contentTypeId={contentType} fields={fields} />
      )}
    </Wrapper>
  );
}

PreviewWrapper.propTypes = PreviewWrapperPropTypes;

PreviewWrapper.defaultProps = {
  locale: null
};

export default PreviewWrapper;
