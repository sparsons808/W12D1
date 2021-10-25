import {RECEIVE_POKEMON} from "../actions/pokemon_actions"

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  // debugger;
  switch (action.type) {
    case RECEIVE_POKEMON:
      nextState = action.pokemon.items;
      return nextState;
    default:
      return state;
  }
}
  
export default itemsReducer;