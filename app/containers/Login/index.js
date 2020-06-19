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
import { login } from './actions';
import { Redirect } from 'react-router-dom';
const counter = 0;
export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });



  const [animationClock, setAnimationClock] = useState(0);
  const [email, setEmail] = useState("shamot.group@gmail.com");
  const [password, setPassword] = useState("123");
  const [redirect, setRedirect] = useState();
  useEffect(() => {
    console.log(props.login)
    if (props.login.token && props.login.token != "") {
      if (props.login.devices.length > 1) {
        setRedirect(<Redirect to="/devices" />)
      }
      else if (props.login.devices.length == 1)
        setRedirect(<Redirect to="/control" />)
      else setRedirect(<Redirect to="/devices/new" />)
    }
  }, [props.login.token])
  return (
    <div>
      {redirect}
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
              onChange={event => {
                setEmail(event.target.value);
              }}
              dark
              placeholder="Email"
            />
            <Input

              icon={<PasswordIcon />}
              dark
              placeholder="Password"
              type="password"
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
            <Button
              title="Login"
              color="#ab3a55"
              style={{ marginTop: '20px' }}
              onClick={function () {

                console.log(props);
                props.doLogin(email, password)

              }}
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
    doLogin: (email, password) => {
      dispatch(login(email, password));
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
)(Login);
