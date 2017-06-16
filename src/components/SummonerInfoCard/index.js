import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SummonerRankDisplay from '../SummonerRankDisplay/index';
import ChampionImage from '../ChampionImage/index';
import SummonerSpellsDisplay from '../SummonerSpellsDisplay/index';
import ChampionStats from '../ChampionStats/index';
import Wrapper from './Wrapper';
import RunesDisplay from '../RunesDisplay/index';
import H3 from '../H3/index';
import MasteriesDisplay from '../MasteriesDisplay/index';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

let summonerCardHeaderStyles = {
  display: "flex"
};

class SummonerInfoCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modalIsOpen: false
    };

    this.summoner = this.props.participant;

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }


  render() {
    return (
      <Wrapper>
        <div className="summoner-card-header" style={summonerCardHeaderStyles}>
          <ChampionImage championId={this.props.participant.championId}/>
          <SummonerRankDisplay summoner={this.props.participant}/>
        </div>
        <H3>{this.props.participant.summonerName}</H3>
        {
          this.props.participant.currentChampionStats &&
          <ChampionStats currentChampionStats={this.props.participant.currentChampionStats}/>
        }
        <RunesDisplay runes={this.props.participant.runes}/>
        <div onClick={this.openModal}>Click Me</div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <MasteriesDisplay masteries={this.props.participant.masteries}/>
        </Modal>
        <SummonerSpellsDisplay
          spell1Id={this.props.participant.spell1Id}
          spell2Id={this.props.participant.spell2Id}/>
      </Wrapper>
    )
  }
}

SummonerInfoCard.propTypes = {
  participant: PropTypes.object.isRequired
};


export default SummonerInfoCard;
