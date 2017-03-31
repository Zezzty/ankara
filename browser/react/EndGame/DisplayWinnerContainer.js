import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { tada, flipY } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

/** ------- Imported Components ------- */
import Modal from '../Modal/Modal';
import GameSummary from './GameSummary';

/** ------- Helper functions ------ */
import { whoIsWinner } from '../../utils/winner';
import { endGame } from '../../routes/move.js';

/** ------- Selectors ------ */
import { getGameId, getPlayerMap, getGameMerchants, getLastRound, getPlayerTurn } from '../../redux/reducers/game-reducer';
import { getUserId } from '../../redux/reducers/user-reducer.js';

/** ------- Animation styles -------- */

const animateStyles = StyleSheet.create({
  tada: {
    animationName: tada,
    animationDuration: '1s'
  },
  flipY: {
    animationName: flipY,
    animationDuration: '2s'
  }
});

/** ------- Container Component -------- */
class DisplayWinnerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleEndGame = this.handleEndGame.bind(this);
  }

  handleEndGame() {
    endGame(this.props.gameId, this.props.userId);
    hashHistory.push('/');
  }

  render() {
    const { playerMap, merchants, lastRound, playerTurn } = this.props;

    if (lastRound && merchants[playerTurn].number === 0) {
      const winner = whoIsWinner(merchants);
      return (
        <Modal>
          <div id="winner-container">
            <div className={css(animateStyles.tada)} id="winner-text-box">
              <text id="winner-text">Winner is {winner && playerMap[winner.id]}</text>
            </div>
            <GameSummary merchants={merchants} playerMap={playerMap} />
            <div id="end-game-btn">
              <RaisedButton label="End Game" style={{ margin: 12 }} primary={true} onTouchTap={this.handleEndGame}  />
            </div>
          </div>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

/** -------- Higher Order Component -------- */
const mapStateToProps = state => ({
  userId: getUserId(state),
  gameId: getGameId(state),
  playerMap: getPlayerMap(state),
  merchants: getGameMerchants(state),
  lastRound: getLastRound(state),
  playerTurn: getPlayerTurn(state)
});

export default connect(mapStateToProps)(DisplayWinnerContainer);
