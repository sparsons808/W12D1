export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

export const fetchPoke = (pokemonId) => (
  $.ajax({
    method: 'Get',
    url: `/api/pokemon/${pokemonId}`
  })
);