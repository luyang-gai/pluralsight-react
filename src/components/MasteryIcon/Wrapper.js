import styled from 'styled-components';

const Wrapper = styled.div`
  height: 48px;
  width: 48px;
  background-image: url(http://ddragon.leagueoflegends.com/cdn/7.10.1/img/sprite/mastery0.png);
  background-position: ${props => props.coordinates.x + 'px ' + props.coordinates.y + 'px'};
  background-repeat: no-repeat no-repeat;
`;

export default Wrapper;
