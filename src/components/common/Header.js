import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import SearchBar from './SearchBar';

const Header = ({loading}) => {
  let styles = {
    backgroundColor: "white",
    fontSize: "20px",
    paddingLeft: "20px",
    display: "flex"
  };

  return (
    <div className="headerWrapper" style={styles}>
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/courses" activeClassName="active">Courses</Link>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {loading && <LoadingDots interval={100} dots={20}/>}
        {" | "}
        <Link to="/summonerSearch" activeClassName="active">Summoner</Link>
      </nav>
      <SearchBar summoner="" onSubmit="" onChange=""/>
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
