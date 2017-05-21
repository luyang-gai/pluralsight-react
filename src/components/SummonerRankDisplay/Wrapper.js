import styled from 'styled-components';
import * as styles from '../../styles/Styles';

const Wrapper = styled.div`
  align-items: center;
  text-align: center;
  border: 4px groove ${props => props.color === 'bronze' ? 'brown' : props.color};
  width: 200px;
  height: 120px;
  borderRadius: 4px;
  display: flex;
`;

export default Wrapper;
