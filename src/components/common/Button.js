import React from 'react';
import styled from 'styled-components';
import * as styles from './Styles';

const Button = styled.button`
  font-size: inherit;
  border: none;
  height: 100%;
  background: ${styles.PRIMARY_COLOR};
  color: white;  
  text-align: center;
`;

export default Button;
