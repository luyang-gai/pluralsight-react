import React, {PropTypes} from 'react';

import TextInput from '../TextInput/index';
import Button from '../Button/index';
import Wrapper from './Wrapper';

const SearchBar = (props) => {
  return (
    <Wrapper onSubmit={props.onSubmit}>
      <TextInput
        label="Summoner Name"
        placeholder="Search..."
        onChange={props.onChange}/>
      <Button onClick={props.onSubmit}  type="submit" value="submit">Search</Button>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
