import { css } from 'styled-components';

const PRIMARY_COLOR = 'green';
const SECONDARY_COLOR = 'white';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 15px;
  border: 2px solid ${PRIMARY_COLOR};
  color: ${SECONDARY_COLOR};
  background: ${PRIMARY_COLOR};

  &:active {
    background: ${SECONDARY_COLOR};
    color: ${PRIMARY_COLOR};
  }
`;

export default buttonStyles;
