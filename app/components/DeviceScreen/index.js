/**
 *
 * DeviceScreen
 *
 */

import React, { memo } from 'react';
import Slideshow from './Slideshow';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function DeviceScreen(props = {
  content_type: "none", slideshow: {
    photos: []
  }, url: String, call_info: {}
}) {
  switch (props.content_type) {
    case "slideshow":
      return (
        <div style={{
          height:"100%",
          borderRadius:"5px",
          backgroundColor:"rgb(15, 15, 15)",
        }}>
          <Slideshow photos={props.slideshow.photos} />
        </div>
      )
    
  }
}

DeviceScreen.propTypes = {};

export default memo(DeviceScreen);
