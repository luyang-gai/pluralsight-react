import React from 'react';
import TextInput from './TextInput';

const SearchBar = ({summoner, onSubmit, onChange, errors}) => {
  const styles = {
    display: "flex"
  };

  return (
    <form style={styles}>
      <TextInput
        name="summonerName"
        label="Summoner Name"
        value={summoner}
        placeholder="Search..."
        onChange={onChange}/>

      <input
        type="submit"
        value="Search"
        className="btn btn-primary"
        onClick={onSubmit}/>
    </form>
  );
};

SearchBar.propTypes = {
  summoner: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object
};

export default SearchBar;
