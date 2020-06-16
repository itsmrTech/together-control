/**
 *
 * Input
 *
 */

import React, { memo, cloneElement } from 'react';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Input(props) {
  return (
    <div style={{ width: 'fit-content', alignSelf: 'center' }}>
      {props.icon
        ? cloneElement(props.icon, {
          style: {
            maxWidth: '20px',
            maxHeight: '20px',
            color: props.dark ? 'white' : 'black',
            position: 'absolute',
            marginTop: '20px',
            marginLeft: '20px',
          },
        })
        : undefined}

      <input
        style={{
          margin: '10px',
          border: 'none',
          borderRadius: '100px',
          height: '40px',
          backgroundColor: props.dark
            ? 'rgba(0,0,0,0.1)'
            : 'rgba(255,255,255,0.1)',
          textAlign: 'left',
          paddingLeft: '40px',
          paddingRight: '20px',
          outline: 'none',
          color: props.dark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)',
        }}
        {...props}
      />
    </div>
  );
}

Input.propTypes = {};

export default memo(Input);
