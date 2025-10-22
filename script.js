async function buscarPokemon() {
  const nombre = document.getElementById('pokemonInput').value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
  const resultado = document.getElementById('resultado');

  try {
    const res = await fetch(url);
    const data = await res.json();
    resultado.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p>Altura: ${data.height}</p>
      <p>Peso: ${data.weight}</p>
    `;
  } catch (error) {
    resultado.innerHTML = `<p>Pokémon no encontrado.</p>`;
  }
}