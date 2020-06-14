/**
 *
 * ControlPanel
 *
 */

import React, { useState } from 'react';
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
import './style.css'
import GroupButton from '../../components/GroupButton';
import Gallery from "../../components/Gallery"

import CallIcon from "../../icons/Call"
import GalleryIcon from "../../icons/Gallery"
import LinkIcon from "../../icons/Link"

export function ControlPanel() {
  useInjectReducer({ key: 'controlPanel', reducer });
  useInjectSaga({ key: 'controlPanel', saga });

const [geekyMode,setGeekyMode]=useState(false)

  return (
    <div>
      <Helmet>
        <title>ControlPanel</title>
        <meta name="description" content="Description of ControlPanel" />
      </Helmet>

      <div className="container">
        <span className={`title ${(geekyMode)?"title-detailed":""}`}>Device Name</span>
        <Device className={(geekyMode)?"rotated-device":""} />
        <a onClick={()=>setGeekyMode(!geekyMode)} className={(geekyMode)?"geeky-mode-active":"geeky-mode"} href="#geeky-mode" >{"<geeky mode />"}</a>
        <GroupButton buttons={[{ title: "Gallery", icon: <GalleryIcon />,color:"#c5006a" }, { title: "Link", icon: <LinkIcon />,color:"#03a9ff" }, { title: "Call", icon: <CallIcon />,color:"#00b73c" },]} />
        <Gallery photos={["https://i.pinimg.com/originals/dd/59/4e/dd594e241abf617abed2b7d586c19ef9.jpg","https://www.topfivebuzz.com/wp-content/uploads/2017/07/family-road-trip-1280x720.jpg","https://cdn.tourradar.com/s3/content-pages/533/1024x768/2Wb5Hf.jpeg","https://www.ministylehacker.com/wp-content/uploads/2018/12/IMG_20181130_173721-1024x768@2x.jpeg","https://lovetaza.com/wp-content/uploads/2016/06/Naomi2.gif","https://i.pinimg.com/originals/72/fb/13/72fb13f98c7f703cba89e6e741009795.jpg","https://images.unsplash.com/photo-1591860801311-110439814ec9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"]}/>
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
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ControlPanel);
