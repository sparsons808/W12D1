
export const RECEIVE_ALL_MOVES = "RECEIVE_ALL_MOVES";
export const RECEIVE_MOVE = "RECEIVE_MOVE";

export const receiveAllMoves = (moves) => ({
  type: RECEIVE_ALL_MOVES,
  moves
})

export const receiveItem = moveId => ({
  type: RECEIVE_MOVE,
  moveId
})