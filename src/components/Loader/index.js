import React, {PropTypes} from 'react';
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

Loader.propTypes = {
  loaded: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired
};

export default Loader;
