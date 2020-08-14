/**
 *
 * Gallery
 *
 */

import React, { memo } from 'react';
import './style.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import AddIcon from '../../icons/Add';

const Packery = packeryComp(React);
function Gallery(props = { photos: [] }) {
  const images = props.photos.map((p, i) => (
    <li key={i}>
      <img src={p} />
    </li>
  ));
  return (
      <ul className="gallery">
      <li className="add-photo">
        <Dropzone onDrop={acceptedFiles => props.onDrop(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()} style={{ outline: 'none' }}>
                <input {...getInputProps()} />
                <AddIcon style={{ width: '20px' }} />

                <p>Add new Photo</p>
              </div>
            </section>
          )}
        </Dropzone>
      </li>
      {images}
      <li />
      </ul>
  );
}

Gallery.propTypes = {};

export default memo(Gallery);
