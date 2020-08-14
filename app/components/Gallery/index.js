/**
 *
 * Gallery
 *
 */

import React, { memo } from 'react';
import packeryComp from "react-packery-component"
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
    <Packery className="gallery" elementType="ul" disableImagesLoaded={false} options={{}}>

      {/* <li className="add-photo">
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
      </li> */}
      {images}
      <li />
    </Packery>

  );
}

Gallery.propTypes = {};

export default memo(Gallery);
