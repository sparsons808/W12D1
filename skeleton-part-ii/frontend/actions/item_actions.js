// import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";

export const receiveAllItems = (items) => ({
  type: RECEIVE_ALL_ITEMS,
  items
})

export const receiveItem = itemId => ({
  type: RECEIVE_ITEM,
  itemId
})

// export const requestSinglePokemon = pokemonId => (dispatch) => {
//   APIUtil.fetchPokemon(pokemonId)
//   .then(pokemon => dispatch(receivePokemon(pokemon)))
// }