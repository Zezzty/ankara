import React from 'react';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase'

import CircularProgress from 'material-ui/CircularProgress';
import { fadeInDown, shake } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import BoardContainer from './Board/BoardContainer';
import FooterContainer from './Footer/FooterContainer';
import ModalRootContainer from './Modal/ModalRootContainer';
import ChatContainer from './Chat/ChatContainer.js';

import DisplayWinner from './TurnDialogs/DisplayWinner';
import LastTurn from './TurnDialogs/LastTurn';
import PlayerButtons from './PlayerMenu/PlayerButtons';

// PLUGIN required for Material-UI. Provides an onTouchTap() event handler.
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/** ----------- Selectors ----------- */
import { getGameId, getGameChats, getGameMerchants, getPlayerTurn, getLastRound, getPlayerMap, getGameLogData } from '../redux/reducers/game-reducer';
import { getUserId } from '../redux/reducers/user-reducer';

/** ----------- Styles ----------- */

const animateStyles = StyleSheet.create({
  fadeInDown: {
    animationName: fadeInDown,
    animationDuration: '1s'
  },
  shake: {
    animationName: shake,
    animationDuration: '1s'
  }
});

/** -------- Container ---------- */

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderLoadingScreen() {
    return (
      <div id="circular-progress">
        <text id="progress-text">Loading your game board...</text>
        <CircularProgress size={100} thickness={7} color="#ee2d00" style={{ border:"4px solid #de9d89", borderRadius: "200px" }}/>
      </div>
    );
  }

  render() {
    const { gameId, gameChats, playerMap, userId, merchants, playerTurn, lastRound } = this.props;
    return (
      <MuiThemeProvider>
        {
          merchants && userId ?
          <div id="game-container">
            <PlayerButtons />
            { lastRound ? <h3> LAST ROUND</h3> : null}
            <div id="app-container">
              <img className={css(animateStyles.fadeInDown)} src={`images/Ankara-Title.png`} id="game-title" />
              <BoardContainer />
              <FooterContainer />
              <ModalRootContainer />
              {
                lastRound && merchants[playerTurn].number === 0 ?
                <DisplayWinner
                  merchants={merchants}
                  playerMap={playerMap}
                /> : null
              }
            </div>
            <ChatContainer
              userId={userId}
              gameId={gameId}
              chats={gameChats}
              userName={playerMap[userId]}
            />
          </div> : this.renderLoadingScreen()
        }
      </MuiThemeProvider>
    );
  }
}

const fbGameWrappedContainer = firebaseConnect(({ gameId }) => ([`games/${gameId}`, `gameLog/${gameId}`]))(AppContainer);

const mapStateToProps = state => ({
  playerMap: getPlayerMap(state),
  gameId: getGameId(state),
  gameChats: getGameChats(state),
  userId: getUserId(state),
  merchants: getGameMerchants(state),
  playerTurn: getPlayerTurn(state),
  lastRound: getLastRound(state)
});

export default connect(mapStateToProps)(fbGameWrappedContainer)
