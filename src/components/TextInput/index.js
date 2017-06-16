import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as styles from '../../styles/Styles';

const TextInput = styled.input`
  background-color: white;
  height: 30px;
  border: 1.5px solid ${styles.PRIMARY_COLOR};
`;

export default TextInput;
