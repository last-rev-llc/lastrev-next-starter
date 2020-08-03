import React from 'react';
import PropTypes from 'prop-types';
import styles from './Asset.module.scss';

export const AssetPropTypes = {
  contentType: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};

function Asset({ contentType, filename, height, size, title, url, width }) {
  return (
    <div data-testid="Asset" className={styles.data}>
      <table className="table table-bordered m-0">
        <tbody>
          <tr>
            <th scope="row">contentType</th>
            <td>{contentType}</td>
          </tr>
          <tr>
            <th scope="row">filename</th>
            <td>{filename}</td>
          </tr>
          <tr>
            <th scope="row">url</th>
            <td>{url}</td>
          </tr>
          <tr>
            <th scope="row">width</th>
            <td>{width}</td>
          </tr>
          <tr>
            <th scope="row">height</th>
            <td>{height}</td>
          </tr>
          <tr>
            <th scope="row">size</th>
            <td>{size}</td>
          </tr>
          <tr>
            <th scope="row">title</th>
            <td>{title}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Asset.propTypes = AssetPropTypes;

export default Asset;
