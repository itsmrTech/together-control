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

function Button(props = { color: 'black', secondColor: 'white' }) {
  let { dark, secondColor, disabledColor = 'grey', disabled } = props;
  const [hover, setHover] = useState(dark);
  if (!secondColor) secondColor = 'white';
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
        cursor: disabled ? '' : 'pointer',
        margin: '10px',
        backgroundColor: !disabled
          ? hover
            ? props.color
            : secondColor
          : disabledColor,
        transition: 'all 0.5s ease 0s',
        outline: 'none',
        ...props.style,
      }}
      onMouseLeave={() => {
        if (!disabled) setHover(dark);
      }}
      onMouseEnter={() => {
        if (!disabled) setHover(!dark);
      }}
    >
      {props.title}
    </button>
  );
}

Button.propTypes = {};

export default memo(Button);
