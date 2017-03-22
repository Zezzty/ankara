import React from 'react';

import CellContainer from './CellContainer';

const Row = props => {
  return (
    <div id="row-container">
      {
        props.row && props.row.map(cell => {
          return (
            <CellContainer
              gameId={props.gameId}
              user={props.user}
              key={cell.coords}
              name={cell.name}
              userId={props.userId}
              gameId={props.games.id}
              coords={cell.coords}
              cellPossibleMoves={cell.possibleMoves}
              game={props.game}
              merchants={props.merchants}
              openModal={props.openModal}
              closeModal={props.closeModal}
            />
          );
        })
      }
    </div>
  );
};

export default Row;
