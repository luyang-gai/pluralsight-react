import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import SearchBar from './SearchBar';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as summonerActions from '../../actions/summonerActions';


const styles = {
  backgroundColor: "white",
  fontSize: "20px",
  paddingLeft: "20px",
  display: "flex",
  justifyContent: "center",
  height: "50px"
};

const navStyles = {
  padding: "0",
  margin: "auto 50px auto 0px"
};

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      summonerName: ""
    };

    this.updateSummonerName = this.updateSummonerName.bind(this);
    this.navigateToSummonerPage = this.navigateToSummonerPage.bind(this);
    this.search = this.search.bind(this);
  }

  updateSummonerName(event) {
    return this.setState({summonerName: event.target.value});
  }

  navigateToSummonerPage() {
    this.context.router.push('/summoner');
  }

  search(event) {
    event.preventDefault();

    this.props.actions.mockGetCurrentGame(this.state.summonerName)
      .then((data) => {
        debugger;
        this.navigateToSummonerPage();
      })
      .catch(error => {
        console.log(`error received :( ${error}`);
      });
  }

  render() {

    return (
      <div className="headerWrapper" style={styles}>
        <nav style={navStyles}>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          {" | "}
          <Link to="/courses" activeClassName="active">Courses</Link>
          {" | "}
          <Link to="/about" activeClassName="active">About</Link>
          {this.props.loading && <LoadingDots interval={100} dots={20}/>}
          {" | "}
          <Link to="/summonerSearch" activeClassName="active">Summoner</Link>
        </nav>
        <SearchBar onSubmit={this.search} onChange={this.updateSummonerName}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    summonerName: state.summonerName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(summonerActions, dispatch)
  };
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
  // summonerName: PropTypes.string.isRequired
};

Header.contextTypes = {
  router: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
