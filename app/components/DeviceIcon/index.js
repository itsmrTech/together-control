/**
 *
 * NewDeviceMotion
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Frame from "../../icons/Frame"
import "./style.css"

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function DeviceIcon(props={style:{} ,frameStyle:{}, screenStyle:{},containerStyle:{}}) {
  // if(!props.style)props.style={}
  // if(!props.frameStyle)props.frameStyle={}
  // if(!props.screenStyle)props.screenStyle={}
  return (
    <div style={props.containerStyle} className={"device-icon-container "+props.className}>

      <Frame className="not-paired-frame" style={{...props.style,...props.frameStyle}} />
      <div className="not-paired-screen" style={{...props.style,...props.screenStyle}}>
      {props.showInScreen}
      </div>
    </div>
  );
}

DeviceIcon.propTypes = {};

export default memo(DeviceIcon);
