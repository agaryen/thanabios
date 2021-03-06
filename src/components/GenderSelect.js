import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`
  font-size: 25px;
  border-radius: 4px;
  border: 1px solid ${({ denied }) => denied ? '#ff0000' : '#aeaeae'};
  padding: 12px 20px 10px;
  margin: 0 auto;
  text-align: center;
  text-align-last: center;

  &:focus {
    outline: none;
    box-shadow: inset 0 2px 2px #e9e9e9, 0 0 10px 0 rgba(73, 107, 125, 0.3);
  }
`;

const GenderSelect = ({ onChange, value, denied }) => (
  <Select name="gender" value={value} onChange={e => onChange(e.target)} denied={denied}>
    <option value="" disabled>Gender</option>
    <option value="female">Female</option>
    <option value="male">Male</option>
  </Select>
);

GenderSelect.defaultProps = {
  onChange: undefined,
  value: '',
  denied: false,
};

GenderSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  denied: PropTypes.bool,
};

export default GenderSelect;
