/**
 *
 * CodeInput
 *
 */

import React, { memo } from 'react';
import "./style.css"
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CodeInput(props={length:4}) {
  
  return (
    <div className="code-input">
      <input type="text" onChange={(event)=>props.onCodeChange(event.target.value)} maxLength={props.length} style={{width:`${((props.length+1)*2)}ch`}} {...props} />
      
    </div>
  );
}

CodeInput.propTypes = {};

export default memo(CodeInput);
