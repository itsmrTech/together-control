/**
 *
 * Gallery
 *
 */

import React, { memo } from 'react';
import "./style.css"
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import AddIcon from "../../icons/Add"

function Gallery(props = { photos: [] }) {
  let images = props.photos.map(p => {
    return <li><img src={p} /></li>
  })
  return <ul className="gallery">
    <li className="add-photo">
      <AddIcon style={{width:"20px"}} />
      Add new Photo
    </li>
    {images}
    <li></li>
  </ul>;
}

Gallery.propTypes = {};

export default memo(Gallery);
