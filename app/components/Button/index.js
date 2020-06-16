/**
 *
 * Button
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Button(props = { color: 'black' }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      {...props}
      style={{
        width: 'fit-content',
        alignSelf: 'center',
        borderRadius: '50px',
        border: 'none',
        padding: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        fontFamily: 'NexaBold',
        color: !hover ? props.color : 'white',
        textTransform: 'uppercase',
        cursor: 'pointer',
        margin: '10px',
        backgroundColor: hover ? props.color : 'white',
        transition: 'all 0.5s ease 0s',
        outline: 'none',
        ...props.style,
      }}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      {props.title}
    </button>
  );
}

Button.propTypes = {};

export default memo(Button);
