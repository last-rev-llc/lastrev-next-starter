import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import propTypes from './RichTextParser.propTypes';
import mockContent from './RichTextParser.mock';

export const RichTextParserPropTypes = {
  document: PropTypes.object.isRequired
};

function RichTextParser({ document }) {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // TODO: Replace this with the Image Component.
        const imgUrl = _.get(node, 'data.target.fields.file.url');
        const imgAlt = _.get(node, 'data.target.fields.title');
        if (imgUrl) {
          return <img src={imgUrl} alt={imgAlt} />;
        }
        return null;
      }
    }
  };

  return documentToReactComponents(document, options);
}

RichTextParser.propTypes = propTypes;

RichTextParser.defaultProps = mockContent;

export default RichTextParser;
