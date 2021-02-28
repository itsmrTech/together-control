/**
 *
 * DeviceStatus
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';


function DeviceStatus(props) {
  console.log(props)
  return (
    <div style={{fontSize:"2vw",verticalAlign:"center",fontFamily:"NexaLight",display:"flex",flexDirection:"row",width:""}}>
      <div style={{borderRadius:"50%",width:20,height:20,marginRight:10,marginTop:5,backgroundColor:"#32a852"}}></div>
      <span style={{verticalAlign:"sub",color:"#32a852"}}>active</span>
    </div>
  );
}

DeviceStatus.propTypes = {};

export default memo(DeviceStatus);
