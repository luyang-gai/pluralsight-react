import styled, {keyframes} from 'styled-components';


const spinnerAnimation = keyframes`
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
`;

const Wrapper = styled.div`
  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;

  > div {
    background-color: green;
    height: 100%;
    width: 6px;
    display: inline-block;
  
    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: ${spinnerAnimation} 1.2s infinite ease-in-out;
  }
  
  .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  
  .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  
  .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  
  .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
`;


export default Wrapper;
