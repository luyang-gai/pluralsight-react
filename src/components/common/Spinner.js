import React, {PropTypes} from 'react';
import TextInput from './TextInput';
import Button from'./Button';
import CenteredForm from './CenteredForm';

const Spinner = ({onSubmit, onChange}) => {
  return (
    <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  );
};

Spinner.propTypes = {
};

export default Spinner;
