/**
 *
 * ControlPanel
 *
 */

import React, { useState, useEffect } from 'react';
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
import GalleryIcon from '../../icons/Gallery';
import LinkIcon from '../../icons/Link';
import { loadSlideshow } from './actions';

export function ControlPanel(props) {
  useInjectReducer({ key: 'controlPanel', reducer });
  useInjectSaga({ key: 'controlPanel', saga });

  const [geekyMode, setGeekyMode] = useState(false);
  useEffect(props.onLoad, []);
  return (
    <div>
      <Helmet>
        <title>ControlPanel</title>
        <meta name="description" content="Description of ControlPanel" />
      </Helmet>

      <div className="container">
        <span className={`title ${geekyMode ? 'title-detailed' : ''}`}>
          {props.controlPanel.slideshow.name}
        </span>
        <Device
          className={geekyMode ? 'rotated-device' : ''}
          slideshow={props.controlPanel.slideshow}
        />
        <a
          onClick={() => setGeekyMode(!geekyMode)}
          className={geekyMode ? 'geeky-mode-active' : 'geeky-mode'}
          href="#geeky-mode"
        >
          {'<geeky mode />'}
        </a>
        <GroupButton
          buttons={[
            { title: 'Gallery', icon: <GalleryIcon />, color: '#c5006a' },
            { title: 'Link', icon: <LinkIcon />, color: '#03a9ff' },
            { title: 'Call', icon: <CallIcon />, color: '#00b73c' },
          ]}
        />
        <Gallery photos={props.controlPanel.slideshow.photos} />
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
    onLoad: () => {
      dispatch(loadSlideshow());
    },
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ControlPanel);
