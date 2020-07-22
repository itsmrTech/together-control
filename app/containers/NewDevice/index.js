/**
 *
 * NewDevice
 *
 */

import React, { memo, useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectNewDevice from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './style.css';
import NewDeviceMotion from '../../components/NewDeviceMotion';
import CodeInput from '../../components/CodeInput';
import { pair, loadDevice, setDeviceName } from './actions';
import { useHistory, Redirect } from 'react-router-dom';
import Button from '../../components/Button';

export function NewDevice(props) {
  useInjectReducer({ key: 'newDevice', reducer });
  useInjectSaga({ key: 'newDevice', saga });
  const [completeness, setCompleteness] = useState(0);
  const [status, setStatus] = useState('idle');
  const [pairingSentence, setPairingSentence] = useState(
    'Look at your device and type the shown code here.',
  );
  const [redirect, setRedirect] = useState();
  const [name, setName] = useState('');
  useEffect(() => {
    console.log(props);
    if (!props.match.params) return;
    if (!props.match.params.device_unique_name) return;
    props.doGetDeviceByDUN(props.match.params.device_unique_name);
  }, []);
  useEffect(() => {
    console.log('redirect', props.newDevice.redirect);
    if (props.newDevice.redirect) {
      if (props.newDevice.hard_redirect)
        setRedirect(<Redirect to={props.newDevice.redirect} />);
      else
        window.history.pushState(
          { page: Date.now() },
          'another page',
          props.newDevice.redirect,
        );
    }

    //
  }, [props.newDevice.redirect]);
  useEffect(() => {
    console.log('paired', props);
    if (props.newDevice.paired) {
      if (props.newDevice.device.unique_name && status != 'paired')
        window.history.pushState(
          { page: 'another' },
          'another page',
          `/device-setup/${props.newDevice.device.unique_name}`,
        );
      setStatus('paired');
      setPairingSentence(
        'Great! Almost done. Just choose a name for your new device.',
      );
      setCompleteness(100);

      // window.location.assign("/device-setup/"+props.newDevice.device.code)
    } else if (props.newDevice.error) {
      setStatus('pairing-failed');
      setPairingSentence(props.newDevice.error);
    }
    console.log(status);
  }, [props.newDevice.paired, props.newDevice.error, props.newDevice.ts]);
  return (
    <div>
      {redirect}
      <Helmet>
        <title>NewDevice</title>
        <meta name="description" content="Description of NewDevice" />
      </Helmet>
      <div className="pairing-container">
        <div id="panel1" style={{ width: '50%' }}>
          <h1
            style={{
              fontSize: '50px',
              maxWidth: '50%',
              color: '#C14A69',
              marginBottom: 0,
            }}
          >
            {pairingSentence}
          </h1>
          {status == 'pairing-failed' ? (
            <h5 style={{ color: 'rgb(138, 138, 138)' }}>
              If there isn't any code, restart your device and make sure it is
              connected to the internet.
            </h5>
          ) : (
            undefined
          )}
          {status != 'paired' ? (
            <CodeInput
              length={4}
              autoFocus
              disabled={status != 'idle' && status != 'pairing-failed'}
              onCodeChange={code => {
                console.log('code', code);
                setCompleteness((100 * code.length) / 4);
                setStatus('idle');
                setPairingSentence(
                  'Look at your device and type the shown code here.',
                );
                if (code.length == 4) {
                  setPairingSentence('Just a sec...');
                  setStatus('pairing');
                  props.doPair(code);
                }
              }}
            />
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                width: 'fit-content',
              }}
            >
              <input
                autoFocus
                className="underlined-input"
                type="text"
                maxLength={20}
                name="name"
                placeholder="Type it right here"
                onChange={event => {
                  setName(event.target.value);
                }}
              />
              <Button
                title="Submit"
                color="#EB606A"
                secondColor="#B64468"
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  marginTop: '50px',
                }}
                dark
                disabled={name.length == 0}
                onClick={() => {
                  props.doSetDeviceName(
                    name,
                    props.newDevice.device.unique_name,
                  );
                }}
              />
            </div>
          )}
        </div>
        <div id="panel2">
          <NewDeviceMotion completeness={completeness} status={status} />
        </div>
      </div>
    </div>
  );
}

NewDevice.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  newDevice: makeSelectNewDevice(),
});

function mapDispatchToProps(dispatch) {
  return {
    doPair: pairing_code => {
      dispatch(pair(pairing_code));
    },
    doGetDeviceByDUN: device_unique_name => {
      dispatch(loadDevice(device_unique_name));
    },
    doSetDeviceName: (name, device_unique_name) => {
      dispatch(setDeviceName(name, device_unique_name));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(NewDevice);
