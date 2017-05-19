import React from 'react';
import Spinner from '../../components/Spinner/index';

const Loader = (props) => {
  if (props.loaded) {
    return (
      <div>{props.children}</div>
    );
  } else {
    return (
      <Spinner/>
    );
  }
};

export default Loader;
