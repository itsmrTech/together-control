/**
 *
 * NewDeviceMotion
 *
 */

import React, { memo, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Frame from '../../icons/Frame';
// import "./style.css"

import messages from './messages';
import DeviceIcon from '../DeviceIcon';

function NewDeviceMotion(props = {}) {
  const [pairedDeviceFade, setPairedDeviceFade] = useState({});
  const [pairedDeviceScreen, setPairedDeviceScreen] = useState({});
  const [completeSetup, setCompleteSetup] = useState(false);
  useEffect(() => {
    const { completeness } = props;
    console.log('got', completeness);
    if (completeness <= 0) {
      setPairedDeviceFade({});
    } else {
      setPairedDeviceFade({
        animationName: completeness < 100 ? 'none' : 'device-waiting',
        animationDelay: '2s',
        filter: `blur(${(10 * (100 - completeness)) / 100}px)`,
        opacity: (1 * completeness) / 100,
        transform: `rotate(${30 -
          (30 * completeness) / 100}deg) scaleX(1.3) scale(${0.3 +
          (completeness * 0.1) / 100}) translate(${-(
          (300 * completeness) /
          100
        )}px,${-((100 * completeness) / 100)}px)`,
        // scale(0.4) translate(-100px, -100px)
      });
    }
    if (completeness == 100)
      setPairedDeviceScreen({
        background: 'linear-gradient(269deg, #b54368, #ff6b6b)',
        backgroundSize: '400% 400%',

        animation: 'not-paired-screen-pulsing 2s ease infinite',
      });
    else setPairedDeviceScreen({});
  }, [props.completeness]);
  useEffect(() => {
    if (props.status == 'paired')
      setTimeout(() => {
        setCompleteSetup(true);
      }, 5000);
    else setCompleteSetup(false);
  }, [props.status]);
  return (
    <div>
      <DeviceIcon
        className={completeSetup ? 'hide' : ''}
        containerStyle={{
          transform: 'rotate(30deg) scaleX(1.3) scale(0.3)',
          animationDelay: '5s',
          position: 'fixed',
          top: -150,
          right: 70,
        }}
        screenStyle={{ animationDelay: '1s' }}
      />
      <DeviceIcon
        className={completeSetup ? 'hide' : ''}
        containerStyle={{
          transform: 'rotate(30deg) scaleX(1.3) scale(0.3)',
          animationDelay: '1s',
          position: 'fixed',
          top: 10,
          right: 300,
        }}
        screenStyle={{ animationDelay: '0.5s' }}
      />
      <DeviceIcon
        className={completeSetup ? 'hide' : ''}
        containerStyle={{
          transform: 'rotate(30deg) scaleX(1.3) scale(0.3)',
          animationDelay: '15s',
          position: 'fixed',
          top: 180,
          right: 10,
        }}
        screenStyle={{ animationDelay: '1s' }}
      />
      <DeviceIcon
        className={completeSetup ? 'hide' : ''}
        containerStyle={{
          transform: 'rotate(30deg) scaleX(1.3) scale(0.3)',
          animationDelay: '7s',
          position: 'fixed',
          top: -150,
          right: 600,
        }}
        screenStyle={{ animationDelay: '0s' }}
      />
      <DeviceIcon
        className={completeSetup ? 'hide' : ''}
        containerStyle={{
          transform: 'rotate(30deg) scaleX(1.3) scale(0.3)',
          animationDelay: '18s',
          position: 'fixed',
          top: 140,
          right: 600,
        }}
        screenStyle={{ animationDelay: '0s' }}
      />
      {/* User */}
      <DeviceIcon
        containerStyle={{
          transform: 'rotate(30deg) scaleX(1.3) scale(0.3)',
          animationDelay: '3s',
          position: 'fixed',
          top: 300,
          right: 300,
          ...pairedDeviceFade,
        }}
        screenStyle={{
          animationDelay: '0.5s',
          ...pairedDeviceScreen,
          animationDuration:
            props.status != 'idle' || props.status == 'paired' ? '54s' : '30s',
        }}
        showInScreen={
          props.status == 'paired'
            ? !completeSetup
              ? '✔'
              : ''
            : props.status == 'pairing-failed'
              ? '🗙'
              : ''
        }
      />
      <DeviceIcon
        className={completeSetup ? 'hide' : ''}
        containerStyle={{
          transform: 'rotate(30deg) scaleX(1.3) scale(0.3)',
          animationDelay: '24s',
          position: 'fixed',
          top: 470,
          right: 0,
        }}
        screenStyle={{ animationDelay: '1s' }}
      />
      <DeviceIcon
        className={completeSetup ? 'hide' : ''}
        containerStyle={{
          transform: 'rotate(30deg) scaleX(1.3) scale(0.3)',
          animationDelay: '8s',
          position: 'fixed',
          top: 600,
          right: 300,
        }}
        screenStyle={{ animationDelay: '0.5s' }}
      />
      <DeviceIcon
        className={completeSetup ? 'hide' : ''}
        containerStyle={{
          transform: 'rotate(30deg) scaleX(1.3) scale(0.3)',
          animationDelay: '30s',
          position: 'fixed',
          top: 435,
          right: 600,
        }}
        screenStyle={{ animationDelay: '0s' }}
      />
      <DeviceIcon
        className={completeSetup ? 'hide' : ''}
        containerStyle={{
          transform: 'rotate(30deg) scaleX(1.3) scale(0.3)',
          animationDelay: '11s',
          position: 'fixed',
          top: 770,
          right: 10,
        }}
        screenStyle={{ animationDelay: '1s' }}
      />
    </div>
  );
}

NewDeviceMotion.propTypes = {};

export default memo(NewDeviceMotion);
