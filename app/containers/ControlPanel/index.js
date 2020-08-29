/**
 *
 * ControlPanel
 *
 */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectControlPanel from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import DeviceScreen from '../../components/DeviceScreen';
import Device from '../../components/Device';
import './style.css';
import GroupButton from '../../components/GroupButton';
import Gallery from '../../components/Gallery';

import CallIcon from '../../icons/Call';
import HangUpIcon from '../../icons/HangUp';
import GalleryIcon from '../../icons/Gallery';
import LinkIcon from '../../icons/Link';
import {
  loadSlideshow,
  startCall,
  createPeer,
  uploadPicture,
  hangupCall,
} from './actions';
import Loading from '../../components/Loading';
import SimplePeer from 'simple-peer';

const startVideoCall = () => {};
export function ControlPanel(props) {
  useInjectReducer({ key: 'controlPanel', reducer });
  useInjectSaga({ key: 'controlPanel', saga });

  // var peer;
  const [geekyMode, setGeekyMode] = useState(false);
  const [call, setCall] = useState(false);
  const [callLoading, setCallLoading] = useState(true);
  const [callConnected, setCallConnected] = useState(false);
  const [signalFunc, setSignalFunc] = useState(true);
  const deviceWebcam = useRef();
  const galleryRef = useRef();
  // const [peer,setPeer]=useState(true)
  // const [peer,setPeer]=useState()
  useEffect(() => {
    console.log(props);
    if (!props.match.params) return props.onLoad();
    if (!props.match.params.device_unique_name) return props.onLoad();
    props.onLoad(props.match.params.device_unique_name);
  }, []);
  useEffect(() => {
    // setCallConnected(props.controlPanel.callConnected)
    if (props.controlPanel.peer) {
      setTimeout(() => {
        console.log('after a while', props.controlPanel.peer);
      }, 3000);
      props.controlPanel.peer.on('signal', function(data) {
        console.log('sig', data);

        props.doStartCall(props.controlPanel.device.unique_name, data);
        // setSignalFunc((signal)=>{
        //   if(!signal)return
        //   console.log("called func")
        //   props.controlPanel.peer.signal(signal)
        // })
      });
      props.controlPanel.peer.on('stream', function(stream) {
        setCallConnected(true);
        setCallLoading(false);
        console.log('stream got', stream);
        deviceWebcam.current.srcObject = stream;
        deviceWebcam.current.play();
      });
    }
  }, [props.controlPanel.peer]);
  useEffect(() => {
    if (props.controlPanel.deviceSignal && callConnected == false) {
      // console.log("ds",props.controlPanel.callConnected)
      console.log('ds', props.controlPanel.deviceSignal, signalFunc);
      props.controlPanel.peer.signal(props.controlPanel.deviceSignal);
      // peer.signal(props.controlPanel.callConnected)
    }
  }, [props.controlPanel.deviceSignal]);

  return (
    <div>
      <Helmet>
        <title>ControlPanel</title>
        <meta name="description" content="Description of ControlPanel" />
      </Helmet>

      <div
        className="container"
        style={{ backgroundColor: call ? '#444' : undefined }}
      >
        <span
          className={`title ${geekyMode ? 'title-detailed' : ''} ${
            call ? 'title-in-call' : ''
          }`}
        >
          {props.controlPanel.device.name}
        </span>
        <Device
          className={
            call ? 'picture-in-picture' : geekyMode ? 'rotated-device' : ''
          }
          slideshow={props.controlPanel.slideshow}
          content_type={call ? 'webcam' : 'slideshow'}
          onUserMedia={stream => {
            props.doCreatePeer(stream);
            // peer=new SimplePeer({
            //   initiator: true,
            //   trickle: false,
            //   stream: stream
            // });

            // peer.on('signal', function (data) {
            //   console.log("sig",data)

            //   props.doStartCall(props.controlPanel.device.unique_name, data);
            //   // setSignalFunc((signal)=>{
            //   //   if(!signal)return
            //   //   console.log("called func")
            //   //   peer.signal(signal)
            //   // })
            // });
            // peer.on('stream', function (stream) {
            //   setCallLoading(false)
            //   let video=document.getElementById("device-webcam")
            //   video.srcObject=stream
            //   video.play()
            // })
          }}
        />
        {call ? (
          <div>
            <div className="call-section">
              {callLoading ? (
                <Loading color="#b54368" />
              ) : (
                <video
                  style={{ width: '100%' }}
                  ref={deviceWebcam}
                  id="device-webcame"
                />
              )}
            </div>
            <div style={{ position: 'relative', height: '60vh' }} />
          </div>
        ) : (
          undefined
        )}
        <a
          onClick={() => setGeekyMode(!geekyMode)}
          className={geekyMode ? 'geeky-mode-active' : 'geeky-mode'}
          href="#geeky-mode"
        >
          {'<geeky mode />'}
        </a>
        <GroupButton
          buttons={[
            {
              title: 'Gallery',
              icon: <GalleryIcon />,
              color: '#c5006a',
              onClick: () => {
                galleryRef.current.scrollIntoView({ behavior: 'smooth' });
              },
            },
            {
              title: 'Link',
              icon: <LinkIcon />,
              color: '#03a9ff',
              onClick: () => {},
            },
            {
              title: 'Call',
              icon: !call ? <CallIcon /> : <HangUpIcon />,
              color: !call ? '#00b73c' : 'red',
              onClick: () => {
                if (call) {
                  props.doHangupCall(props.controlPanel.device.unique_name);
                }
                setCall(!call);
              },
            },
          ]}
        />
        <div
          ref={galleryRef}
          style={{ backgroundColor: '#FAFAFA', borderRadius: '20px' }}
        >
          <Gallery
            photos={props.controlPanel.slideshow.photos}
            onDrop={files => {
              props.doUploadPicture(
                files,
                props.controlPanel.device.unique_name,
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}

ControlPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  controlPanel: makeSelectControlPanel(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad: device_unique_name => {
      dispatch(loadSlideshow(device_unique_name));
    },
    doStartCall: (device_unique_name, signal) => {
      dispatch(startCall(signal, device_unique_name));
    },
    doHangupCall: device_unique_name => {
      dispatch(hangupCall(device_unique_name));
    },
    doCreatePeer: stream => {
      dispatch(createPeer(stream));
    },
    doUploadPicture: (files, device_unique_name) => {
      dispatch(uploadPicture(files, device_unique_name));
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ControlPanel);
