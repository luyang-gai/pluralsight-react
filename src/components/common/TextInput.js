import React, {PropTypes} from 'react';
import styled from 'styled-components';
import * as styles from './Styles';

const TextInput = styled.input`
  background-color: white;
  height: 100%;
  border: 1.5px solid ${styles.PRIMARY_COLOR};
  padding-left: 5px;
`;

export default TextInput;
