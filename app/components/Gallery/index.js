/**
 *
 * Gallery
 *
 */

import React, { memo } from 'react';
import './style.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import AddIcon from '../../icons/Add';

function Gallery(props = { photos: [] }) {
  const images = props.photos.map((p, i) => (
    <li key={i}>
      <img src={p} />
    </li>
  ));
  return (
    <ul className="gallery">
      <li className="add-photo">
        <AddIcon style={{ width: '20px' }} />
        Add new Photo
      </li>
      {images}
      <li />
    </ul>
  );
}

Gallery.propTypes = {};

export default memo(Gallery);
