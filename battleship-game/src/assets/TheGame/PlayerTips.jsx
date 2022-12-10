import React from 'react';

export const PlayerTips = ({
  gameState,
  hitsbyPlayer,
  hitsByComputer,
  startAgain,
  winner,
}) => {
  let numberOfHits = hitsbyPlayer.length;
  let numberOfSuccessfulHits = hitsbyPlayer.filter((hit) => hit.type === 'hit').length;
  let accuracyScore = Math.round(100 * (numberOfSuccessfulHits / numberOfHits));
  let succesfulComputerHits = hitsByComputer.filter((hit) => hit.type === 'hit').length;

  let gameOverPanel = (
    <div>
      <div className="tip-box-title">Game Over!</div>
      <p className="player-tip">
        {winner === 'player' ? 'You win! 🎉' : 'You lose 😭. Better luck next time! '}
      </p>
      <p className="restart" onClick={startAgain}>
        Play again?
      </p>
    </div>
  );

  

  return (
  <div></div>
  );
};