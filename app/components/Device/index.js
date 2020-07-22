/**
 *
 * Device
 *
 */

import React, { memo } from 'react';
import './style.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import DeviceScreen from '../DeviceScreen';

function Device(props) {
  return (
    <div className={`border ${props.className}`}>
      <DeviceScreen
        content_type={props.content_type}
        onUserMedia={props.onUserMedia}
        slideshow={props.slideshow}
      />
    </div>
  );
}

Device.propTypes = {};

export default memo(Device);
