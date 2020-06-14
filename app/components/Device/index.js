/**
 *
 * Device
 *
 */

import React, { memo } from 'react';
import './style.css'
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import DeviceScreen from '../DeviceScreen';

function Device(props) {
  return (
    <div className={`border ${props.className}`}>
      <DeviceScreen content_type="slideshow" slideshow={{"_id":"5ee1dc2007e4ea7964ccc1ce","photos":["https://www.topfivebuzz.com/wp-content/uploads/2017/07/family-road-trip-1280x720.jpg","https://cdn.tourradar.com/s3/content-pages/533/1024x768/2Wb5Hf.jpeg","https://www.ministylehacker.com/wp-content/uploads/2018/12/IMG_20181130_173721-1024x768@2x.jpeg","https://lovetaza.com/wp-content/uploads/2016/06/Naomi2.gif","https://i.pinimg.com/originals/72/fb/13/72fb13f98c7f703cba89e6e741009795.jpg","https://images.unsplash.com/photo-1591860801311-110439814ec9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"],"device":"5ee1dbfd07e4ea7964ccc1cd","updatedAt":"2020-06-11T14:32:55.669Z"}} />
      
    </div>
  );
}

Device.propTypes = {};

export default memo(Device);
