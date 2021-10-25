import {RECEIVE_POKEMON} from "../actions/pokemon_actions"

const movesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  // debugger;
  switch (action.type) {
    case RECEIVE_POKEMON:
      nextState = action.pokemon.moves;
      return nextState;
    default:
      return state;
  }
}
  
export default movesReducer;