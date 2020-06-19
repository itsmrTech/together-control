/**
 *
 * Devices
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDevices from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Devices() {
  useInjectReducer({ key: 'devices', reducer });
  useInjectSaga({ key: 'devices', saga });

  return (
    <div>
      <Helmet>
        <title>Devices</title>
        <meta name="description" content="Description of Devices" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Devices.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  devices: makeSelectDevices(),
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
)(Devices);
