/**
 *
 * GroupButton
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import "./style.css"

function GroupButton(props={buttons:[]}) {
  const [hover,setHover]=useState(-1)
  
  let buttons=props.buttons.map((b,i)=>{
    return <li onMouseEnter={()=>{
      setHover(i)
      console.log(hover,(hover===i)?b.color:"none")
    }} onMouseLeave={()=>setHover(-1)} key={i}>
      {React.cloneElement(b.icon,{style:{
      fill:(hover==i)?b.color:"unset"
    }})}
    </li>
  })
  
  return (
    <ul className="group-button">
      {buttons}
    </ul>
  );
}

GroupButton.propTypes = {};

export default memo(GroupButton);
