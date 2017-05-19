import React, {Component} from 'react';
import Spinner from '../../components_old/common/Spinner';

const Loader = (WrappedComponent) => {
  return class extends Component {
    render() {
      return this.props.currentMatch.participants ? <WrappedComponent {...this.props}/> : <Spinner/>
    }
  }
};

export default Loader;
