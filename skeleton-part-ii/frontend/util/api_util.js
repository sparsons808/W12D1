export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}


export const fetchPokemon = pokemonId => (
  $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokemonId}`
  })
)


// export const fetchPokemonItem = (pokemonId, itemId) => (
//   $.ajax({
//     method: "GET",
//     url: `api/pokemon/${pokemonId}/item/${itemId}`
//   })
// )

// need pokemon item 