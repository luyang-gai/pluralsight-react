import React, {PropTypes} from 'react';

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
