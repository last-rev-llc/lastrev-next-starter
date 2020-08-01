import React from 'react';
import PropTypes from 'prop-types';
import contentMapping from '../../buildArtifacts/mapping';

export const ContentModulePropTypes = {
  contentTypeId: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  fields: PropTypes.object.isRequired
};

function ContentModule({ contentTypeId, fields }) {
  const Main = contentMapping[contentTypeId];

  if (!Main) {
    // eslint-disable-next-line no-console
    console.log(
      `Did not find mapping for Content Type ${contentTypeId}. Please add an override to the buid property in .lastrevrc`
    );
    return null;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Main {...fields} />;
}

ContentModule.propTypes = ContentModulePropTypes;

export default ContentModule;
