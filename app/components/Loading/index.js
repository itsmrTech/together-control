/**
 *
 * Loading
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style.css';

function Loading(props) {
  return (
    <div className="loading-pulse" style={{ backgroundColor: props.color }} />
  );
}

Loading.propTypes = {};

export default memo(Loading);
