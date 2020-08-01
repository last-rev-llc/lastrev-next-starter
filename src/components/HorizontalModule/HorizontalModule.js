import React from 'react';
import PropTypes from 'prop-types';
import styles from './HorizontalModule.module.scss';
import TextModule, { TextModulePropTypes } from '../TextModule';
import Asset, { AssetPropTypes } from '../Asset';

export const HorizontalModulePropTypes = {
  textModule: PropTypes.shape(TextModulePropTypes).isRequired,
  image: PropTypes.shape(AssetPropTypes).isRequired
};

function HorizontalModule({ textModule, image }) {
  return (
    <div data-testid="HorizontalModule" className={styles.horizontal_module}>
      {textModule ? (
        <TextModule
          _id={textModule._id}
          textJustification={textModule.textJustification}
          link={textModule.link}
          bodySize={textModule.bodySize}
          title={textModule.title}
          supertitle={textModule.supertitle}
          body={textModule.body}
          icon={textModule.icon}
        />
      ) : null}
      {image ? (
        <Asset
          contentType={image.contentType}
          filename={image.filename}
          height={image.height}
          size={image.size}
          title={image.title}
          url={image.url}
          width={image.width}
        />
      ) : null}
    </div>
  );
}
HorizontalModule.propTypes = HorizontalModulePropTypes;

HorizontalModule.defaultProps = {};

export default HorizontalModule;
