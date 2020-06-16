/**
 *
 * Login
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import UserIcon from '../../icons/User';
import PasswordIcon from '../../icons/Password';
import '../../assets/global-style.css';
import './style.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
const counter = 0;
export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  useEffect(() => {
    // setInterval(() => {
    //   console.log(animationClock)
    //   setAnimationClock(counter)
    //   counter++
    // }, 50)
  }, []);
  const [animationClock, setAnimationClock] = useState(0);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <div className="login-container">
        <div id="panel1">
          <h1
            style={
              {
                // "WebkitMaskImage": `radial-gradient(farthest-corner at 100% 100%, black ${animationClock*5}%, transparent)`
              }
            }
          >
            Let's Spread Some{' '}
            <span style={{ color: 'rgb(181, 67, 104)' }}>❤</span>
          </h1>
        </div>
        <div id="panel2">
          <div className="colorful-card">
            <h2>Login to you Account</h2>
            <Input
              icon={<UserIcon />}
              onValueChanged={value => {
                setUsername(value);
              }}
              dark
              placeholder="Username"
            />
            <Input
              icon={<PasswordIcon />}
              dark
              placeholder="Password"
              type="password"
              onValueChanged={value => {
                setPassword(value);
              }}
            />
            <Button
              title="Login"
              color="#ab3a55"
              style={{ marginTop: '20px' }}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
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
)(Login);
