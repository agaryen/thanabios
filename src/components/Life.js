import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../components/Wrapper';
import WeekGrid from '../components/WeekGrid';
import Title from '../components/Title';

const Life = ({ lifeSettingUp, lifeRequestFailed, lifeRequestError, weeks }) => (
  <Wrapper margin="0 auto" height={100} width={40}>
    <Title>Your Life</Title>
    <WeekGrid
      lifeSettingUp={lifeSettingUp}
      lifeRequestFailed={lifeRequestFailed}
      lifeRequestError={lifeRequestError}
      weeks={weeks}
      lineLength={52}
    />
  </Wrapper>
);

Life.defaultProps = {};

Life.propTypes = {
  lifeSettingUp: PropTypes.bool.isRequired,
  lifeRequestFailed: PropTypes.bool.isRequired,
  lifeRequestError: PropTypes.object.isRequired,
  weeks: PropTypes.array.isRequired,
};

export default Life;