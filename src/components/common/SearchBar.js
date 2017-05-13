import React, {PropTypes} from 'react';
import TextInput from './TextInput';
import Button from'./Button';
import CenteredForm from './CenteredForm';

const SearchBar = ({onSubmit, onChange}) => {
  return (
    <CenteredForm>
      <TextInput
        label="Summoner Name"
        placeholder="Search..."
        onChange={onChange}/>
      <Button onClick={onSubmit}>Search</Button>
    </CenteredForm>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
