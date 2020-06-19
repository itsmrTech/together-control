/**
 *
 * NewDevice
 *
 */

import React, { memo, useState,useEffect } from 'react';
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
import "./style.css"
import NewDeviceMotion from "../../components/NewDeviceMotion"
import CodeInput from "../../components/CodeInput"
import { pair } from './actions';

export function NewDevice(props) {
  useInjectReducer({ key: 'newDevice', reducer });
  useInjectSaga({ key: 'newDevice', saga });
  const [completeness, setCompleteness] = useState(0);
  const [paired,setPaired]=useState(props.paired)
  const [status,setStatus]=useState("idle")
  const [pairingSentence,setPairingSentence]=useState("Look at your device and type the shown code here.")
  useEffect(()=>{
    console.log("paired",props.newDevice.paired)
    setPaired(props.newDevice.paired)
    if(props.newDevice.paired)setStatus("paired")
    else if(props.newDevice.error)  {
      setStatus("pairing-failed");
      setPairingSentence(props.newDevice.error)
    }
  },[props.newDevice.paired,props.newDevice.error,props.newDevice.ts])
  return (
    <div>
      <Helmet>
        <title>NewDevice</title>
        <meta name="description" content="Description of NewDevice" />
      </Helmet>
      <div className="pairing-container">
        <div id="panel1">
          <h1 style={{
            fontSize:"50px",
            maxWidth:"50%",
            color:"#C14A69",
            marginBottom:0
          }}>{pairingSentence}</h1>
          {(status=="pairing-failed")?<h5 style={{color:"rgb(138, 138, 138)"}}>If there isn't any code, restart your device and make sure it is connected to the internet.</h5>:undefined}
          <CodeInput length={4} autoFocus disabled={status!="idle"&&status!="pairing-failed"} onCodeChange={(code) => {
            console.log("code", code)
            setCompleteness(100 * code.length / 4)
            setStatus("idle")
            setPairingSentence("Look at your device and type the shown code here.")
            if (code.length == 4) {
              setPairingSentence("Just a sec...")
              setStatus("pairing")
              props.doPair(code)
            }
          }}
             />
        </div>
        <div id="panel2">
          <NewDeviceMotion completeness={completeness}  status={status}/>
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
    doPair: (pairing_code) => {
      dispatch(pair(pairing_code));
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
