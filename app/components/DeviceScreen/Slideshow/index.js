/**
 *
 * Slideshow
 *
 */

import React, { memo } from 'react';
import './style.css'
// import PropTypes from 'prop-types';
// import styled from 'styled-components';


function Slideshow(props = { photos: [] }) {
  let slides = props.photos.map((photo, i) => {
    return <div style={{
      backgroundImage: `url('${photo}')`,
      animationDelay: `${i * 5}s`,
      top: `${i*-100}%`}} key={i}>
    </div>
  })
  return <div id="slideshow" className='slideshow'>
    {slides}
  </div>;
}

Slideshow.propTypes = {};

export default memo(Slideshow);
