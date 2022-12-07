import React from 'react';
import {
  SQUARE_STATE,
  stateToClass,
  generateEmptyLayout,
  putEntityInLayout,
  indexToCoords,
  calculateOverhang,
  canBePlaced,
} from '../Helpers/Layout';

export const PlayerBoard = ({
    currentlyPlacing,
    setCurrentlyPlacing,
    rotateShip,
    placeShip,
    placedShips,
    hitsByComputer,
  }) => {
    // Player ships on empty layout
    let layout = placedShips.reduce(
      (prevLayout, currentShip) =>
        putEntityInLayout(prevLayout, currentShip, SQUARE_STATE.ship),
      generateEmptyLayout()
    );
  
   